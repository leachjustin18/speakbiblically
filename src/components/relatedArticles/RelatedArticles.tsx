import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const RelatedArticles = ({
  relatedLessons,
}: {
  relatedLessons: string;
}): JSX.Element => {
  const relatedLessonsSplit = relatedLessons.split(';');
  const relatedLessonsLength = relatedLessonsSplit.length - 1;

  const content = relatedLessonsSplit.map((relatedLesson) => {
    const relatedLessonSplit = relatedLesson.split(',');
    const name = relatedLessonSplit[0].trim();
    const url = relatedLessonSplit[1].trim();
    return {
      name,
      url,
    };
  });

  return (
    <>
      {content.map((con, index) => (
        <li
          key={con.name}
          style={index !== relatedLessonsLength ? { marginBottom: 16 } : {}}
        >
          <Link href={con.url} rel="noopener noreferrer" target="_blank">
            {con.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default RelatedArticles;
