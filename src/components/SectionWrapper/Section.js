import { SectionWrapper, Title } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
}