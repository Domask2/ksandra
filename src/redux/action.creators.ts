import appActionCreators from './app/app.action.creators';
import categoryActionCreators from './category/category.action.creators';

export const allActionCreators = {
    ...appActionCreators,
    ...categoryActionCreators,
};
