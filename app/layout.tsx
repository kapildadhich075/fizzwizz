import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "FizzWizz",
  description: "Making Brands ICONIC",
  keywords: [
    "Digital Marketing",
    "Brand Strategy",
    "Content Creation",
    "Social Media Management",
    "Business Consulting",
    "Personal Branding",
    "Voiceover Services",
    "Discovery Session",
    "Customized Proposal",
    "Onboarding Process",
    "Creative Strategy Review",
    "Brand Launch",
    "Content Performance Analysis",
    "Strategic Genius",
    "Expansive Reach",
    "High-Energy Content",
    "Authentic Narratives",
    "Timeless Content",
    "Emotional Connections",
    "Social Media Strategy",
    "Audience Growth",
    "High-Quality Content",
    "Social Media Engagement",
    "Brand Identity Development",
    "Logo Design",
    "Tone of Voice",
    "Brand Philosophy",
    "Packaging Design",
    "Video Campaigns",
    "Video Pre-Production",
    "Video Post-Production",
    "YouTube Channel Management",
    "Business Consulting",
    "Strategic Planning",
    "Business Growth Strategies",
    "Personalized Business Advice",
    "Personal Brand Development",
    "Thought Leadership",
    "Digital Identity",
    "Unique Personal Branding",
    "Professional Voiceover Services",
    "Iconic Voiceovers",
    "Captivating Voice Tones",
    "Voiceover for Ads",
    "Documentary Voiceovers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://ik.imagekit.io/umdiwr6ma/fizzwizz/Fizz%20Wizz%20Logo%20-%20light-02.png?updatedAt=1726098204228"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins_init.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
