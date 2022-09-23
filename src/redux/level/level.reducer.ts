import { initialStateLevel } from './level.initial';
import { LevelActionCreatorsType, LevelActionsEnum } from './level.action.types';

const levelReducer = (state = initialStateLevel, action: LevelActionCreatorsType): any => {
    switch (action.type) {
        case LevelActionsEnum.LEVEL_SUCCESS:
            return {
                ...state,
                level: action.level,
            };

        default:
            return state;
    }
};

export default levelReducer;
