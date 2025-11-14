import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const steps = [
  { id: 1, title: "Consultation", description:
    "We begin with a detailed consultation to understand your business goals, target audience, and current strategies — laying the foundation for success." },
  { id: 2, title: "Research and Strategy Development", description:
    "Our team conducts data-driven market and audience research to craft a tailored strategy that aligns perfectly with your goals." },
  { id: 3, title: "Implementation", description:
    "We execute high-performance campaigns using cutting-edge tools and creative content to maximize your online impact." },
  { id: 4, title: "Monitoring and Optimization", description:
    "We continuously analyze key metrics, refine strategies, and optimize for maximum efficiency and ROI." },
  { id: 5, title: "Reporting and Communication", description:
    "You’ll receive transparent, easy-to-understand performance reports and regular updates — keeping you in control at every step." },
  { id: 6, title: "Continual Improvement", description:
    "We constantly adapt to market trends and insights, ensuring your business continues to grow and stay ahead of the competition." },
];

const WorkingProcess = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-24 bg-gradient-to-b from-[#f7fff0] via-white to-[#f6fff1]">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20"
      >
        <span className="inline-block bg-[#B9FF66] text-black px-6 py-2 rounded-xl text-sm font-bold shadow-md tracking-wide">
          Our Working Process
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold mt-8 leading-snug text-gray-900">
          Step-by-Step Guide to Achieving <br /> Your Business Goals
        </h2>

        <p className="text-gray-600 mt-5 max-w-xl mx-auto text-base md:text-lg">
          Each step is refined with precision — ensuring premium quality and smooth collaboration.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="flex flex-col gap-7 max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            layout
            onClick={() => setActive(active === step.id ? null : step.id)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`
              relative overflow-hidden cursor-pointer rounded-3xl border backdrop-blur-xl 
              transition-all duration-700 ease-[cubic-bezier(.22,.68,0,1)]
              ${
                active === step.id
                  ? "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] border-[#c5ff80] scale-[1.015]"
                  : "bg-white/70 border-gray-200 hover:bg-white/90 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              }
            `}
            whileHover={{ y: -3, scale: active === step.id ? 1.015 : 1.01 }}
          >

            {/* Header Row */}
            <motion.div
              layout
              className="flex justify-between items-center px-8 py-7"
            >
              <div className="flex items-center gap-5">
                <motion.h3
                  layout
                  className="text-3xl md:text-4xl font-black text-gray-900"
                >
                  {String(step.id).padStart(2, "0")}
                </motion.h3>

                <motion.p
                  layout
                  className="text-lg md:text-xl font-semibold text-gray-800"
                >
                  {step.title}
                </motion.p>
              </div>

              {/* Icon */}
              <motion.div
                layout
                className="flex items-center justify-center bg-white border border-gray-300 rounded-full p-2.5 shadow-sm"
                whileHover={{ scale: 1.15, rotate: 180 }}
                transition={{ type: "spring", stiffness: 240, damping: 12 }}
              >
                {active === step.id ? (
                  <Minus size={20} strokeWidth={3} />
                ) : (
                  <Plus size={20} strokeWidth={3} />
                )}
              </motion.div>
            </motion.div>

            {/* Content */}
            <AnimatePresence>
              {active === step.id && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0, y: -12 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -12 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.33, 1, 0.68, 1], // premium smooth curve
                  }}
                >
                  <motion.p
                    className="px-8 pb-8 text-gray-700 text-sm md:text-base leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkingProcess;
