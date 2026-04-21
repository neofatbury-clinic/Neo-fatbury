import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center animate-in fade-in duration-700">
      <div className="relative w-48 h-16 mb-8">
        <Image src="/images/neofatbury-logo.png" alt="NeoFatbury Logo" fill className="object-contain grayscale opacity-60" />
      </div>
      
      <h1 className="text-9xl font-black text-cyan-900/10 absolute -z-10 select-none">404</h1>
      
      <h2 className="text-4xl font-black text-cyan-900 mb-4 tracking-tight">Oops! Page Missing.</h2>
      <p className="text-gray-500 max-w-md mb-10 leading-relaxed font-medium">
        The clinical solution you're looking for might have been moved or is under maintenance. Let's get you back on track.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/" 
          className="px-10 py-4 bg-cyan-600 text-white rounded-full font-bold shadow-xl shadow-cyan-600/20 hover:bg-cyan-700 hover:scale-105 transition-all text-lg"
        >
          Return Home
        </Link>
        <Link 
          href="/contact-us" 
          className="px-10 py-4 border-2 border-cyan-100 text-cyan-900 rounded-full font-bold hover:bg-cyan-50/50 transition-all text-lg"
        >
          Contact Clinic
        </Link>
      </div>
    </div>
  );
}
