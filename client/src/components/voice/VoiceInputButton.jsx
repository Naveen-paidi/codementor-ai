import React from 'react';
import { Mic, MicOff, Square, Loader2, X } from 'lucide-react';

/**
 * VoiceInputButton
 * ----------------
 * Microphone button that records student's speech and transcribes it via Gemini STT.
 * Populates the controlled input field directly upon transcription completion.
 */
export const VoiceInputButton = ({
  isRecording,
  isTranscribing,
  recordingDuration = 0,
  onStartRecording,
  onStopRecording,
  onCancelRecording,
  disabled = false,
  className = ''
}) => {
  // Format seconds to M:SS (e.g. 0:08)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (isTranscribing) {
    return (
      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-[#0F766E] text-xs font-semibold animate-pulse ${className}`}>
        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#10B981]" />
        <span>Transcribing...</span>
      </div>
    );
  }

  if (isRecording) {
    return (
      <div className={`flex items-center gap-1.5 bg-rose-50 border border-rose-200 rounded-xl px-2.5 py-1 text-xs text-rose-700 animate-in fade-in duration-150 ${className}`}>
        {/* Pulsing red recording dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
        </span>

        {/* Timer */}
        <span className="font-mono font-bold text-[11px] text-rose-700">
          {formatTime(recordingDuration)}
        </span>

        {/* Stop and Transcribe button */}
        <button
          type="button"
          onClick={onStopRecording}
          title="Finish recording and transcribe"
          className="p-1 rounded-lg bg-rose-600 hover:bg-rose-700 text-white cursor-pointer transition-colors shadow-xs"
        >
          <Square className="w-3 h-3 fill-current" />
        </button>

        {/* Cancel button */}
        {onCancelRecording && (
          <button
            type="button"
            onClick={onCancelRecording}
            title="Cancel recording"
            className="p-1 rounded-lg hover:bg-rose-100 text-rose-600 cursor-pointer transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onStartRecording}
      disabled={disabled}
      title="Speak your question (Gemini Speech-to-Text)"
      className={`p-2 rounded-xl text-[#0F766E] hover:text-[#064E52] hover:bg-[#ECFDF5] border border-transparent hover:border-[#A7F3D0] active:scale-95 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <Mic className="w-4 h-4" />
    </button>
  );
};

export default VoiceInputButton;
