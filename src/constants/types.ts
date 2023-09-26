import type {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';

export type TContent = {
  createdAt: string;
  title: string;
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  updatedAt: string;
  relatedArticles?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  gatsbyPath: string;
  id?: string;
};

export type TLessons = {
  allContentfulLesson: {
    nodes: TContent[];
  };
};

export type TLesson = {
  contentfulLesson: {
    createdAt: string;
    title: string;
    description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    updatedAt: string;
    relatedArticles?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    youTubeId: string;
  };
};
