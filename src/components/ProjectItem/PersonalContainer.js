import React, { Fragment } from 'react';
import { compose } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProjectItem from './ProjectItem';
import withGithubService from '../hoc/withGithubService';

class ProjectItemContainer extends React.Component {

    state = {
        previews: null,
        hasError: false
    };

    componentDidMount() {
        const { name, githubService } = this.props;

        githubService.getProjectPreviews(name)
            .then(previews => this.setState({previews}))
            .catch(error => this.setState({hasError: true}));
    }

    render() {
        const { id, description, html_url, homepage } = this.props;
        const { previews } = this.state;

        return (
            <Fragment>
                <ProjectItem
                    id={id}
                    title={description}
                    demoUrl={homepage}
                    sourceUrl={html_url}
                    previews={previews}
                />
            </Fragment>
        );
    }

}

export default compose(
    withGithubService()
)(ProjectItemContainer)
