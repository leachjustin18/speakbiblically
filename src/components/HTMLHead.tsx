import React from 'react';
import type { HeadFC } from 'gatsby';
import type { PropsWithChildren } from 'react';

export const HTMLHead = ({ children }: PropsWithChildren) => (
  <>
    <html lang="en" />
    <title id="title">Speak Biblically</title>
    <meta
      name="description"
      id="description"
      content="Welcome to Speak Biblically!  On this site we are concerned about God's truth"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500&display=fallback"
      rel="stylesheet"
    />

    {children}
  </>
);

export const Head: HeadFC = () => <HTMLHead />;
