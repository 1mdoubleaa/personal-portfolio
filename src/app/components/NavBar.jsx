import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/AboutPage", label: "About" },
  { href: "/ProjectsPage", label: "Projects" },
  { href: "/CredentialsPage", label: "Credentials" },
  { href: "/ContactPage", label: "Contact" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <span className="font-semibold tracking-tight">Muhammad Anas Anwar</span>
        <ul className="flex gap-5 text-sm font-medium">
          {nav.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="transition-colors hover:text-primary"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
