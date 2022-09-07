import * as React from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Main from './layout/Main';

const AuthProvider: React.FC = () => {
    const auth = localStorage.getItem('user-token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) navigate('/sign-in');
    }, [auth, navigate]);

    return (
        <Main>
            <Outlet />
        </Main>
    );
};

export default AuthProvider;
