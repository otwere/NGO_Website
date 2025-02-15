import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function ImpactStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const stats = [
    { number: 50000, suffix: "+", label: "Lives Impacted" },
    { number: 100, suffix: "+", label: "Communities Served" },
    { number: 25, suffix: "+", label: "Active Programs" },
    { number: 2, prefix: "$", suffix: "M+", label: "Funds Raised" },
  ];

  return (
    <div className="bg-white py-16" ref={ref}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Impact</h2>
          <p className="mt-4 text-lg text-gray-600">Making a difference together</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2}
                    separator="," 
                    suffix={stat.suffix || ""}
                    prefix={stat.prefix || ""}
                  />
                ) : (
                  "0"
                )}
              </div>
              <div className="mt-2 text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
