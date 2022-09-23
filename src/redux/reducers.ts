import appReducer from './app/app.reducer';
import categoryReducer from './category/category.reducer';
import levelReducer from './level/level.reducer';
import classificationReducer from './classification/classification.reducer';

const reducers = {
    app: appReducer,
    category: categoryReducer,
    level: levelReducer,
    classification: classificationReducer,
};

export default reducers;
