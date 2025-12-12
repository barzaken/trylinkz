"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Container } from "../ui/container";
import { BorderBeam } from "../ui/border-beam";
import { DotPattern } from "../ui/dot-pattern";
export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container seperatorContent={
      <DotPattern size="lg" chars={['🇮🇱','❤️','🇮🇱','🇮🇱','🇮🇱','🇮🇱']} density={12} />
    }
      id="contact"
      contentDot={true}
      title="צריכים עזרה?"
      description="השאירו פרטים ונעזור לכם להקים את זה בדקות">
      <div id="contact" className="`relative` col-span-2 ">
        <div className="grid lg:grid-cols-2 gap-16 items-start sm:py-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4"
            >
              מתחילים עכשיו
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold textwhite mb-6 leading-tight">
              לינקים שמביאים יותר המרות
              <br />
              <span className="text-secondary">בלי לשלם ובלי לשנות קמפיינים</span>
            </h2>

            <p className="textwhite/60 text-lg leading-relaxed mb-8">
              השאירו פרטים ונחזור אליכם עם סקריפט מוכן, דוגמאות והגדרות שמירה על פיקסלים.
              תוך 24 שעות תהיו באוויר ותראו את ההבדל ב-ROI.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="relative ">
              <div className="relative z-10 max-w-md justify-self-center bg-background rounded-xl shadow-2xl p-4">
                <div className="space-y-4">
                  <div>
                    <label className="block textwhite/60 text-sm mb-2">שם מלא</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/5 border border-white/10 textwhite placeholderwhite/30 focus:outline-none focus:border-[#088528]/50 focus:ring-1 focus:ring-[#088528]/50 transition-colors"
                      placeholder="הכניסו את שמכם"
                      required
                    />
                  </div>
                  <div className="flex gap-8 w-full items-center justify-between">
                    <div className="flex-1">
                      <label className="block textwhite/60 text-sm mb-2">אימייל</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/5 border border-white/10 textwhite placeholderwhite/30 focus:outline-none focus:border-[#088528]/50 focus:ring-1 focus:ring-[#088528]/50 transition-colors"
                        placeholder="your@email.com"
                        dir="ltr"
                        required
                      />
                    </div>

                    <div className="flex-1">
                      <label className="block textwhite/60 text-sm mb-2">טלפון</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/5 border border-white/10 textwhite placeholderwhite/30 focus:outline-none focus:border-[#088528]/50 focus:ring-1 focus:ring-[#088528]/50 transition-colors"
                        placeholder="050-000-0000"
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block textwhite/60 text-sm mb-2">על מה נדבר?</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 max-h-20 rounded-xl bg-black/5 border border-white/10 textwhite placeholderwhite/30 focus:outline-none focus:border-[#088528]/50 focus:ring-1 focus:ring-[#088528]/50 transition-colors resize-none"
                      placeholder="ספרו לנו על הפרויקט שלכם..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/80 text-white font-semibold py-6 rounded-xl text-lg transition-all duration-300 "
                  >
                    שלחו הודעה
                    <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </div>
                <BorderBeam
                  duration={6}
                  delay={3}
                  size={400}
                  borderWidth={2}
                  className="from-transparent via-teal-500 to-transparent"
                />
              </div>

            </form>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}

