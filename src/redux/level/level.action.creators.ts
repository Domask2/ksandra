import { LevelActionsEnum, LevelSuccessActionType } from './level.action.types';
import { ILevel } from './level.initial';

const levelActionCreators = {
    level: (level: ILevel): LevelSuccessActionType => ({
        type: LevelActionsEnum.LEVEL_SUCCESS,
        level,
    }),
};

export default levelActionCreators;
