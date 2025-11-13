import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We begin with a detailed consultation to understand your business goals, target audience, and current strategies — laying the foundation for success.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    description:
      "Our team conducts data-driven market and audience research to craft a tailored strategy that aligns perfectly with your goals.",
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "We execute high-performance campaigns using cutting-edge tools and creative content to maximize your online impact.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    description:
      "We continuously analyze key metrics, refine strategies, and optimize for maximum efficiency and ROI.",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    description:
      "You’ll receive transparent, easy-to-understand performance reports and regular updates — keeping you in control at every step.",
  },
  {
    id: 6,
    title: "Continual Improvement",
    description:
      "We constantly adapt to market trends and insights, ensuring your business continues to grow and stay ahead of the competition.",
  },
];

const WorkingProcess = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-20 bg-gradient-to-b from-[#f9fff7] via-white to-[#f9fff7] text-gray-800 overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16"
      >
        <span className="inline-block bg-[#B9FF66] text-black px-5 py-1.5 rounded-lg text-sm font-semibold shadow-sm tracking-wide">
          Our Working Process
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-6 leading-snug text-gray-900">
          Step-by-Step Guide to Achieving
          <br /> Your Business Goals
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg max-w-xl mx-auto">
          Every step is carefully crafted to ensure long-term success with fluid collaboration.
        </p>
      </motion.div>

      {/* Steps Section */}
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            layout
            onClick={() => setActive(active === step.id ? null : step.id)}
            className={`relative overflow-hidden cursor-pointer backdrop-blur-md rounded-2xl border transition-all duration-700 ease-[cubic-bezier(.22,.68,0,1)] ${
              active === step.id
                ? "bg-lime-100/70 border-lime-400 shadow-[0_12px_30px_rgba(0,0,0,0.07)] scale-[1.01]"
                : "bg-white/80 border-gray-200 hover:bg-gray-50/80 hover:shadow-[0_6px_18px_rgba(0,0,0,0.04)]"
            }`}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              layout
              className="flex justify-between items-center px-8 py-6"
            >
              <div className="flex items-center gap-4">
                <motion.h3
                  layout
                  className="text-2xl md:text-3xl font-extrabold text-gray-900"
                >
                  {String(step.id).padStart(2, "0")}
                </motion.h3>
                <motion.p
                  layout
                  className="text-base md:text-lg font-semibold text-gray-800"
                >
                  {step.title}
                </motion.p>
              </div>
              <motion.div
                layout
                className="flex items-center justify-center bg-white border border-gray-200 rounded-full p-2 shadow-sm transition-all"
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 250, damping: 15 }}
              >
                {active === step.id ? (
                  <Minus size={18} strokeWidth={3} />
                ) : (
                  <Plus size={18} strokeWidth={3} />
                )}
              </motion.div>
            </motion.div>

            <AnimatePresence>
              {active === step.id && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <motion.div
                    className="px-8 pb-6 text-gray-700 text-sm md:text-base leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                  >
                    {step.description}
                  </motion.div>
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
