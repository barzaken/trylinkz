"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/container";
import { BorderBeam } from "../ui/border-beam";

export function AboutSection() {
  return (
      <Container id="about" splitHeader={false} isDotSeperator={true} title="עלינו" description="הכירו את Linkz – הלינק שחוסך חיכוך ומוסיף המרות">

    <>
          {/* Content */}
          <motion.div
            className="col-span-1"
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
              אודות Linkz
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-black mb-6 leading-tight">
              הלינקים שלכם צריכים לעבוד בשבילכם
              <br />
              <span className="text-secondary">ולא נגדכם</span>
            </h2>

            <p className="dark:text-white/60 text-black/60 text-lg leading-relaxed mb-8">
              Linkz נולד כדי לתקן את הבעיה של דפדפני in-app שמורידים אמון ומורידים המרות.
              אנחנו פותחים כל קליק בדפדפן ברירת המחדל, משמרים אנליטיקס, ומוסיפים 30-40% תוצאות בממוצע – בלי לגעת במבנה הקמפיין.
            </p>

            <p className="dark:text-white/60 text-black/60 text-lg leading-relaxed mb-10">
              זה חינם. אין אותיות קטנות. פשוט להדביק סקריפט או ליצור לינק חדש ולהתחיל לראות ROI עולה.
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
            <div className="relative" style={{ direction: "ltr" }}>
              {/* Main Card */}
              <div className="relative z-10 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border dark:border-white/10 border-black/10 p-8 backdrop-blur-xl shadow-xl">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500 dark:bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 dark:bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500 dark:bg-green-500" />
                  <span className="mr-4 text-light text-sm font-mono">linkz-terminal</span>
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
                    <span className="text-secondary">Go live in under 5 minutes</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-secondary"
                    >
                      █
                    </motion.span>
                  </motion.div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">30-40%</div>
                    <div className="text-xs text-light">עלייה ממוצעת</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">5 דק'</div>
                    <div className="text-xs text-light">להטמעה</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">חינם</div>
                    <div className="text-xs text-light">ללא התחייבות</div>
                  </div>
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

