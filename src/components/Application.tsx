import React, { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Application({ t }: { t: any }) {
  const [formData, setFormData] = useState({ name: '', email: '', bio: '', reference: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Attempt to send email via server API
    try {
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: "New Membership Application",
          message: `Bio/Background: ${formData.bio}\nReference: ${formData.reference}`
        }),
      });
      
      const emailResult = await emailResponse.json();
      if (!emailResponse.ok && !db) {
        throw new Error(emailResult.error || "Institutional transmission failure.");
      }
    } catch (err) {
      console.error("Email send error:", err);
      if (!db) {
        setStatus('error');
        return;
      }
    }

    // Save to Firebase as audit trail if available
    if (db) {
      try {
        await addDoc(collection(db, 'leads'), {
          ...formData,
          status: 'pending',
          createdAt: serverTimestamp()
        });
      } catch (error) {
        console.error("Error adding lead to Firestore:", error);
      }
    }

    setStatus('success');
  };

  if (status === 'success') {
    return (
      <section className="py-40 border-t border-stone-100 bg-white">
        <div className="corp-container text-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-green-100">
            <div className="w-10 h-10 bg-green-600 rounded-full animate-pulse" />
          </div>
          <h2 className="font-bold mb-6 text-4xl text-green-950 tracking-tighter">{t.successTitle}</h2>
          <p className="max-w-md mx-auto mb-12 text-stone-500 leading-relaxed text-lg">
            {t.successDesc}
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-sm font-bold text-green-700 hover:text-green-600 transition-colors"
          >
            {t.return}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="liaison" className="py-32 lg:py-52 border-t border-stone-100 bg-white">
      <div id="apply" className="corp-container">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 pr-12">
            <h2 className="text-4xl lg:text-5xl text-green-950 tracking-tighter mb-12">{t.title}</h2>
            <p className="mb-16 text-stone-500 leading-relaxed text-xl max-w-[450px]">
              {t.description}
            </p>
            {status === 'error' && (
              <div className="p-6 bg-red-50 border border-red-100 rounded-sm mb-12">
                <p className="text-sm font-bold text-red-800 tracking-tight mb-2 uppercase">{t.systemError || 'System Error'}</p>
                <p className="text-xs text-red-600 leading-relaxed font-medium">
                  {t.systemErrorDesc || 'We encountered an issue processing your request. Please ensure you are connected to the network or try again later.'}
                </p>
              </div>
            )}
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-stone-200" />
               <span className="text-sm font-medium text-stone-400">{t.reviewText || 'All inquiries undergo clinical review.'}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 p-12 bg-stone-50 border border-stone-100 rounded-sm">
            <div className="md:col-span-1 space-y-2">
              <label className="text-sm font-medium text-stone-500">{t.name}</label>
              <input 
                required
                type="text" 
                placeholder={t.name_placeholder}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-green-700 transition-colors placeholder:text-stone-300 text-lg"
              />
            </div>
            
            <div className="md:col-span-1 space-y-2">
              <label className="text-sm font-medium text-stone-500">{t.email}</label>
              <input 
                required
                type="email" 
                placeholder={t.email_placeholder}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-green-700 transition-colors placeholder:text-stone-300 text-lg"
              />
            </div>

            <div className="md:col-span-2 space-y-2 pt-4">
              <label className="text-sm font-medium text-stone-500">{t.bio}</label>
              <textarea 
                required
                rows={3}
                placeholder={t.bio_placeholder}
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-green-700 transition-colors resize-none placeholder:text-stone-300 text-lg"
              />
            </div>

            <div className="md:col-span-2 space-y-2 pt-4">
              <label className="text-sm font-medium text-stone-500">{t.reference}</label>
              <input 
                type="text" 
                placeholder={t.reference_placeholder}
                value={formData.reference}
                onChange={(e) => setFormData({...formData, reference: e.target.value})}
                className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-green-700 transition-colors placeholder:text-stone-300 text-lg"
              />
            </div>

            <div className="md:col-span-2 pt-8">
              <button 
                disabled={status === 'submitting'}
                className="w-full bg-green-700 py-5 rounded-sm font-bold text-white hover:bg-green-600 transition-all disabled:opacity-50 active:scale-[0.98]"
              >
                {status === 'submitting' ? t.processing : t.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
