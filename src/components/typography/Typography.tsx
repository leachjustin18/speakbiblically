import React, { PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';

type TypographyProps = {
  variant?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'caption' | 'span';
  className?: string;
  color?: string;
  fontWeight?: number;
  lineHeight?: number;
  style?: Record<string, string | number>;
  align?: string;
  gutterBottom?: boolean;
  fontSize?: string;
};

const TypographyLocal = ({
  className,
  children,
  variant = 'p',
  style,
}: PropsWithChildren<TypographyProps>): ReactElement => {
  const Variant = variant === 'caption' ? 'span' : variant;

  return (
    <Variant className={className} style={style}>
      {children}
    </Variant>
  );
};

const Typography = styled(TypographyLocal)`
  color: ${({ color }) => color};
  font-weight: ${({ variant, fontWeight }) => {
    const v = variant;
    const isBoldVariant = v === 'h1' || v === 'h2' || v === 'h3' || v === 'h4';
    const weight = fontWeight ?? (isBoldVariant ? 500 : 400);

    return weight;
  }};
  font-size: ${({ variant, fontSize }) => {
    if (fontSize) return fontSize;

    switch (variant) {
      case 'h1':
        return '6rem';
      case 'h2':
        return '3.75rem';
      case 'h3':
        return '3rem';
      case 'caption':
        return '0.75rem';
      default:
        return '1rem';
    }
  }};
  line-height: ${({ lineHeight }) => lineHeight ?? '1.33'};
  text-align: ${({ align }) => align};
  margin-bottom: ${({ gutterBottom }) => gutterBottom && ' 0.35em'};
  display: ${({ gutterBottom }) => gutterBottom && 'block'};
`;

export default Typography;
