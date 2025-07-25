import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Janet's About Page",
  description: "Generated with love by vercel",
  keywords: ["about", "nextjs"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}