import {FETCH_PROJECTS_FAILURE, FETCH_PROJECTS_SUCCESS, PROJECTS_REQUESTED} from "../types";

export const projectsRequested = () => ({
    type: PROJECTS_REQUESTED,
    payload: {}
});

export const projectsLoaded = (projects) => ({
    type: FETCH_PROJECTS_SUCCESS,
    payload: projects
});

export const projectsFetchError = (projects) => ({
    type: FETCH_PROJECTS_FAILURE,
    payload: projects
});
