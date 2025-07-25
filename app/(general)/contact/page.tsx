import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Janet's Contact Page",
  description: "Generated with love by vercel",
  keywords: ["contact", "nextjs"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}