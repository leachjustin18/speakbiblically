import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { format, isEqual } from 'date-fns';
import type { ReactElement } from 'react';
import type { TContent } from '../constants/types';
import Typography from './Typography';
import { isBrowser } from '../constants/constants';

const Article = ({
  title,
  description,
  createdAt,
  updatedAt,
  gatsbyPath,
}: TContent): ReactElement => {
  const ArticleComponent = styled.article`
    border: 0.1rem solid #cadaca;
    border-radius: 0.25rem;
    background-color: white;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.4);
    padding: 1rem;
    margin-bottom: 1rem;
  `;

  const DescriptionContent = ({ className }: { className?: string }) => (
    <Typography className={className} gutterBottom>
      {renderRichText(description)}
    </Typography>
  );

  const Description = styled(DescriptionContent)`
    word-wrap: break-word;
    overflow: hidden;
    max-height: 3.6em;
    line-height: 1.8em;
  `;

  const Date = styled(Typography)`
    display: inline-block;
    padding-bottom: 0.5rem;
    padding-right: 1rem;
  `;

  const LinkGatsby = ({ className }: { className?: string }) => (
    <Link className={className} to={gatsbyPath}>
      Learn more
    </Link>
  );

  const LinkToLesson = styled(LinkGatsby)`
    background-color: #3f51b5;
    border-radius: 0.2rem;
    color: white;
    display: inline-block;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    padding: 0.65rem;
    text-decoration: none;
    text-transform: uppercase;

    :focus {
      box-shadow: inset 0 1px 9px black;
    }

    :hover {
      background-color: #303f9f;
    }
  `;

  let createdDate = '';
  let updatedDate = '';

  if (isBrowser) {
    createdDate = format(new window.Date(createdAt), 'MMMMMMM do, yyyy');
    updatedDate = isEqual(
      new window.Date(createdAt),
      new window.Date(updatedAt),
    )
      ? ''
      : format(new window.Date(updatedAt), 'MMMMMMM do, yyyy');
  }

  return (
    <ArticleComponent>
      <Typography variant="h2" fontSize="1.15rem" gutterBottom>
        {title}
      </Typography>

      <Date variant="caption">
        <strong>Created Date:</strong> {createdDate}
      </Date>

      {updatedDate ? (
        <Date variant="caption">
          <strong>Updated Date:</strong> {updatedDate}
        </Date>
      ) : null}

      <Description />

      <LinkToLesson />
    </ArticleComponent>
  );
};

export default Article;
