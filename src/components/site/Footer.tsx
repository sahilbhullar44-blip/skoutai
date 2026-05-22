import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const cols = [
  {
    title: "Product",
    links: [
      { to: "/features", label: "Features" },
      { to: "/integrations", label: "Integrations" },
      { to: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { to: "/solutions", label: "Sales teams" },
      { to: "/solutions", label: "Recruiters" },
      { to: "/solutions", label: "Agencies" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
      { to: "/about", label: "Careers" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="AI skout" className="h-8 w-auto" priority />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            The unified B2B revenue intelligence platform.{" "}
            <span className="italic-serif">Find, verify, reach</span> — without juggling five tools.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {c.title}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.links.map((l, i) => (
                <li key={i}>
                  <Link href={l.to} className="hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} AI skout Inc. All rights reserved.</p>
          <p>GDPR · CCPA · SOC 2 Type II</p>
        </div>
      </div>
    </footer>
  );
}
