import { LinkButton } from "./LinkButton";

export interface HeaderProps {
  title: string;
  subtitle?: string;
  link?: string;
  linkText?: string;
}

export function Header({ title, subtitle, link, linkText }: HeaderProps) {
  return (
    <header className="flex px-4 flex-col gap-2 items-center lg:items-start">
      <h1 className="animate-fade-in w-full font-bold text-center lg:text-left text-4xl lg:text-6xl">
        {title}
      </h1>
      {subtitle && (
        <p className="animate-fade-in-500 mb-4 text-xl font-bold uppercase text-orange-500">
          {subtitle}
        </p>
      )}
      {link && linkText && <LinkButton className="animate-fade-in-700" href={link}>{linkText}</LinkButton>}
    </header>
  );
}
