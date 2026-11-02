import React from 'react';
import { Volume2, VolumeX, Pause, Play, Square, Loader2 } from 'lucide-react';

/**
 * VoiceOutputButton
 * -----------------
 * Speaker button attached to AI mentor responses.
 * Converts OpenRouter text into high-clarity speech using Gemini Flash TTS.
 * Provides instant Play, Pause, Resume, and Stop controls.
 */
export const VoiceOutputButton = ({
  messageId,
  text,
  playingMessageId,
  playbackStatus,
  onSpeak,
  onPause,
  onResume,
  onStop,
  className = ''
}) => {
  const isThisMessageActive = playingMessageId === messageId;
  const isSynthesizing = isThisMessageActive && playbackStatus === 'synthesizing';
  const isPlaying = isThisMessageActive && playbackStatus === 'playing';
  const isPaused = isThisMessageActive && playbackStatus === 'paused';

  // State: Synthesizing audio via Gemini TTS
  if (isSynthesizing) {
    return (
      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] text-[#0F766E] text-[10px] font-semibold animate-pulse ${className}`}>
        <Loader2 className="w-3 h-3 animate-spin text-[#10B981]" />
        <span>Synthesizing...</span>
      </div>
    );
  }

  // State: Actively playing or paused
  if (isPlaying || isPaused) {
    return (
      <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-[#0F766E]/10 border border-[#0F766E]/30 text-[#0F766E] text-[10px] font-medium shadow-2xs ${className}`}>
        {/* Play/Pause toggle */}
        <button
          type="button"
          onClick={isPlaying ? onPause : onResume}
          title={isPlaying ? 'Pause speech' : 'Resume speech'}
          className="p-1 rounded hover:bg-[#0F766E]/20 text-[#0F766E] cursor-pointer transition-colors"
        >
          {isPlaying ? (
            <Pause className="w-3 h-3 fill-current" />
          ) : (
            <Play className="w-3 h-3 fill-current" />
          )}
        </button>

        {/* Audio waveform visualization bars */}
        <div className="flex items-center gap-0.5 h-3 px-1">
          <span className={`w-0.5 bg-[#10B981] rounded-full transition-all duration-200 ${isPlaying ? 'h-3 animate-pulse' : 'h-1.5'}`} />
          <span className={`w-0.5 bg-[#0F766E] rounded-full transition-all duration-300 ${isPlaying ? 'h-2 animate-bounce' : 'h-1'}`} />
          <span className={`w-0.5 bg-[#10B981] rounded-full transition-all duration-150 ${isPlaying ? 'h-2.5 animate-pulse' : 'h-2'}`} />
        </div>

        {/* Stop button */}
        <button
          type="button"
          onClick={onStop}
          title="Stop speech playback"
          className="p-1 rounded hover:bg-rose-100 text-rose-600 cursor-pointer transition-colors"
        >
          <Square className="w-2.5 h-2.5 fill-current" />
        </button>
      </div>
    );
  }

  // State: Idle (Click to speak)
  return (
    <button
      type="button"
      onClick={() => onSpeak(messageId, text)}
      title="Listen to response (Gemini TTS)"
      className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-lg text-[#64748B] hover:text-[#0F766E] hover:bg-[#ECFDF5] transition-colors cursor-pointer text-[10px] ${className}`}
    >
      <Volume2 className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">Listen</span>
    </button>
  );
};

export default VoiceOutputButton;
