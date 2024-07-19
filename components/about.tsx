"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("简介");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>我</SectionHeading>
      <p>
        人生路慢慢，已经走过20多个春秋，人生阅历也变的丰富多彩。我是一个热爱生活，热爱技术的人。
      </p>
      <p>我喜欢学习新技术，了解新事物。我喜欢挑战自己，不断提升自己。</p>
    </motion.section>
  );
}
