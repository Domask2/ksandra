import { IClassification } from './classification.initial';

export enum ClassificationActionsEnum {
    CLASSIFICATION_SUCCESS = 'CLASSIFICATION_SUCCESS',
}

export type ClassificationSuccessActionType = {
    type: typeof ClassificationActionsEnum.CLASSIFICATION_SUCCESS;
    classification: IClassification;
};
export type ClassificationActionCreatorsType = ClassificationSuccessActionType;
