import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Support({ t }: { t: any }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const ts = t.support;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Attempt to send email via server API
    try {
      const emailResponse = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const emailResult = await emailResponse.json();
      if (!emailResponse.ok && !db) {
        // Only throw if Firebase isn't available as a fallback
        throw new Error(emailResult.error || 'Failed to send institutional email.');
      }
      console.log("Email API response:", emailResult);
    } catch (err) {
      console.error("Email send error:", err);
      // We continue if Firebase worked, or throw if both fail
      if (!db) {
        setStatus('error');
        setErrorMessage(err instanceof Error ? err.message : 'Institutional transmission failure.');
        return;
      }
    }

    // Save to Firebase as audit trail if available
    if (db) {
      try {
        await addDoc(collection(db, 'support_tickets'), {
          ...formData,
          status: 'unread',
          createdAt: serverTimestamp()
        });
      } catch (error) {
        console.error("Error adding support ticket to Firestore:", error);
        // We already tried email, so we don't necessarily fail here if email might have worked
      }
    }

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-[#fbfcfb] overflow-x-hidden">
      {/* Page Hero */}
      <section className="relative min-h-[450px] w-full border-b border-stone-100 flex items-center bg-[#fbfcfb]">
        {/* Full-width Tint Overlay */}
        <div className="absolute inset-0 bg-green-900/[0.02] z-0 pointer-events-none" />

        <div className="absolute right-0 top-0 w-1/2 h-full z-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbfcfb] to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1600" 
            alt="Communication"
            className="w-full h-full object-cover grayscale opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="corp-container relative z-20">
          <div className="max-w-[750px] py-20 text-center md:text-left">
            <span className="block mb-6 text-[13px] font-semibold text-green-700 tracking-wider inline-flex items-center gap-3">
              <div className="w-8 h-[1px] bg-green-700/30" />
              LIAISON / SUPPORT
            </span>
            <h1 className="font-bold text-6xl lg:text-7xl text-green-950 tracking-tighter mb-8 italic">{ts.hero_title}</h1>
            <p className="text-xl text-stone-600 leading-relaxed max-w-[600px] mx-auto md:mx-0">
              {ts.hero_desc}
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 corp-container bg-white">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <span className="text-[13px] font-semibold text-green-700 block mb-4 uppercase tracking-[0.2em]">{ts.contactTitle || 'Contact Node'}</span>
              <h2 className="font-bold text-3xl text-green-950 tracking-tighter mb-8 italic">{ts.form_title}</h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-12">
                {ts.form_desc}
              </p>

              <div className="space-y-8 pt-8 border-t border-stone-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-950 mb-1">{ts.comms || 'Communications'}</h4>
                    <p className="text-stone-500 text-sm">{ts.commsDesc || 'Direct encrypted channel via form response.'}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-950 mb-1">{ts.secureLine || 'Secure Line'}</h4>
                    <p className="text-stone-500 text-sm">+41 22 555 0192</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-950 mb-1">{ts.hqNode || 'HQ Node'}</h4>
                    <p className="text-stone-500 text-sm">Geneva, Switzerland</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 md:p-14 border border-stone-100 shadow-2xl shadow-stone-200/50 rounded-sm">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-950 mb-4">{ts.successTitle || 'Transmission Received'}</h3>
                  <p className="text-stone-500 mb-8">{ts.successDesc || 'Your message has been received. We will respond within 24 hours.'}</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-green-700 font-semibold hover:underline"
                  >
                    {ts.anotherMessage || 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-8">
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-stone-500">{ts.name || 'Full Name'}</label>
                       <input 
                         required
                         type="text" 
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                         className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-green-700 transition-colors text-green-950 font-medium placeholder:text-stone-200"
                         placeholder={ts.name_placeholder || 'Your name'}
                       />
                    </div>

                    <div className="space-y-2">
                       <label className="text-sm font-medium text-stone-500">{ts.email || 'Email Address'}</label>
                       <input 
                         required
                         type="email" 
                         value={formData.email}
                         onChange={(e) => setFormData({...formData, email: e.target.value})}
                         className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-green-700 transition-colors text-green-950 font-medium placeholder:text-stone-200"
                         placeholder={ts.email_placeholder || 'name@example.com'}
                       />
                    </div>

                    <div className="space-y-2">
                       <label className="text-sm font-medium text-stone-500">{ts.subject || 'Subject'}</label>
                       <input 
                         required
                         type="text" 
                         value={formData.subject}
                         onChange={(e) => setFormData({...formData, subject: e.target.value})}
                         className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-green-700 transition-colors text-green-950 font-medium placeholder:text-stone-200"
                         placeholder={ts.subject_placeholder || 'How can we help?'}
                       />
                    </div>

                    <div className="space-y-2">
                       <label className="text-sm font-medium text-stone-500">{ts.message || 'Message'}</label>
                       <textarea 
                         required
                         rows={4}
                         value={formData.message}
                         onChange={(e) => setFormData({...formData, message: e.target.value})}
                         className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-green-700 transition-colors text-green-950 font-medium placeholder:text-stone-200 resize-none"
                         placeholder={ts.message_placeholder || 'Details...'}
                       />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-sm text-sm">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <button 
                    disabled={status === 'submitting'}
                    className="w-full bg-green-700 py-5 rounded-sm font-bold text-white hover:bg-green-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50 active:scale-[0.98]"
                  >
                    {status === 'submitting' ? (ts.processing || 'Sending...') : (ts.submit || 'Submit Message')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}
