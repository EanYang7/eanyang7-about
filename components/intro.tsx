"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsWechat } from "react-icons/bs";
import { FaBilibili } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const textArray1 = ["前端", "全栈", "AI", "AIGC", "Agent"];
const textArray2 = ["斜杠/青年👀❌", "跨领域复合型人才🤣✅"];

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// 添加字体显示的动态效果（删除）
const typingSpeed = 100; // 打字速度 ms
const deletingSpeed = 50; // 删字速度 ms
const delayBetweenWords = 1000; // 字之间的延迟 ms

function Typewriter() {
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopIndex, setLoopIndex] = React.useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout; // 明确指定类型
    const handleTyping = () => {
      const currentWord = textArray2[loopIndex % textArray2.length];
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setLoopIndex(loopIndex + 1);
        }
      }
    };
    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => {
      if (timer) clearTimeout(timer); // 清除定时器
    };
  }, [displayText, isDeleting, loopIndex]);

  return (
    <span className="font-bold">
      {displayText}
      <span className="blinking-cursor">|</span>
    </span>
  );
}

export default function Intro() {
  const { ref } = useSectionInView("主页", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  // 添加字体显示的动态效果（轮播随机颜色）
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const initialColors = textArray1.map(() => getRandomColor());
    setColors(initialColors);

    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray1.length);
    }, 2000); // 每2秒切换一次

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/Avatar.gif"
              alt="Ean portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.15rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          ></motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, 我是 Ean</span>
        <br /> 我是一名{" "}
        <motion.span
          key={currentTextIndex}
          style={{ color: colors[currentTextIndex] }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {textArray1[currentTextIndex]}
        </motion.span>{" "}
        开发者 <br />
        接触互联网行业{new Date().getFullYear() - 2016}
        年&nbsp;&nbsp;&nbsp;从艺术🎨到技术💻
        <br />
        热衷于探索各类新奇的工具和方法
        <br />
        当代社会
        <Typewriter />
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("联系");
            setTimeOfLastClick(Date.now());
          }}
        >
          直接联系我✉️{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="/Wechat_QR.jpg"
          target="_blank"
        >
          <BsWechat />
        </a>
        <a
          className="bg-white p-2 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/YQisme"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="bg-white p-2 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://space.bilibili.com/244185393"
          target="_blank"
        >
          <FaBilibili />
        </a>
      </motion.div>
    </section>
  );
}
