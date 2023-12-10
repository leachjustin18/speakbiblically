interface Query {
  createPage: <TContext = Record<string, unknown>>(
    this: void,
    args: Page<TContext>,
    plugin?: ActionPlugin | undefined,
    option?: ActionOptions | undefined,
  ) => void;
  items: any[];
  itemsPerPage?: number;
  pathPrefix?: string;
  component?: string;
}

declare module 'gatsby-awesome-pagination' {
  export const paginate: (query: Query) => void;
}
