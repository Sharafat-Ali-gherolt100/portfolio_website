import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, Clock, MessageSquare, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    budget: '$10k - $25k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const EMAIL = 'sharafat.dev.official@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      // Simulate form submission reset
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: 'Full-Stack Web App',
        budget: '$10k - $25k',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#b0c6ff] uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5 text-[#00dbe7]" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#e5e2e1] uppercase tracking-tight">
            Let's Build Together
          </h2>
          <div className="w-12 h-1 bg-[#b0c6ff] rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Info Cards (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-7 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Channels</h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#201f1f] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#b0c6ff]/15 flex items-center justify-center text-[#b0c6ff]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono-code text-[11px] text-[#8c90a1] block">Direct Email</span>
                    <span className="font-mono-code text-xs font-bold text-white select-all">{EMAIL}</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#00dbe7] transition-colors"
                  title="Copy Email to Clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#201f1f] border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#d2bbff]/15 flex items-center justify-center text-[#d2bbff]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono-code text-[11px] text-[#8c90a1] block">Location & Timezone</span>
                  <span className="font-mono-code text-xs font-bold text-white">San Francisco, CA / UTC-7 (Global Remote)</span>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="p-4 rounded-xl bg-[#201f1f] border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00dbe7]/15 flex items-center justify-center text-[#00dbe7]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono-code text-[11px] text-[#8c90a1] block">Expected Response</span>
                  <span className="font-mono-code text-xs font-bold text-white">&lt; 24 Hours Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div className="glass-card p-6 rounded-2xl border border-[#b0c6ff]/30 bg-gradient-to-br from-[#131313] to-[#201f1f]">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#b0c6ff] font-bold mb-2">
                <Sparkles className="w-4 h-4 text-[#00dbe7]" />
                <span>Q3/Q4 2026 Availability</span>
              </div>
              <p className="text-xs text-[#c2c6d8] leading-relaxed">
                Currently open for select contract projects, AI platform consulting, and lead engineer roles. Let's discuss your timeline.
              </p>
            </div>
          </div>

          {/* Interactive Form (Right) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-2xl border border-white/10 relative">
              {submitted ? (
                <div className="p-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                  <p className="text-sm text-[#c2c6d8] max-w-md mx-auto">
                    Thank you, <span className="text-[#b0c6ff] font-bold">{formData.name}</span>. Your inquiry has been received. I will respond to <span className="text-[#00dbe7] font-bold">{formData.email}</span> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="font-mono-code text-xs text-[#c2c6d8] block mb-2 font-medium">
                        Your Name <span className="text-[#b0c6ff]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0d] border border-white/10 text-white font-mono-code text-xs focus:outline-none focus:border-[#b0c6ff] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-mono-code text-xs text-[#c2c6d8] block mb-2 font-medium">
                        Your Email <span className="text-[#b0c6ff]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0a0d] border border-white/10 text-white font-mono-code text-xs focus:outline-none focus:border-[#b0c6ff] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="font-mono-code text-xs text-[#c2c6d8] block mb-2 font-medium">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Full-Stack Web App', 'AI Integration', 'Cloud Architecture', 'Consulting'].map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`font-mono-code text-[11px] py-2 px-3 rounded-lg border text-center transition-all ${
                            formData.projectType === type
                              ? 'bg-[#b0c6ff] text-[#001945] font-bold border-[#b0c6ff]'
                              : 'bg-[#0a0a0d] text-[#c2c6d8] border-white/10 hover:border-white/30'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="font-mono-code text-xs text-[#c2c6d8] block mb-2 font-medium">
                      Estimated Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['< $5k', '$5k - $15k', '$15k - $30k', '$30k+'].map((range) => (
                        <button
                          type="button"
                          key={range}
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`font-mono-code text-[11px] py-2 px-2.5 rounded-lg border text-center transition-all ${
                            formData.budget === range
                              ? 'bg-[#00dbe7] text-[#00363a] font-bold border-[#00dbe7]'
                              : 'bg-[#0a0a0d] text-[#c2c6d8] border-white/10 hover:border-white/30'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-mono-code text-xs text-[#c2c6d8] block mb-2 font-medium">
                      Project Goals & Message <span className="text-[#b0c6ff]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your vision, timeline, or key technical requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0a0d] border border-white/10 text-white font-mono-code text-xs focus:outline-none focus:border-[#b0c6ff] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="primary-btn w-full py-3.5 rounded-xl font-mono-code text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message Direct</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
