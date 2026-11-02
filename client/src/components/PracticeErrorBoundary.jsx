import React from 'react';
import { AlertTriangle, RefreshCw, ArrowLeft, Terminal } from 'lucide-react';

/**
 * Practice Error Boundary
 *
 * Catches any unexpected React lifecycle or rendering errors inside the
 * Practice catalog or interactive workspace. Displays a recovery UI with Retry
 * and logs full diagnostics to the console without silently swallowing the error.
 */
export class PracticeErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the actual error for development diagnosis
    console.error('[PracticeErrorBoundary] Caught rendering exception:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-4xl mx-auto my-12 px-4">
          <div className="bg-white border border-rose-200 rounded-3xl p-8 sm:p-10 shadow-lg space-y-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto shadow-inner">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Unable to load practice workspace
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                An unexpected component error occurred while rendering the interactive practice environment.
                You can retry loading or return to the course catalog.
              </p>
            </div>

            {/* Error Message Details (Non-swallowed diagnostic details) */}
            {this.state.error && (
              <div className="max-w-xl mx-auto p-4 rounded-xl bg-slate-900 text-slate-100 text-left font-mono text-xs overflow-x-auto border border-slate-800 shadow-inner">
                <div className="flex items-center gap-2 text-rose-400 font-bold mb-1">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{this.state.error.name || 'Error'}: {this.state.error.message}</span>
                </div>
                {this.state.errorInfo?.componentStack && (
                  <pre className="text-[11px] text-slate-400 mt-2 whitespace-pre-wrap max-h-32 overflow-y-auto">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleRetry}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                Retry Practice
              </button>

              {this.props.onBackToCurriculum && (
                <button
                  onClick={this.props.onBackToCurriculum}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Courses
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default PracticeErrorBoundary;
