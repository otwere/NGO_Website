import React from "react";
import { motion } from "framer-motion";
import { Hero } from "../components/Hero";
import { ImpactStats } from "../components/ImpactStats";
import { FeaturedCauses } from "../components/FeaturedCauses";
import { NewsPreview } from "../components/NewsPreview";
export function Home() {
  return <motion.main initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }}>
      <Hero />
      <ImpactStats />
      <FeaturedCauses />
      <NewsPreview />
    </motion.main>;
}