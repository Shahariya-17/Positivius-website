import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This helps us understand your needs and tailor our services accordingly.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    description:
      "We analyze your market, competitors, and audience to develop a data-driven marketing strategy designed for measurable success.",
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "Once the strategy is finalized, we execute it through high-impact campaigns across your digital platforms.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    description:
      "We continuously monitor performance metrics, refine tactics, and optimize campaigns for maximum ROI.",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    description:
      "We provide transparent, detailed reports so you’re always informed about performance and growth.",
  },
  {
    id: 6,
    title: "Continual Improvement",
    description:
      "We believe in constant evolution — improving strategies based on insights and emerging trends.",
  },
];

const WorkingProcess = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-16 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Title Section */}
      <div className="text-center mb-14">
        <span className="inline-block bg-lime-300 text-black px-4 py-1 rounded-lg text-sm font-semibold shadow-sm">
          Our Working Process
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
          Step-by-Step Guide to Achieving <br /> Your Business Goals
        </h2>
      </div>

      {/* Accordion Section */}
      <div className="flex flex-col gap-5 max-w-3xl mx-auto">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            className={`rounded-2xl border border-gray-200 shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
              active === step.id
                ? "bg-lime-100 border-l-8 border-lime-400"
                : "bg-white hover:shadow-lg"
            }`}
            onClick={() => setActive(active === step.id ? null : step.id)}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex justify-between items-center px-6 py-5">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-gray-900">{String(step.id).padStart(2, "0")}</h3>
                <p className="font-semibold text-gray-800">{step.title}</p>
              </div>
              <div className="text-gray-800 bg-white shadow-sm border rounded-full p-2">
                {active === step.id ? (
                  <Minus size={18} strokeWidth={3} />
                ) : (
                  <Plus size={18} strokeWidth={3} />
                )}
              </div>
            </div>

            <AnimatePresence>
              {active === step.id && (
                <motion.div
                  className="px-6 pb-5 text-sm text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.description}
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
