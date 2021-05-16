import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Typography from '../typography/Typography';

type ArticleProps = {
  title: string;
  description: string;
  date: string;
  id: string;
};

const Article = styled.article`
  border: 0.1rem solid #cadaca;
  border-radius: 0.25rem;
  background-color: white;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  margin-bottom: 1rem;
`;

const ArticleWrapper = ({
  title,
  description,
  date,
  id,
}: ArticleProps): ReactElement => {
  const LinkGatsby = ({ className }: { className?: string }) => (
    <Link className={className} to={`/lesson?id=${id}`}>
      Learn more about {title}
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

  const DescriptionContent = ({ className }: { className?: string }) => (
    <Typography className={className} gutterBottom>
      {description}
    </Typography>
  );

  const Description = styled(DescriptionContent)`
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

  return (
    <Article key={id}>
      <Typography variant="h3" fontSize="1.15rem" gutterBottom>
        {title}
      </Typography>
      <Typography variant="caption" gutterBottom>
        Date: {date}
      </Typography>
      <Description />
      <LinkToLesson />
    </Article>
  );
};

export default ArticleWrapper;
