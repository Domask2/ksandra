import * as React from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const NonAuthProvider: React.FC = () => {
    const auth = localStorage.getItem('user-token');
    // const auth = false;
    const navigate = useNavigate();
    useEffect(() => {
        if (auth) navigate('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth]);

    return <Outlet />;
};

export default NonAuthProvider;
