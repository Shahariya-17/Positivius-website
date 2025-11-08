import React from "react";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

const CaseStudies = () => {
  return (
    <section className="px-6 md:px-12 py-20 bg-white font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-[#B9FF66] px-3 py-1 rounded-md">Case Studies</span>
        </h2>
        <p className="text-gray-600 mt-4 md:mt-0 md:w-1/2 leading-relaxed">
          Explore real-life examples of our proven digital marketing success
          through our case studies.
        </p>
      </div>

      {/* Case Studies Container */}
      <div className="bg-[#191A23] text-white rounded-3xl shadow-[0_5px_0_#000] border border-black p-10 md:p-14 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-700">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="md:w-1/3 px-0 md:px-8 py-8 md:py-0 flex flex-col justify-between text-center md:text-left"
          >
            <p className="text-gray-200 leading-relaxed mb-6">{study.text}</p>
            <button className="flex items-center gap-2 text-[#B9FF66] font-medium mx-auto md:mx-0 group">
              <span>Learn more</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
