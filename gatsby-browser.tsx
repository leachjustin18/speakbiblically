import React from 'react';
import MUIThemeProvider from './MUIRootWrapper';
import Header from './src/components/Header';
import type { GatsbyBrowser } from 'gatsby';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  props,
  element,
}) => {
  return (
    <MUIThemeProvider {...props}>
      <main>
        <Header />
        {element}
      </main>
    </MUIThemeProvider>
  );
};
