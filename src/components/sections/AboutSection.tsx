"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { BorderBeam } from "../ui/border-beam";

export function AboutSection() {
  return (
      <Container gId="06" splitHeader={false} isDotSeperator={true} title="התקנה בלחיצת כפתור" description="הטמיעו את Linkz בלחיצת כפתור">

    <>
          {/* Content */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-black mb-6 leading-tight">
              הלינקים שלכם צריכים לעבוד בשבילכם 
              <span className="text-secondary">       ולא נגדכם </span>
            </h2>

            <p className="dark:text-white/60 text-black/60 text-lg leading-relaxed mb-8">
              Linkz נולד כדי לתקן את הבעיה של דפדפני in-app שמורידים אמון ומורידים המרות.
              אנחנו פותחים כל לינק בדפדפן ברירת המחדל, משמרים אנליטיקס, ומוסיפים 30-40% תוצאות בממוצע – בלי לגעת במבנה הקמפיין.
            </p>

            <p className="dark:text-white/60 text-black/60 text-lg leading-relaxed mb-10">
               חינם. אין אותיות קטנות. פשוט להדביק סקריפט או ליצור לינק חדש ולהתחיל לראות ROI עולה.
            </p>

          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative col-span-1"
          >
            <div className="relative h-full" style={{ direction: "ltr" }}>
              {/* Main Card */}
              <div className="relative h-full z-10 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border dark:border-white/10 border-black/10 p-8 backdrop-blur-xl shadow-xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 dark:bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-500" />
                </div>

                {/* Code Content */}
                <div className="font-mono text-sm space-y-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-secondary">$</span>
                    <span className="text-light">linkz init --free</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-light text-xs"
                  >
                    ✓ Redirect engine ready...
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="text-light text-xs"
                  >
                    ✓ Preserving UTMs & pixels...
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="text-light text-xs"
                  >
                    ✓ Native browser handoff armed...
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-secondary">→</span>
                    <span className="text-secondary">Go live in under 1 minute</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-secondary"
                    >
                      █
                    </motion.span>
                  </motion.div>
                </div>
              <BorderBeam
              duration={6}
              delay={3}
              size={400}
              borderWidth={2}
              className="from-transparent via-teal-500 to-transparent"
            />
              </div>
            </div>
          </motion.div>
          </>
          </Container>
  );
}

