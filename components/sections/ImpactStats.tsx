"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: "1.2M",
    label: "Canadian SMEs",
    description: "Small businesses needing affordable AI solutions",
  },
  {
    value: "2,000+",
    label: "Canadians Trained",
    description: "Year 1 goal for AI literacy and skills development",
  },
  {
    value: "80%",
    label: "Cost Savings",
    description: "Compared to enterprise AI solutions",
  },
  {
    value: "100%",
    label: "Non-Profit",
    description: "Mission over profits, impact over revenue",
  },
];

export function ImpactStats() {
  return (
    <Section className="bg-black text-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Democratizing AI by the Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real impact, measurable change across Canadian communities
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
