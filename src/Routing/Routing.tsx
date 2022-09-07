import * as React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import NonAuthProvider from '../components/NonAuthProvider';
import AuthProvider from '../components/AuthProvider';
import NoteFoundPage from '../Page/NoteFoundPage';
import NewUser from '../Page/NewUser';
import ResetPassword from '../Page/ResetPassword';
import SignIn from '../Page/SignIn/SignIn';
import SignUp from '../Page/SignUp/SignUp';
import Home from '../Page/Home/Home';
import ForgotPassword from '../Page/ForgotPassword';
import Category from '../Page/Category';

// import GoogleCallback from '../Page/GoogleCallback';

const Routing = () => {
    return (
        <Routes>
            <Route element={<NonAuthProvider />}>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>
            <Route element={<AuthProvider />}>
                <Route path={'/'} element={<Home />} />
                <Route path={'/dashboard'} element={<Home />} />
                <Route path={'/category'} element={<Category />} />
                <Route path="newUser" element={<NewUser />} />
                <Route path="*" element={<NoteFoundPage />} />
            </Route>

            <Route path="reset-password" element={<ResetPassword />} />
            {/*<Route path="/" element={<SignIn />} />*/}
            {/*<Route path="/auth/google" element={<GoogleCallback />} />*/}
        </Routes>
    );
};

export default Routing;
