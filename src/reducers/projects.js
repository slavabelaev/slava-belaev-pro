import { PROJECTS_REQUESTED, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAILURE } from '../types';

const initialState = {
    items: [],
    loaded: false,
    error: null
};

const projectsReducer = (state = initialState, action) => {
    switch(action.type) {
        case PROJECTS_REQUESTED: return {
            items: [],
            error: null,
            loaded: false
        };
        case FETCH_PROJECTS_SUCCESS: return {
            items: action.payload,
            error: null,
            loaded: true
        };
        case FETCH_PROJECTS_FAILURE: return {
            items: [],
            error: action.payload,
            loaded: true
        };
        default: return state;
    }
};

export default projectsReducer;
