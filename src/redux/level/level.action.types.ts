import { ILevel } from './level.initial';

export enum LevelActionsEnum {
    LEVEL_SUCCESS = 'LEVEL_SUCCESS',
}

export type LevelSuccessActionType = {
    type: typeof LevelActionsEnum.LEVEL_SUCCESS;
    level: ILevel;
};
export type LevelActionCreatorsType = LevelSuccessActionType;
