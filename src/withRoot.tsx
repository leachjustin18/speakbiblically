import React from 'react';
import { StyleSheet } from 'jss';
import { MuiThemeProvider, Theme } from '@material-ui/core/styles';
import getPageContext from './utils/getPageContext';

import { StylesCreator } from '@material-ui/core/styles/withStyles';

interface SheetManagerTheme {
  refs: number;
  sheet: StyleSheet<string>;
}

interface PageContext {
  theme: Theme;
  sheetsManager: Map<StylesCreator, Map<Theme, SheetManagerTheme>>;
}

// tslint:disable-next-line:variable-name
function withRoot(Component: any) {
  class WithRoot extends React.Component<any, {}> {
    private pageContext: PageContext;

    private constructor(props: any) {
      super(props);

      this.pageContext = getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.getElementById('server-side-jss');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    public render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          <Component {...this.props} />
        </MuiThemeProvider>
      );
    }
  }

  return WithRoot;
}

export default withRoot;
