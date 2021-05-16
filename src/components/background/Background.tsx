import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { useMediaQuery } from 'react-responsive';

type BackgroundImageDataProp = {
  desktop: {
    childImageSharp: {
      fluid: Record<
        | 'aspectRatio'
        | 'base64'
        | 'sizes'
        | 'src'
        | 'srcSet'
        | 'srcSetWebp'
        | 'srcWebp',
        number | string
      >;
    };
  };
};

const BackgroundSection = ({ className }: { className?: string }) => {
  const isIPadHorizontal = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  const data: BackgroundImageDataProp = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "bible.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1025) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );

  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <>
      {isIPadHorizontal ? (
        <BackgroundImage
          Tag="div"
          className={className}
          fluid={imageData}
          role="img"
        />
      ) : (
        ''
      )}
    </>
  );
};

const Background = styled(BackgroundSection)`
  bottom: 0;
  position: fixed !important;
  top: 0;
  width: 100%;
  z-index: -1;
  opacity: 0.5 !important;
`;

export default Background;
