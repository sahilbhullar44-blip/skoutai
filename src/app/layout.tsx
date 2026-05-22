import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import "@/styles.css";

export const metadata: Metadata = {
  title: "Prospio — Unified B2B Revenue Intelligence",
  description:
    "Find, verify, and reach your next customer with the all-in-one B2B data, enrichment, and outreach platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
