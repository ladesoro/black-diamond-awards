import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Black Diamonds CX Awards", description: "CX Awards archive POC" };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
