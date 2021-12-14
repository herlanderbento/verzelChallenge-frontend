import { Section, SectionSecond } from "./styles";

interface ITitleProps {
  subTitle: string;
  title?: string;
  text?: string;
  className?: string;
}

export function Title({ subTitle, title }: ITitleProps) {
  return (
    <Section>
      <span className="sub-title">{subTitle}</span>
      <h2 className="title">{title}</h2>
    </Section>
  );
}

export function TitleCenter({ subTitle, title, text, className }: ITitleProps) {
  return (
    <SectionSecond className={className}>
      <div className="title">
        <span className="sub-title">{subTitle}</span>
      </div>
      <h2 className="h2-title">{title}</h2>
      <p className="text">{text}</p>
    </SectionSecond>
  );
}
