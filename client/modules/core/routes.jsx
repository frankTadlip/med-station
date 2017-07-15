import React from 'react';
import Helmet from 'react-helmet';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import root from './root';

// modules
import MainLayout from './components/main_layout';

export default function (injectDeps) {

    injectTapEventPlugin();

    const MainLayoutCtx = injectDeps(MainLayout);

    render(
        <MuiThemeProvider>
            <main>
                <Helmet title="Med-Station"
                  meta={[
                    { name: 'viewport', content: 'width=device-width,initial-scale=1' }
                  ]}
                  link={[
                    { rel: 'shortcut icon', href: '/imgs/favicon.ico' }
                  ]}
                >
                </Helmet>
                <Router history={browserHistory}>
                  <Route path="/" component={MainLayoutCtx}>
                    <IndexRoute path="/main" component={MainLayoutCtx} />
                  </Route>
                </Router>
            </main>
        </MuiThemeProvider>,
        root('root-node')
    );

}
