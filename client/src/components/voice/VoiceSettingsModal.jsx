import React from 'react';
import { X, Volume2, Mic, Settings2, Sparkles, Check } from 'lucide-react';

const VOICES = [
  { id: 'Puck', name: 'Puck', gender: 'Neutral', desc: 'Clear, modern, tech-focused' },
  { id: 'Charon', name: 'Charon', gender: 'Deep', desc: 'Authoritative, calm, professional' },
  { id: 'Kore', name: 'Kore', gender: 'Warm', desc: 'Warm, encouraging, natural cadence' },
  { id: 'Fenrir', name: 'Fenrir', gender: 'Energetic', desc: 'Crisp, fast, dynamic voice' },
  { id: 'Aoede', name: 'Aoede', gender: 'Melodic', desc: 'Gentle, expressive instructor' }
];

export const VoiceSettingsModal = ({
  isOpen,
  onClose,
  preferredVoice,
  setPreferredVoice,
  autoSpeak,
  setAutoSpeak,
  handsFree,
  setHandsFree,
  useNativeSTT,
  setUseNativeSTT
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="w-full max-w-md bg-white rounded-3xl border border-[#DCE8E8] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-5 py-4 bg-[#064E52] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#043639] p-1.5 flex items-center justify-center border border-[#0F766E]">
              <Settings2 className="w-4 h-4 text-[#34D399]" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Voice Assistant Settings</h3>
              <p className="text-[11px] text-slate-300">Powered by Gemini Speech AI</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#043639] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5 text-xs text-[#172B3A]">
          {/* Voice Selection */}
          <div>
            <label className="font-bold text-xs text-[#064E52] flex items-center gap-1.5 mb-2">
              <Volume2 className="w-3.5 h-3.5 text-[#10B981]" />
              AI Voice Persona (Gemini TTS)
            </label>
            <div className="grid grid-cols-1 gap-2">
              {VOICES.map((v) => {
                const isSelected = preferredVoice.toLowerCase() === v.id.toLowerCase();
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setPreferredVoice(v.id)}
                    className={`flex items-center justify-between p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#ECFDF5] border-[#10B981] text-[#064E52] shadow-2xs'
                        : 'bg-white border-[#DCE8E8] hover:bg-[#F5FAFA] text-[#64748B]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs flex items-center gap-2">
                        {v.name}
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-normal">
                          {v.gender}
                        </span>
                      </div>
                      <p className="text-[11px] mt-0.5 text-[#64748B]">{v.desc}</p>
                    </div>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-3 pt-2 border-t border-[#DCE8E8]">
            {/* Auto-Speak Toggle */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-[#F5FAFA] border border-[#DCE8E8]">
              <div>
                <span className="font-bold text-xs text-[#172B3A] block">Auto-Speak Responses</span>
                <span className="text-[11px] text-[#64748B] block mt-0.5">
                  Automatically read OpenRouter responses aloud upon generation
                </span>
              </div>
              <button
                type="button"
                onClick={() => setAutoSpeak(!autoSpeak)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  autoSpeak ? 'bg-[#10B981]' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    autoSpeak ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Hands-Free Mode Toggle */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-[#F5FAFA] border border-[#DCE8E8]">
              <div>
                <span className="font-bold text-xs text-[#172B3A] block">Hands-Free Auto-Submit</span>
                <span className="text-[11px] text-[#64748B] block mt-0.5">
                  Automatically send question as soon as voice transcription finishes
                </span>
              </div>
              <button
                type="button"
                onClick={() => setHandsFree(!handsFree)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  handsFree ? 'bg-[#10B981]' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    handsFree ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Native Browser STT Fast Path */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-[#F5FAFA] border border-[#DCE8E8]">
              <div>
                <span className="font-bold text-xs text-[#172B3A] block">Fast Browser Speech API</span>
                <span className="text-[11px] text-[#64748B] block mt-0.5">
                  Use local browser speech engine (when supported) for instantaneous transcription
                </span>
              </div>
              <button
                type="button"
                onClick={() => setUseNativeSTT(!useNativeSTT)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  useNativeSTT ? 'bg-[#10B981]' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    useNativeSTT ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 bg-[#F5FAFA] border-t border-[#DCE8E8] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#0F766E] hover:bg-[#064E52] text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceSettingsModal;
