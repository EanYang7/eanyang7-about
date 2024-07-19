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
      <div className="p-6 bg-gray-100">
        <div className="mb-4 p-4 bg-white rounded shadow">
          <p className="text-lg font-semibold mb-2">
            1.
            拥有跨学科教育背景，从数字媒体到深度学习的知识积累，使我能够在艺术与技术间架起桥梁，为产品设计与技术实现提供全面视角。
          </p>
        </div>
        <div className="mb-4 p-4 bg-white rounded shadow">
          <p className="text-lg font-semibold mb-2">
            2.
            通过硕士期间的专业深造，对AI技术及其在各领域的应用有深刻理解，能够洞察客户需求并结合技术优势制定有效策略。
          </p>
        </div>
        <div className="mb-4 p-4 bg-white rounded shadow">
          <p className="text-lg font-semibold mb-2">
            3.
            本科时期的创业经历锻炼了我的抗压能力和解决问题的能力，培养了持续学习和适应变化的积极态度。
          </p>
        </div>
        <div className="mb-4 p-4 bg-white rounded shadow">
          <p className="text-lg font-semibold mb-2">
            4.
            对2023年GPT和AIGC技术的快速发展保持敏锐洞察，积极跟进最新技术趋势，以确保技能和知识的及时更新与应用。
          </p>
        </div>
      </div>
      <p className="mb-3">
        1.拥有跨学科教育背景，从数字媒体到深度学习的知识积累，使我能够在艺术与技术间架起桥梁，为产品设计与技术实现提供全面视角。
        2.通过硕士期间的专业深造，对AI技术及其在各领域的应用有深刻理解，能够洞察客户需求并结合技术优势制定有效策略。
        3.本科时期的创业经历锻炼了我的抗压能力和解决问题的能力，培养了持续学习和适应变化的积极态度。
        4.对2023年GPT和AIGC技术的快速发展保持敏锐洞察，积极跟进最新技术趋势，以确保技能和知识的及时更新与应用。
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
