import Link from "next/link";

interface NavLinkProps {
  children: string;
  href: string;
}

export function NavLink({ children, href, ...props }: NavLinkProps) {
  return (
    <Link href={href} legacyBehavior>
      <a {...props}>{children}</a>
    </Link>
  );
}
