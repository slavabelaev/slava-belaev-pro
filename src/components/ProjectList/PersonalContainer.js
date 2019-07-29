import React from 'react';
import { compose } from "redux";
import ProjectList from './ProjectList';
import withGithubService from '../hoc/withGithubService';
//import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";

class ProjectListContainer extends React.Component {

    state = {
        projects: null,
        loaded: false,
        hasError: false
    };

    componentDidMount() {
        const { githubService } = this.props;

        githubService.getProjects()
            .then(projects => this.setState({ projects, loaded: true }))
            .catch(error => this.setState({ hasError: true }));
    }

    render() {
        const { hasError, projects, loaded } = this.state;

        if (hasError) return <div>An error has occurred</div>;

        if (!loaded) return null;

        return <ProjectList projects={projects} />
    }
}

export default compose(
    withGithubService(),
)(ProjectListContainer)
