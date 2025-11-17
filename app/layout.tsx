import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Arun Pandey - Full-Stack Developer",
  description: "Full-Stack Developer | Web3 Enthusiast | System Architect",
  keywords: "developer, react, nextjs, blockchain, web3",
  authors: [{ name: "Arun Pandey" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {children}
      </body>
    </html>
  );
}