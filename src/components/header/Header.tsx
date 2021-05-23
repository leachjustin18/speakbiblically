import React, { ReactElement, PropsWithChildren } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Typography from '../typography/Typography';

type TitleLinkProps = {
  className?: string;
};

const TitleLink = ({
  children,
  className,
}: PropsWithChildren<TitleLinkProps>): ReactElement => (
  <Link to="/" className={className}>
    {children}
  </Link>
);

const Title = styled(TitleLink)`
  color: #d9a762;
  text-decoration: none;
`;

const TitleTypography = styled(Typography)`
  @media (max-width: 37.5rem) {
    font-size: 18vw;
  }
`;

const HeaderComponent = styled.header`
  background-color: #454040;
  padding-bottom: 1.111rem;
`;

const Header = (): ReactElement => (
  <HeaderComponent>
    <TitleTypography variant="h1" align="center">
      <Title>Speak Biblically</Title>
    </TitleTypography>
  </HeaderComponent>
);

export default Header;
