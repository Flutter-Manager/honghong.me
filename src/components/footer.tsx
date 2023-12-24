import NextLink from "next/link";

import { FOOTER_LINKS, type Link } from "@/config/links";

const FooterLink = (props: Link) => {
  const { title, href } = props;

  if (href.startsWith("/")) {
    return (
      <NextLink
        href={href}
        className="text-muted-foreground transition-colors duration-150 hover:text-foreground"
      >
        {title}
      </NextLink>
    );
  }

  return (
    <a
      href={href}
      className="text-muted-foreground transition-colors duration-150 hover:text-foreground"
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="mx-auto px-8 pb-8 flex justify-between max-w-5xl">
      <div>
        {FOOTER_LINKS.map((list) => (
          <div
            key={list.id}
            className="flex items-start justify-between gap-4 pr-4"
          >
            {list.links.map((link) => (
              <FooterLink key={link.title} {...link} />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm">
        <div>GTU Smashers</div>
      </div>
    </footer>
  );
};

export default Footer;
