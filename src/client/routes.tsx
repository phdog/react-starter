import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader';

import Root from './containers/Root';
import NotFound from './components/NotFound';
import store, { history } from './store';

const Routes = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={Root} />
                <Route path="/test" component={NotFound} />
            </Switch>
        </ConnectedRouter>
    </Provider>
);

export default hot(module)(Routes);
