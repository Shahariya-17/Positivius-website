import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    content:
      "We conduct detailed market research, analyze competitors, and create a customized marketing strategy to meet your business objectives.",
  },
  {
    id: 3,
    title: "Implementation",
    content:
      "Our team executes the strategy with precision — from launching campaigns to optimizing creative assets for the best performance.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    content:
      "We constantly monitor key metrics and make data-driven adjustments to maximize your marketing ROI and campaign effectiveness.",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    content:
      "You’ll receive transparent reports and regular updates so you’re always informed about performance and progress.",
  },
  {
    id: 6,
    title: "Continual Improvement",
    content:
      "We refine and improve strategies based on new data insights to ensure long-term growth and sustainability.",
  },
];

const WorkingProcess = () => {
  const [openStep, setOpenStep] = useState(1);

  const toggleStep = (id) => {
    setOpenStep(openStep === id ? null : id);
  };

  return (
    <section className="px-6 md:px-12 py-20 bg-white font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-[#B9FF66] px-4 py-1 rounded-md shadow-sm">
            Our Working Process
          </span>
        </h2>
        <p className="text-gray-600 mt-4 md:mt-0 md:w-1/2 text-sm leading-relaxed">
          Step-by-step guide to achieving your business goals through our proven
          digital marketing process.
        </p>
      </div>

      {/* Accordion Steps */}
      <div className="space-y-5">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            layout
            className={`border border-black rounded-2xl p-6 md:p-8 shadow-[0_5px_0_#000] transition-all duration-300 ${
              openStep === step.id ? "bg-[#B9FF66]" : "bg-[#F8F8F8]"
            }`}
          >
            {/* Header Row */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep(step.id)}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl md:text-3xl font-bold">
                  {String(step.id).padStart(2, "0")}
                </span>
                <h3
                  className={`text-base md:text-lg font-medium ${
                    openStep === step.id ? "text-black" : "text-gray-800"
                  }`}
                >
                  {step.title}
                </h3>
              </div>
              <div className="p-2 bg-white rounded-full border border-gray-300 shadow-sm">
                {openStep === step.id ? (
                  <Minus className="w-4 h-4 text-black" />
                ) : (
                  <Plus className="w-4 h-4 text-black" />
                )}
              </div>
            </div>

            {/* Content Animation */}
            <AnimatePresence>
              {openStep === step.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 border-t border-black/20 pt-4 text-sm text-gray-800 leading-relaxed"
                >
                  {step.content}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
