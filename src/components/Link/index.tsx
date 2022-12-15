import NextLink from "next/link";

interface NavLinkProps {
  children: any;
  href: string;
}

export function Link({ children, href, ...props }: NavLinkProps) {
  return (
    <NextLink href={href} {...props} legacyBehavior>
      {children}
    </NextLink>
  );
}
