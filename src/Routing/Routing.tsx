import * as React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import NonAuthProvider from '../components/NonAuthProvider';
import AuthProvider from '../components/AuthProvider';
import NoteFoundPage from '../Page/NoteFoundPage';
import HomePage from '../Page/HomePage';
// import LoginAuth from '../Page/LoginAuth';
// import Registration from '../Page/Registration';
// import SignIn from '../Page/SignIn';
// import GoogleCallback from '../Page/GoogleCallback';
import NewUser from '../Page/NewUser';
import ResetPassword from '../Page/ResetPassword';
// import ForgotPassword from '../Page/ForgotPassword';
import SignIn from '../Page/SignIn/SignIn';
import SignUp from '../Page/SignUp/SignUp';

const Routing = () => {
    return (
        <Routes>
            <Route element={<NonAuthProvider />}>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />

                {/*<Route path="/forgot-password" element={<ForgotPassword />} />*/}
                {/*<Route path={'/login'} element={<LoginAuth />} />*/}
                {/*<Route path={'/register'} element={<Registration />} />*/}
            </Route>
            <Route element={<AuthProvider />}>
                <Route path={'/'} element={<HomePage />} />
                <Route path="*" element={<NoteFoundPage />} />
                <Route path="newUser" element={<NewUser />} />
            </Route>
            <Route path="reset-password" element={<ResetPassword />} />
            {/*<Route path="/" element={<SignIn />} />*/}
            {/*<Route path="/auth/google" element={<GoogleCallback />} />*/}
        </Routes>
    );
};

export default Routing;
