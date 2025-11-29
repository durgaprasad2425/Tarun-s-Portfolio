// src/components/Certifications.jsx
import React from "react";

const certifications = [
  {
    title: "Generative AI with Large Language Models",
    issuer: "AWS Training and Certification",
    date: "2022",
    link: "src/assets/certificates_logo/AWS Course Completion Certificate.pdf", // replace with actual certificate link
    description:
      "Covered LLM fundamentals, Artificial Intelligence, Machine Learning, Deep Learning, prompt engineering, RAG, and building production-ready GenAI applications.",
  },
  {
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2022",
    link: "src/assets/certificates_logo/Microsoft marks memo.pdf", // replace
    description:
      "Hands-on experience building LLM-powered agents, tools, and RAG pipelines using LangChain and vector databases.",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "SkillUP by Simplilearn",
    date: "2022",
    link: "src/assets/certificates_logo/thumb_3648647_1658996505.png", // replace
    description:
      "Learned core ML algorithms, model evaluation, feature engineering, and deployment workflows using Python.",
  },
  {
    title: "Global Hackathon 2022 - Participant",
    issuer: "Hackerearth",
    date: "2022",
    link: "https://www.hackerearth.com/certificates/participants/3f4b1d3/", // replace
    description:
      "Strengthened Python, NumPy, Pandas, and data handling skills for analytics and AI workloads.",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="w-full px-4 sm:px-8 lg:px-16 py-12 bg-[#050017]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
          Certifications
        </h2>
        <p className="mt-3 text-center text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          A curated list of certifications that strengthen my expertise in AI,
          LLMs, and modern software development.
        </p>

        {/* Certifications List */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative bg-[#0d081f] border border-gray-700 rounded-xl p-5 shadow-lg hover:border-purple-500 hover:shadow-purple-500/30 transition"
            >
              {/* Tag / Year */}
              <span className="absolute top-3 right-4 text-xs font-medium text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
                {cert.date}
              </span>

              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {cert.title}
              </h3>
              <p className="mt-1 text-sm text-purple-300 font-medium">
                {cert.issuer}
              </p>

              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                {cert.description}
              </p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-semibold text-purple-400 hover:text-purple-300"
                >
                  View Certificate →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
