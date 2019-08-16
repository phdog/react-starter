import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import 'url-search-params-polyfill';
import './styles/base.scss';
import Routes from './routes';
import {TMarkUp} from './constants/types';

const Components = <Routes/>;
const render = (Components: TMarkUp) => ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
            {Components}
        </BrowserRouter>
    </AppContainer>,
    document.getElementById('react-root'));

window.onload = () => {
    render(Components);
};

if ((module as any).hot) {
    (module as any).hot.accept('./routes', () => {
        const NewRoutes = require('./routes').default;
        const newComponents = <NewRoutes />;
        render(newComponents);
    });
}
