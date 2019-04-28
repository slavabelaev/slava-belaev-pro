import projectsReducer from './projects';
import projectInfoReducer from './projectInfo';

const initialState = {
    projects: {},
    projectsInfo: {}
};

const rootReducer = (state = initialState, action) => ({
    projects: projectsReducer(state.projects, action),
    projectsInfo: projectInfoReducer(state.projectsInfo, action)
});

export default rootReducer;
