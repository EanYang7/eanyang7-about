"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Card, Collapse } from "antd";
import Image from "next/image";

const { Meta } = Card;

export default function Moment() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  const { ref } = useSectionInView("时刻");

  const CardContent1: React.FC = () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            alt="example"
            src="/moments/Agent工程师.png"
            layout="responsive"
            width={240}
            height={160}
          />
        }
      >
        <Meta title="Agent" description="Agent工程师认证" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            alt="example"
            src="/moments/InternLM-Camp-T2-TG966.png"
            layout="responsive"
            width={240}
            height={160}
          />
        }
      >
        <Meta
          title="荣誉证书"
          description="上海人工智能实验室主办的书生·浦语大模型实战营"
        />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            alt="example"
            src="/moments/百度灵镜杯智能体开发新人奖.jpg"
            layout="responsive"
            width={240}
            height={160}
          />
        }
      >
        <Meta title="百度灵镜杯智能体开发新人奖" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            alt="example"
            src="/moments/阿里云天池AI大模型.png"
            layout="responsive"
            width={240}
            height={160}
          />
        }
      >
        <Meta title="AI大模型课程" description="阿里云天池AI大模型课程学习" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            alt="example"
            src="/moments/Llama3.png"
            layout="responsive"
            width={240}
            height={160}
          />
        }
      >
        <Meta title="结课学员" description="Llama3 超级课堂" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            alt="example"
            src="/moments/大模型实战营.png"
            layout="responsive"
            width={240}
            height={160}
          />
        }
      >
        <Meta title="结业学员" description="书生·浦语大模型实战营" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            alt="example"
            src="/moments/Llama3优秀学员.png"
            layout="responsive"
            width={240}
            height={160}
          />
        }
      >
        <Meta title="优秀学员" description="Llama3 超级课堂" />
      </Card>
    </div>
  );
  const CardContent2: React.FC = () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            alt="example"
            src="/moments/志愿者证书.jpg"
            layout="responsive"
            width={240}
            height={160}
          />
        }
      >
        <Meta title="志愿者证书" description="2023年青岛海上马拉松" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <Image
            alt="example"
            src="/moments/献血.jpg"
            layout="responsive"
            width={240}
            height={160}
          />
        }
      >
        <Meta title="献血证" />
      </Card>
    </div>
  );
  const CardContent3: React.FC = () => (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <Image
          alt="example"
          src="/moments/麻将.jpg"
          layout="responsive"
          width={240}
          height={160}
        />
      }
    >
      <Meta title="麻将" description="老家前50名🤣" />
    </Card>
  );
  const collapseItems = [
    {
      key: "1",
      label: "专业技能",
      children: <CardContent1 />,
    },
    {
      key: "2",
      label: "社会公益",
      children: <CardContent2 />,
    },
    {
      key: "3",
      label: "文体娱乐",
      children: <CardContent3 />,
    },
  ];

  return (
    <section
      id="moment"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>时刻</SectionHeading>
      <Collapse
        items={collapseItems}
        defaultActiveKey={["1"]}
        onChange={onChange}
      />
    </section>
  );
}
