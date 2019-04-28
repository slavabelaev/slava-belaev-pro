import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProjectItem from './ProjectItem';
import withGithubService from '../hoc/withGithubService';
import { projectInfoRequested, projectInfoLoaded, projectInfoFetchError } from "../../actions/projectsInfo";

class ProjectItemContainer extends React.Component {

    componentWillMount() {
        const { githubService, name, projectInfoRequested, projectInfoLoaded, projectInfoFetchError } = this.props;

        projectInfoRequested(name);
        githubService.getProjectInfo(name)
            .then(data => projectInfoLoaded({
                name: name,
                data: data
            }))
            .catch(error => projectInfoFetchError({
                name: name,
                error: error
            }))
    }

    render() {
        const isLoaded = this.props.projectInfo && this.props.projectInfo.loaded;


        if (!isLoaded) {
            return <CircularProgress />
        }

        return <ProjectItem {...this.props} />
    }

}

const mapStateToProps = (state, { name }) => ({
    projectInfo: state.projectsInfo[name]
});

const mapDispatchToProps = {
    projectInfoRequested,
    projectInfoLoaded,
    projectInfoFetchError
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withGithubService()
)(ProjectItemContainer)
