import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Main from './layout/Main';

const Roles: React.FC = () => {
    const roles = localStorage.getItem('projects_roles');
    const auth = localStorage.getItem('user-token');

    if (roles !== 'admin' || !auth) return null;

    return (
        <Main>
            <Outlet />
        </Main>
    );
};

export default Roles;
