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
import Category from '../Page/Category/Category';
import Question from '../Page/Questions/Question';
import AddQuestion from '../Page/AddQuestions/AddQuestions';
import ViewQuestion from '../Page/ViewQuestion/ViewQuestion';
import Roles from '../components/Roles';
import QuestionDetails from '../Page/Questions/QuestionDetails';
import Cart from '../Page/Cart/Cart';
import Profile from '../Page/Profile/Profile';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RootState } from '../redux/redux.store';
import { categoryType } from '../Page/Category/categoryType';
import { getCategory } from '../redux/category/category.selector';
// import GoogleCallback from '../Page/GoogleCallback';

const Routing = () => {
    const categories = useTypedSelector((state: RootState) => getCategory(state));
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
                <Route path={'/newUser'} element={<NewUser />} />
                <Route path={'/cart'} element={<Cart />} />
                <Route path={'/profile'} element={<Profile />} />

                {categories &&
                    categories.map((cat: categoryType, index) => {
                        return (
                            <Route key={cat.id + index}>
                                <Route path={`question/:${cat.slug}`} element={<Question />} />
                                <Route path={`question/:${cat.slug}/:slug`} element={<QuestionDetails />} />
                            </Route>
                        );
                    })}
            </Route>

            <Route element={<Roles />}>
                <Route path={'/addQuestion'} element={<AddQuestion />} />
                <Route path={'/viewQuestion'} element={<ViewQuestion />} />
            </Route>

            <Route path="*" element={<NoteFoundPage />} />
            <Route path="reset-password" element={<ResetPassword />} />
            {/*<Route path="/" element={<SignIn />} />*/}
            {/*<Route path="/auth/google" element={<GoogleCallback />} />*/}
        </Routes>
    );
};

export default Routing;
