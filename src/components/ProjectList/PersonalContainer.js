import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ProjectList from './ProjectList';
import withGithubService from '../hoc/withGithubService';
import { projectsRequested, projectsLoaded, projectsFetchError } from "../../actions";

class ProjectListContainer extends React.Component {
    componentWillMount() {
        const { githubService, projectsRequested, projectsLoaded, projectsFetchError } = this.props;

        projectsRequested()
        githubService.getProjects()
            .then(projects => projectsLoaded(projects))
            .catch(error => projectsFetchError(error));
    }

    render() {
        return <ProjectList projects={this.props.projects.items} />
    }
}

const mapStateToProps = state => ({
    projects: state.projects
});

const mapDispatchToProps = {
    projectsRequested,
    projectsLoaded,
    projectsFetchError
};

export default compose(
    withGithubService(),
    connect(mapStateToProps, mapDispatchToProps)
)(ProjectListContainer)
