import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BES Online | Bitaugan Elementary School",
  description: "Official online portal of Bitaugan Elementary School, Guiuan South District.",
  openGraph: { title: "BES Online", description: "Bitaugan Elementary School Online Portal", type: "website" }
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}