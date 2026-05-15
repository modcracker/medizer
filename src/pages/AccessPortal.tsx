import React, { useEffect, useState } from 'react';
import { Key, Shield, ShieldCheck, Lock, ArrowRight, User } from 'lucide-react';
import { motion } from 'motion/react';
import { auth } from '../services/firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';

export default function AccessPortal({ t }: { t: any }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!auth) {
      setIsLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    if (!auth) {
      alert("Authentication system currently offline.");
      return;
    }
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f8] pt-32">
      <div className="corp-container">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[60vh]">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-green-700/30" />
              <span className="text-sm font-bold text-green-700">
                Institutional Security Access
              </span>
            </div>
            
            <h1 className="font-bold text-6xl lg:text-7xl text-green-950 tracking-tighter leading-[0.9] mb-8 italic">
              Institutional <br />
              <span className="text-stone-200 not-italic">Access Gateway.</span>
            </h1>
            
            <p className="text-xl text-stone-600 leading-relaxed max-w-[480px] mb-12 font-medium">
              This terminal is reserved for authenticated Medizer personnel and verified members. Please authenticate to proceed.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="p-8 bg-white border border-stone-100 shadow-sm">
                <Lock className="w-6 h-6 text-green-700 mb-6" />
                <h3 className="text-lg font-bold text-green-950 tracking-tight mb-2 italic">Institutional Privacy.</h3>
                <p className="text-sm text-stone-500 font-medium leading-relaxed">Advanced data encryption tunnel for all clinical records.</p>
              </div>
              <div className="p-8 bg-white border border-stone-100 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-green-700 mb-6" />
                <h3 className="text-lg font-bold text-green-950 tracking-tight mb-2 italic">Verified Access.</h3>
                <p className="text-sm text-stone-500 font-medium leading-relaxed">Multi-factor verification required for all board members.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:offset-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-12 border border-stone-100 shadow-2xl shadow-stone-200/50 rounded-sm relative overflow-hidden"
            >
              {/* Decorative Scan Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-green-700/20 animate-[scan_4s_linear_infinite]" />
              
              <div className="text-center space-y-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full mb-4">
                  {user ? <User className="w-10 h-10 text-green-700" /> : <Key className="w-10 h-10 text-green-700" />}
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-green-950 tracking-tight mb-2">
                    {user ? 'Identity Confirmed' : 'Identity Verification'}
                  </h2>
                  <p className="text-stone-500 text-sm">
                    {user ? `Connected as ${user.email}` : 'Please authenticate via the secure portal'}
                  </p>
                </div>

                {!user ? (
                  <button 
                    onClick={handleSignIn}
                    className="w-full flex items-center justify-center gap-4 bg-green-950 px-12 py-6 hover:bg-green-900 transition-all group rounded-sm shadow-lg shadow-green-950/20 active:scale-[0.98]"
                  >
                    <span className="font-bold text-base text-white">Enter Portal</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-2 transition-transform" />
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-100 rounded-sm">
                      <p className="text-green-800 text-sm font-medium flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" />
                        Directiva Access Granted
                      </p>
                    </div>
                    <button 
                      onClick={() => auth?.signOut()}
                      className="text-sm font-bold text-stone-400 hover:text-red-700 transition-colors"
                    >
                      End Session
                    </button>
                  </div>
                )}

                <div className="pt-8 border-t border-stone-50">
                  <p className="text-xs font-bold text-stone-300">
                    System State: {user ? 'Authorized' : 'Standby'}
                  </p>
                </div>
              </div>
            </motion.div>
            
            <div className="mt-8 flex justify-center gap-8 text-xs font-bold text-stone-400">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Institutional Link
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                Geneva Core
              </span>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan {
          0% { top: -2px; }
          100% { top: 100%; }
        }
      `}} />
    </div>
  );
}
