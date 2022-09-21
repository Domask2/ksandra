export interface IAuth {
    id: string | null;
    name: string | null;
    email: string | null;
    role: string | null;
    authenticated: boolean;
    projects_roles: any;
    theme: string | null;
}
export interface IAppSetting {
    head_styles?: React.CSSProperties;
    logo?: string;
    project_key?: string;
    title?: string;
    sys_vars?: any;
}
export interface IAppInitialized {
    auth: IAuth;
    initialized: boolean;
    initializeError: string;
    category: any;
}

const pr = localStorage.getItem('projects-roles');

let newPr = [];
if (pr?.length) {
    newPr = JSON.parse(pr);
}

export const initialStateApp: IAppInitialized = {
    initialized: false,
    initializeError: '',
    auth: {
        id: localStorage.getItem('user-id') !== undefined ? localStorage.getItem('user-id') : null,
        name: localStorage.getItem('user-name') !== undefined ? localStorage.getItem('user-name') : null,
        email: localStorage.getItem('user-email') !== undefined ? localStorage.getItem('user-email') : null,
        theme: localStorage.getItem('user-theme') !== undefined ? localStorage.getItem('user-theme') : 'default',
        role: localStorage.getItem('user-role') !== undefined ? localStorage.getItem('user-role') : null,
        authenticated: localStorage.getItem('user-token') !== null,
        projects_roles: newPr,
    },
    category: [],
};
