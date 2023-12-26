import type {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

export type TNode = {
  createdAt: string;
  title: string;
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  updatedAt: string;
  relatedArticles?: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  gatsbyPath: string;
  id?: string;
  blogImage: {
    title: string;
    gatsbyImageData: IGatsbyImageData;
  };
};

export type TContent = {
  node: TNode;
};

export type TLessons = {
  allContentfulLesson: {
    edges: TContent[];
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
