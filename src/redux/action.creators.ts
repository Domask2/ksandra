import appActionCreators from './app/app.action.creators';
import categoryActionCreators from './category/category.action.creators';
import questionActionCreators from './question/question.action.creators';

export const allActionCreators = {
    ...appActionCreators,
    ...categoryActionCreators,
    ...questionActionCreators,
};
