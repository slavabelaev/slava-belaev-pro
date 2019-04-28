import { PROJECT_INFO_REQUESTED, FETCH_PROJECT_INFO_SUCCESS, FETCH_PROJECT_INFO_FAILURE } from '../types';

const initialState = {};

const projectInfoReducer = (state = initialState, action) => {
    const payload = action.payload;

    switch(action.type) {
        case PROJECT_INFO_REQUESTED:
            return {
                ...state,
                [payload.name]: {
                    error: null,
                    loaded: false,
                    data: {}
                }
            };
        case FETCH_PROJECT_INFO_SUCCESS:
            return {
                ...state,
                [payload.name]: {
                    error: null,
                    loaded: true,
                    data: payload.data
                }
            };
        case FETCH_PROJECT_INFO_FAILURE:
            return {
                ...state,
                [payload.name]: {
                    error: payload.error,
                    loaded: true,
                    data: {}
                }
            };
        default: return state;
    }
};

export default projectInfoReducer;
