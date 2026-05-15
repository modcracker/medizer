import React, { useState } from 'react';
import { getHealthInsights } from '../services/gemini';

export default function HealthAI({ t }: { t: any }) {
  const [messages, setMessages] = useState([
    { role: 'ai', text: t.result_headline || 'Health Analysis system active. How can we assist with your clinical inquiry today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getHealthInsights(input);
    const aiMsg = { role: 'ai', text: aiResponse };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <section id="intelligence" className="py-32 lg:py-48 border-t border-stone-100 bg-[#fbfbfb]">
      <div className="corp-container">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-8">
            <h2 className="font-bold text-4xl lg:text-5xl text-green-950 tracking-tighter mb-8 leading-tight">{t.title}</h2>
            <p className="text-stone-600 text-xl font-medium max-w-[600px]">{t.description}</p>
          </div>
        </div>

        <div className="bg-white border border-stone-100 rounded-sm overflow-hidden shadow-2xl shadow-green-950/5 grid lg:grid-cols-5">
          <div className="lg:col-span-2 bg-[#fafafa] p-12 lg:border-r border-stone-100 flex flex-col justify-between">
            <div>
              <div className="flex gap-2 mb-12">
                <div className="w-3 h-3 rounded-full bg-stone-200" />
                <div className="w-3 h-3 rounded-full bg-stone-200" />
                <div className="w-3 h-3 rounded-full bg-stone-200" />
              </div>
              <h3 className="font-bold text-green-950 text-2xl tracking-tighter mb-4 leading-tight">Private Messaging</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Direct interface for medical data review. Please ensure all shared information is accurate.
              </p>
            </div>
                  <div className="space-y-4 pt-12">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-sm font-bold text-green-950">System: Connected</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-stone-300" />
                      <span className="text-sm font-bold text-stone-500">Secure Link</span>
                    </div>
                  </div>
          </div>

          <div className="lg:col-span-3 p-12 flex flex-col bg-white">
            <div className="flex-1 overflow-y-auto mb-12 space-y-10 scrollbar-hide h-[400px]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                    <span className={`text-xs font-bold mb-3 block ${msg.role === 'user' ? 'text-stone-300' : 'text-green-700'}`}>
                      {msg.role === 'user' ? 'Client' : 'Medizer Support'}
                    </span>
                    <p className={`text-lg leading-tight font-medium ${msg.role === 'user' ? 'text-stone-500' : 'text-green-950'}`}>
                      {msg.text}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 bg-green-600 animate-pulse rounded-full" />
                    <span className="text-sm font-bold text-green-700 ml-2">{t.analyzing}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="relative border-b-2 border-stone-100 focus-within:border-green-700 transition-all duration-700">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.placeholder}
                className="w-full bg-transparent border-none py-6 pl-0 pr-32 focus:outline-none text-green-950 font-bold placeholder:text-stone-200 text-xl tracking-tight"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-700 px-8 py-3 rounded-xs text-sm font-bold text-white hover:bg-green-600 disabled:opacity-30 transition-all shadow-xl shadow-green-900/10"
              >
                {t.action}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
