import * as React from 'react';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import { RootState } from './redux/redux.store';
import { getInitialized } from './redux/app/app.selector';
import Routing from './Routing/Routing';
import 'antd/dist/antd.css';
import './assets/styles/main.css';
import './assets/styles/responsive.css';

const App = () => {
    const { initializeApp } = useActions();
    const initialized = useTypedSelector((state: RootState) => getInitialized(state));

    if (!initialized) {
        initializeApp();
        return <>.....загрузка</>;
    }

    return <Routing />;
};

export default App;
