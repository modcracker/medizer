import React, { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Application({ t }: { t: any }) {
  const [formData, setFormData] = useState({ name: '', email: '', bio: '', reference: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!db) {
      alert("System offline. Please check your connection or contact support directly.");
      return;
    }
    setStatus('submitting');
    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        status: 'pending',
        createdAt: serverTimestamp()
      });
      setStatus('success');
    } catch (error) {
      console.error("Error adding lead:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="py-40 border-t border-stone-100 bg-white">
        <div className="corp-container text-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-10 border border-green-100">
            <div className="w-10 h-10 bg-green-600 rounded-full animate-pulse" />
          </div>
          <h2 className="font-bold mb-6 text-4xl text-green-950 tracking-tighter">Inquiry Received.</h2>
          <p className="max-w-md mx-auto mb-12 text-stone-500 leading-relaxed text-lg">
            Our clinical team will review your profile. You will receive a secure communication within 72 hours.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-sm font-bold text-green-700 hover:text-green-600 transition-colors"
          >
            Return to form
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
            <h2 className="text-4xl lg:text-5xl text-green-950 tracking-tighter mb-12">Request access.</h2>
            <p className="mb-16 text-stone-500 leading-relaxed text-xl max-w-[450px]">
              Submit your inquiry for membership review. We maintain a selective threshold to ensure service excellence for our global network.
            </p>
            <div className="flex items-center gap-4">
               <div className="w-12 h-[1px] bg-stone-200" />
               <span className="text-sm font-medium text-stone-400">All inquiries undergo clinical review.</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 p-12 bg-stone-50 border border-stone-100 rounded-sm">
            <div className="md:col-span-1 space-y-2">
              <label className="text-sm font-medium text-stone-500">Full name</label>
              <input 
                required
                type="text" 
                placeholder="First and Last Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-green-700 transition-colors placeholder:text-stone-300 text-lg"
              />
            </div>
            
            <div className="md:col-span-1 space-y-2">
              <label className="text-sm font-medium text-stone-500">Email address</label>
              <input 
                required
                type="email" 
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-green-700 transition-colors placeholder:text-stone-300 text-lg"
              />
            </div>

            <div className="md:col-span-2 space-y-2 pt-4">
              <label className="text-sm font-medium text-stone-500">Objectives</label>
              <textarea 
                required
                rows={3}
                placeholder="Please describe your health objectives..."
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-green-700 transition-colors resize-none placeholder:text-stone-300 text-lg"
              />
            </div>

            <div className="md:col-span-2 space-y-2 pt-4">
              <label className="text-sm font-medium text-stone-500">Reference (Optional)</label>
              <input 
                type="text" 
                placeholder="Who referred you?"
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
                {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
