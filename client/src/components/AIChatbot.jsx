import React, { useState, useRef, useEffect } from 'react';
import { useLearning } from '../context/LearningContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { api } from '../services/api.js';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Code,
  HelpCircle,
  ChevronRight,
  Loader2,
  Volume2,
  Settings2
} from 'lucide-react';
import Button from './ui/Button.jsx';
import MarkdownRenderer from './ui/MarkdownRenderer.jsx';
import SourceCitations from './ui/SourceCitations.jsx';
import VoiceInputButton from './voice/VoiceInputButton.jsx';
import VoiceOutputButton from './voice/VoiceOutputButton.jsx';
import VoiceSettingsModal from './voice/VoiceSettingsModal.jsx';
import useVoiceAssistant from '../hooks/useVoiceAssistant.js';

export const AIChatbot = () => {
  const { isChatOpen, setIsChatOpen, chatContext, selectedLanguage } = useLearning();
  const { isDark } = useTheme();
  const [sessionId, setSessionId] = useState(() => `chatbot-session-${Date.now()}`);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'ai',
      text: "👋 Hi! I am CodeMentor AI. Ask me any conceptual question, debug your code, request progressive hints, or speak your question using the microphone!"
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
      handleSend(text);
    }
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  const handleSend = async (messageToSend = inputValue) => {
    const text = (messageToSend || '').trim();
    if (!text || isLoading) return;

    const userMessage = { id: `user-${Date.now()}`, sender: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const dialogueHistory = messages
        .filter(m => m.id !== 'welcome' && m.text)
        .slice(-8)
        .map(m => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.text
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
        const aiMessageId = `ai-${Date.now()}`;
        const aiText = res.answer || res.response || "I couldn't process your request.";
        const sources = res.sources || [];

        setMessages(prev => [
          ...prev,
          {
            id: aiMessageId,
            sender: 'ai',
            text: aiText,
            sources,
            routedDomain: res.routedDomain || 'Computer Science'
          }
        ]);

        if (autoSpeak && aiText) {
          speakMessage(aiMessageId, aiText);
        }
      } else {
        setMessages(prev => [
          ...prev,
          {
            id: `ai-err-${Date.now()}`,
            sender: 'ai',
            text: `⚠️ ${res?.error || "Unable to reach CodeMentor AI. Please check server connection."}`
          }
        ]);
      }
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          sender: 'ai',
          text: `⚠️ Network error: ${err.message || 'Failed to communicate with AI Mentor service.'}`
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    {
      label: '💡 Explain concept',
      action: () => handleSend("Explain the core programming concept behind this lesson with a real-world intuitive analogy.")
    },
    {
      label: '🔍 Find bug',
      action: () => {
        if (chatContext?.activeCode) {
          handleSend(`Please review my code for syntax, logic, or edge case bugs:\n\`\`\`\n${chatContext.activeCode}\n\`\`\``);
        } else {
          handleSend("What are the most common edge case errors developers make when solving algorithms?");
        }
      }
    },
    {
      label: '⚡ Optimize',
      action: () => handleSend("How can I optimize time and space complexity for this problem?")
    },
    {
      label: '🧩 Give hint',
      action: () => handleSend("Give me a small Socratic hint without spoiling the complete solution.")
    }
  ];

  if (!isChatOpen) {
    return (
      <button
        onClick={() => setIsChatOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4.5 py-3.5 rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 select-none ${
          isDark
            ? 'bg-[#070B20] text-cyan-300 border border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.4)]'
            : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white shadow-[0_8px_25px_rgba(99,102,241,0.35)] border border-indigo-400/30'
        }`}
      >
        <img src="/logo.png" alt="CodeMentor" className="w-5 h-5 object-contain" />
        <span className="font-black text-xs tracking-wide">Ask CodeMentor</span>
      </button>
    );
  }

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-50 w-full max-w-[420px] h-[590px] flex flex-col rounded-3xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200 select-none ${
        isDark
          ? 'bg-[#070B20]/95 border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.25)] backdrop-blur-2xl'
          : 'bg-white border border-[#D8D1EE] shadow-2xl'
      }`}>
        {/* Header */}
        <div className={`px-4 py-3.5 flex items-center justify-between ${
          isDark
            ? 'bg-[#030617] text-white border-b border-white/10'
            : 'bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 text-white'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/20">
              <img src="/logo.png" alt="CodeMentor" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-black text-xs text-white flex items-center gap-1.5">
                CodeMentor AI
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </h3>
              <p className="text-[10px] opacity-80 font-mono">
                Voice: {preferredVoice} | {(selectedLanguage || 'Any').toUpperCase()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsVoiceSettingsOpen(true)}
              title="Voice Assistant Settings"
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <Settings2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                stopAudio();
                setIsChatOpen(false);
              }}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages Scroll Area */}
        <div className={`flex-1 p-4 overflow-y-auto space-y-3.5 text-xs ${
          isDark ? 'bg-[#070B20]' : 'bg-[#F7F5FC]'
        }`}>
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-white text-xs ${
                  m.sender === 'user'
                    ? 'bg-indigo-600 dark:bg-cyan-600'
                    : 'bg-purple-600 dark:bg-indigo-600'
                }`}
              >
                {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
              </div>

              <div
                className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-600 dark:to-indigo-600 text-white rounded-tr-none font-medium shadow-xs'
                    : 'bg-white dark:bg-[#10152E] border border-[#D8D1EE] dark:border-cyan-500/30 text-[#1E1B4B] dark:text-slate-100 rounded-tl-none shadow-xs'
                }`}
              >
                {m.sender === 'user' ? (
                  <p className="whitespace-pre-wrap">{m.text}</p>
                ) : (
                  <>
                    <MarkdownRenderer content={m.text} />
                    {m.sources && m.sources.length > 0 && (
                      <SourceCitations sources={m.sources} />
                    )}
                    <div className="mt-1.5 pt-1 border-t border-purple-200/50 dark:border-cyan-500/20 flex items-center justify-between">
                      <span className="text-[10px] text-indigo-600 dark:text-cyan-400 font-mono">OpenRouter Hybrid RAG</span>
                      <VoiceOutputButton
                        messageId={m.id}
                        text={m.text}
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
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-indigo-600 dark:text-cyan-400 text-xs italic pl-9 animate-pulse">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-600 dark:text-cyan-400" />
              AI Mentor is formulating response...
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Voice Input Error Notification Banner */}
        {voiceInputError && (
          <div className="px-3 py-1.5 bg-rose-50 dark:bg-rose-950/40 border-t border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300 text-[11px] flex items-center justify-between">
            <span>⚠️ {voiceInputError}</span>
            <button
              onClick={() => cancelRecording()}
              className="text-rose-500 hover:text-rose-700 p-0.5"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Quick Prompts */}
        <div className={`px-3 py-2 border-t flex items-center gap-1.5 overflow-x-auto text-[11px] ${
          isDark
            ? 'bg-[#030617] border-white/10'
            : 'bg-white border-[#D8D1EE]'
        }`}>
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              onClick={qp.action}
              disabled={isLoading || isRecording}
              className={`shrink-0 px-2.5 py-1 rounded-full border transition-colors cursor-pointer disabled:opacity-50 font-medium ${
                isDark
                  ? 'bg-[#10152E] hover:bg-[#151C3E] text-slate-300 hover:text-cyan-300 border-white/10 hover:border-cyan-500/40'
                  : 'bg-[#F7F5FC] hover:bg-purple-100 text-[#64748B] hover:text-[#1E1B4B] border-[#D8D1EE]'
              }`}
            >
              {qp.label}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className={`p-3 border-t flex items-center gap-2 ${
            isDark
              ? 'bg-[#070B20] border-white/10'
              : 'bg-white border-[#D8D1EE]'
          }`}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={
              isRecording
                ? "🎙️ Listening to your voice... Speak now"
                : isTranscribing
                ? "Transcribing with Gemini..."
                : "Ask CodeMentor any question (or use the mic)..."
            }
            disabled={isLoading || isTranscribing}
            className={`flex-1 rounded-2xl px-3.5 py-2 text-xs focus:outline-none transition-colors border ${
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
            size="sm"
            variant="primary"
            disabled={!inputValue.trim() || isLoading || isRecording || isTranscribing}
            className="py-2 px-3"
          >
            <Send className="w-3.5 h-3.5" />
          </Button>
        </form>
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
    </>
  );
};

export default AIChatbot;
