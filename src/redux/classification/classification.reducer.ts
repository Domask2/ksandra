import { initialStateClassification } from './classification.initial';
import { ClassificationActionCreatorsType, ClassificationActionsEnum } from './classification.action.types';

const classificationReducer = (state = initialStateClassification, action: ClassificationActionCreatorsType): any => {
    switch (action.type) {
        case ClassificationActionsEnum.CLASSIFICATION_SUCCESS:
            return {
                ...state,
                classification: action.classification,
            };

        default:
            return state;
    }
};

export default classificationReducer;
