import React from "react";
import illustrationImg from "../../../assets/Illustrations/Illustration.png";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-[#f9fff0] via-white to-[#f9fff0] px-6 md:px-12 py-16 md:py-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Navigating the <br />{" "}
            <span className="text-[#B9FF66]">digital landscape</span> <br /> for success
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including <span className="font-semibold text-gray-800">SEO</span>,{" "}
            <span className="font-semibold text-gray-800">PPC</span>, social media
            marketing, and content creation.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-xl text-sm md:text-base font-medium hover:bg-[#B9FF66] hover:text-black transition-all duration-300 shadow-md">
            Book a consultation
          </button>
        </div>

       
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src={illustrationImg}
            alt="Digital marketing illustration"
            className="w-[90%] md:w-[80%] drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
