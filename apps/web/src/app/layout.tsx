import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open UI Registry｜开源 UI 组件库",
  description:
    "精选、验证并以源码形式安装的前端组件库。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
