import { IClassification } from './classification.initial';
import { ClassificationActionsEnum, ClassificationSuccessActionType } from './classification.action.types';

const classificationActionCreators = {
    classification: (classification: IClassification): ClassificationSuccessActionType => ({
        type: ClassificationActionsEnum.CLASSIFICATION_SUCCESS,
        classification,
    }),
};

export default classificationActionCreators;
