import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  RotateCcw,
  BookOpen,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Code2,
  Bot,
  User,
  GraduationCap,
  Terminal,
  Zap,
  Flame,
  ArrowRight,
  Settings2,
  Volume2,
  X
} from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import Badge from '../components/ui/Badge.jsx';
import Card from '../components/ui/Card.jsx';
import MarkdownRenderer from '../components/ui/MarkdownRenderer.jsx';
import SourceCitations from '../components/ui/SourceCitations.jsx';
import VoiceInputButton from '../components/voice/VoiceInputButton.jsx';
import VoiceOutputButton from '../components/voice/VoiceOutputButton.jsx';
import VoiceSettingsModal from '../components/voice/VoiceSettingsModal.jsx';
import useVoiceAssistant from '../hooks/useVoiceAssistant.js';
import { useLearning } from '../context/LearningContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { api } from '../services/api.js';

export const AIMentorPage = () => {
  const { selectedLanguage, chatContext } = useLearning();
  const { isDark } = useTheme();

  const [sessionId, setSessionId] = useState(() => `mentor-session-${Date.now()}`);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content: `👋 Hello! I am **CodeMentor AI**, your intelligent conversational assistant and programming mentor.\n\nYou can **type or speak your questions using the microphone button**. Every AI response can also be played as spoken audio.\n\nHow can I help you today?`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVoiceSettingsOpen, setIsVoiceSettingsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // Voice Assistant Hook for Gemini STT and TTS
  const {
    isRecording,
    isTranscribing,
    recordingDuration,
    voiceInputError,
    startRecording,
    stopRecording,
    cancelRecording,
    playingMessageId,
    playbackStatus,
    speakMessage,
    pauseAudio,
    resumeAudio,
    stopAudio,
    preferredVoice,
    setPreferredVoice,
    autoSpeak,
    setAutoSpeak,
    handsFree,
    setHandsFree,
    useNativeSTT,
    setUseNativeSTT
  } = useVoiceAssistant({
    onTranscription: (text) => {
      setInputValue((prev) => {
        const trimmed = prev.trim();
        return trimmed ? `${trimmed} ${text}` : text;
      });
    },
    onAutoSubmit: (text) => {
      handleSendMessage(text);
    }
  });

  // Context-aware Quick Pedagogical Actions
  const quickActions = [
    {
      label: 'Explain this concept',
      icon: Lightbulb,
      onClick: () => {
        if (chatContext?.topicTitle) {
          handleSendMessage(`Explain the concept of "${chatContext.topicTitle}" simply and clearly with key principles, real-world analogies, and practical code examples.`);
        } else {
          handleSendMessage(`What programming or computer science concept would you like me to explain? Or can you give me an overview of fundamental concepts to master?`);
        }
      }
    },
    {
      label: 'Provide an analogy',
      icon: BookOpen,
      onClick: () => {
        const subject = chatContext?.topicTitle || selectedLanguage || 'object-oriented programming';
        handleSendMessage(`Provide an intuitive, real-world analogy to help me deeply understand ${subject}.`);
      }
    },
    {
      label: 'Give me a hint',
      icon: HelpCircle,
      onClick: () => {
        if (chatContext?.problemTitle) {
          handleSendMessage(`Give me a small Socratic hint for the problem "${chatContext.problemTitle}" without giving away the full code solution.`);
        } else {
          handleSendMessage(`Give me a thought-provoking challenge question or hint to test my programming reasoning.`);
        }
      }
    },
    {
      label: 'Debug my code',
      icon: AlertTriangle,
      onClick: () => {
        if (chatContext?.activeCode) {
          handleSendMessage(`Here is my current code implementation for analysis:\n\n\`\`\`${selectedLanguage || 'python'}\n${chatContext.activeCode}\n\`\`\`\n\nPlease check for syntax errors, logical bugs, and edge cases.`);
        } else {
          handleSendMessage(`How should I methodically trace and debug runtime bugs and edge cases in my algorithms?`);
        }
      }
    },
    {
      label: 'Code review',
      icon: CheckCircle2,
      onClick: () => {
        if (chatContext?.activeCode) {
          handleSendMessage(`Please review this code for style, efficiency, and asymptotic complexity (Time & Space):\n\n\`\`\`${selectedLanguage || 'python'}\n${chatContext.activeCode}\n\`\`\``);
        } else {
          handleSendMessage(`What best practices and clean code principles should I follow when preparing for technical placement interviews?`);
        }
      }
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend = inputValue) => {
    const text = (textToSend || '').trim();
    if (!text || isLoading) return;

    const userMsg = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const dialogueHistory = messages
        .filter((m) => m.id !== 'welcome' && m.content)
        .slice(-10)
        .map((m) => ({
          role: m.role,
          content: m.content
        }));

      const contextPayload = {
        sessionId,
        language: selectedLanguage || 'python',
        topicSlug: chatContext?.topicSlug || null,
        activeCode: chatContext?.activeCode || null,
        problemTitle: chatContext?.problemTitle || null,
        lastError: chatContext?.lastError || null,
        history: dialogueHistory
      };

      const res = await api.askMentorRAG(text, contextPayload);

      if (res?.success) {
        const answerContent = res.answer || res.response || 'I was unable to formulate an answer.';
        const assistantMsg = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: answerContent,
          routedDomain: res?.routedDomain || 'General',
          sources: res?.sources || [],
          intent: res?.intent || null,
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, assistantMsg]);

        if (autoSpeak) {
          speakMessage(assistantMsg.id, answerContent);
        }
      } else {
        const errorText = res?.error || 'Unable to generate an answer at this moment. Please try asking again.';
        const errorMsg = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `⚠️ ${errorText}`,
          timestamp: new Date()
        };
        setMessages((prev) => [...prev, errorMsg]);
      }
    } catch (err) {
      const errorMsg = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `⚠️ Connection error: ${err.message || 'Service unreachable'}. Please verify backend server is running.`,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetSession = () => {
    stopAudio();
    setSessionId(`mentor-session-${Date.now()}`);
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: `👋 New session started! What would you like to explore? Feel free to ask about any programming language, computer science theory, debugging, or everyday topics.`,
        timestamp: new Date()
      }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6 select-none">
      {/* Brand Header Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden transition-all duration-300 ${
        isDark
          ? 'bg-gradient-to-r from-[#030617] via-[#070B20] to-[#10152E] border border-cyan-500/30 shadow-[0_0_35px_rgba(6,182,212,0.2)]'
          : 'bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 border border-indigo-400/30'
      }`}>
        <div className="flex items-start sm:items-center gap-4 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 p-2.5 flex items-center justify-center shrink-0 shadow-lg">
            <img src="/logo.png" alt="CodeMentor" className="w-full h-full object-contain" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-cyan-400/30">
                Hybrid RAG Active
              </span>
              <span className="text-xs font-bold uppercase text-purple-200 font-mono">
                Preference: {selectedLanguage || 'Any'} (Optional)
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              CodeMentor AI Mentor
            </h1>
            <p className="text-xs opacity-90">
              Interactive conversational intelligence across programming languages, computer science, and career preparation.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto relative z-10">
          <button
            onClick={() => setIsVoiceSettingsOpen(true)}
            className="px-3.5 py-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            title="Voice Assistant Settings (Gemini AI)"
          >
            <Settings2 className="w-3.5 h-3.5 text-cyan-300" />
            <span>Voice: {preferredVoice}</span>
          </button>
          <button
            onClick={handleResetSession}
            className="px-3.5 py-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-colors flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Session</span>
          </button>
        </div>
      </div>

      {/* Quick Action Chips */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider block">
          Quick Pedagogical Actions
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {quickActions.map((qa, idx) => {
            const Icon = qa.icon;
            return (
              <button
                key={idx}
                disabled={isLoading || isRecording}
                onClick={qa.onClick}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer group flex flex-col justify-between disabled:opacity-50 ${
                  isDark
                    ? 'bg-[#070B20] border-white/10 hover:border-cyan-400/50 hover:bg-[#10152E] text-white shadow-xs'
                    : 'bg-white hover:bg-purple-50/70 border-[#D8D1EE] hover:border-purple-300 text-[#1E1B4B] shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="p-1.5 rounded-xl bg-purple-100/70 dark:bg-cyan-950/40 text-indigo-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </span>
                  <ArrowRight className="w-3 h-3 text-[#64748B] dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="text-xs font-bold transition-colors">
                  {qa.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className={`rounded-3xl border overflow-hidden flex flex-col h-[520px] transition-all duration-300 ${
        isDark
          ? 'bg-[#070B20] border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]'
          : 'bg-white border-[#D8D1EE] shadow-sm'
      }`}>
        {/* Messages Scroll Area */}
        <div className={`flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 ${
          isDark ? 'bg-[#070B20]' : 'bg-[#F7F5FC]'
        }`}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              {msg.role === 'user' ? (
                <div className="w-8 h-8 rounded-full bg-indigo-600 dark:bg-cyan-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                  <User className="w-4 h-4" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-purple-600 p-1.5 flex items-center justify-center shrink-0 shadow-md">
                  <img src="/logo.png" alt="CodeMentor" className="w-full h-full object-contain" />
                </div>
              )}

              {/* Chat Bubble */}
              <div
                className={`max-w-[85%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-600 dark:to-indigo-600 text-white shadow-xs'
                    : 'bg-white dark:bg-[#10152E] border border-[#D8D1EE] dark:border-cyan-500/30 text-[#1E1B4B] dark:text-slate-100 shadow-xs'
                }`}
              >
                {msg.role === 'user' ? (
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                ) : (
                  <>
                    <MarkdownRenderer content={msg.content} />
                    {msg.sources && msg.sources.length > 0 && (
                      <SourceCitations sources={msg.sources} />
                    )}
                    <div className="mt-2 pt-1.5 border-t border-purple-200/50 dark:border-cyan-500/20 flex items-center justify-between">
                      <span className="text-[10px] text-indigo-600 dark:text-cyan-400 font-mono">
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                      <VoiceOutputButton
                        messageId={msg.id}
                        text={msg.content}
                        playingMessageId={playingMessageId}
                        playbackStatus={playbackStatus}
                        onSpeak={speakMessage}
                        onPause={pauseAudio}
                        onResume={resumeAudio}
                        onStop={stopAudio}
                      />
                    </div>
                  </>
                )}
                {msg.role === 'user' && (
                  <div className="mt-1 text-[10px] text-right font-medium text-purple-200 dark:text-cyan-200">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Assistant typing indicator */}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-2xl bg-purple-100/50 dark:bg-cyan-950/40 p-1 flex items-center justify-center shrink-0">
                <img src="/logo.png" alt="CodeMentor" className="w-full h-full object-contain animate-pulse" />
              </div>
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#10152E] border border-purple-200 dark:border-cyan-500/30 flex items-center gap-2 text-xs text-indigo-600 dark:text-cyan-400 font-medium">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-cyan-400 animate-spin" />
                <span>CodeMentor AI is synthesizing response...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Voice Input Error Banner */}
        {voiceInputError && (
          <div className="px-4 py-2 bg-rose-50 dark:bg-rose-950/40 border-t border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs flex items-center justify-between">
            <span>⚠️ {voiceInputError}</span>
            <button
              onClick={() => cancelRecording()}
              className="text-rose-500 hover:text-rose-700 p-0.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Input Bar */}
        <div className={`p-3 sm:p-4 border-t ${
          isDark ? 'bg-[#070B20] border-white/10' : 'bg-white border-[#D8D1EE]'
        }`}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                isRecording
                  ? "🎙️ Listening to your voice... Speak now (click Stop when done)"
                  : isTranscribing
                    ? "Transcribing with Gemini Speech AI..."
                    : "Ask CodeMentor any question across programming, CS, or everyday topics (Enter to send)..."
              }
              disabled={isLoading || isTranscribing}
              className={`flex-1 py-3 px-4 rounded-2xl border text-xs sm:text-sm outline-none transition-all ${
                isDark
                  ? 'bg-[#10152E] border-white/10 text-white placeholder-slate-400 focus:border-cyan-400'
                  : 'bg-[#F7F5FC] border-[#D8D1EE] text-[#1E1B4B] placeholder-[#64748B] focus:border-indigo-500 focus:bg-white'
              }`}
            />

            {/* Voice Input Microphone Button */}
            <VoiceInputButton
              isRecording={isRecording}
              isTranscribing={isTranscribing}
              recordingDuration={recordingDuration}
              onStartRecording={startRecording}
              onStopRecording={stopRecording}
              onCancelRecording={cancelRecording}
              disabled={isLoading}
            />

            <Button
              type="submit"
              size="md"
              variant="primary"
              disabled={isLoading || !inputValue.trim() || isRecording || isTranscribing}
              className="px-5 font-black"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Voice Assistant Settings Modal */}
      <VoiceSettingsModal
        isOpen={isVoiceSettingsOpen}
        onClose={() => setIsVoiceSettingsOpen(false)}
        preferredVoice={preferredVoice}
        setPreferredVoice={setPreferredVoice}
        autoSpeak={autoSpeak}
        setAutoSpeak={setAutoSpeak}
        handsFree={handsFree}
        setHandsFree={setHandsFree}
        useNativeSTT={useNativeSTT}
        setUseNativeSTT={setUseNativeSTT}
      />
    </div>
  );
};

export default AIMentorPage;
