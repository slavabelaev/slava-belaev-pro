import {FETCH_PROJECT_INFO_FAILURE, FETCH_PROJECT_INFO_SUCCESS, PROJECT_INFO_REQUESTED} from "../types";

export const projectInfoRequested = (name) => ({
    type: PROJECT_INFO_REQUESTED,
    payload: {
        name
    }
});

export const projectInfoLoaded = (payload) => ({
    type: FETCH_PROJECT_INFO_SUCCESS,
    payload: {
        name: payload.name,
        data: payload.data
    }
});

export const projectInfoFetchError = (payload) => ({
    type: FETCH_PROJECT_INFO_FAILURE,
    payload: {
        name: payload.name,
        error: payload.error
    }
});
