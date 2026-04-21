'use strict';
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('System Error Captured:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6 text-4xl">
        ⚠️
      </div>
      <h2 className="text-3xl font-black text-gray-900 mb-4">Something went wrong</h2>
      <p className="text-gray-500 max-w-md mb-10 leading-relaxed">
        Our clinical system encountered an unexpected issue while loading this page. Our team has been notified.
      </p>
      
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-cyan-600 text-white rounded-full font-bold shadow-lg hover:bg-cyan-700 transition-all"
        >
          Try Again
        </button>
        <Link 
          href="/" 
          className="px-8 py-3 border border-gray-200 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
