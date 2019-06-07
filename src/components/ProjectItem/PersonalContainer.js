import React, { Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import supportsWebP from 'supports-webp';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProjectItem from './ProjectItem';
import withGithubService from '../hoc/withGithubService';
import { projectInfoRequested, projectInfoLoaded, projectInfoFetchError } from "../../actions/projectsInfo";

class ProjectItemContainer extends React.Component {

    imageBasePath = `https://raw.githubusercontent.com/slavabelaev/${this.props.name}/master/previews/`;

    componentWillMount() {
        const { githubService, name, projectInfoRequested, projectInfoLoaded, projectInfoFetchError } = this.props;

        projectInfoRequested(name);
        githubService.getProjectInfo(name)
            .then(data => {
                this.replaceImagesExtToWebpWhenSupported(data)
                    .then(data => projectInfoLoaded({
                        name: name,
                        data: data
                    }));
            })
            .catch(error => projectInfoFetchError({
                name: name,
                error: error
            }))
    }

    replaceImagesExtToWebpWhenSupported(data) {
        return supportsWebP.then(supported => {
            const images = (data.previews && data.previews.images) || [];

            data.images = images.map(image => {
                const fileName = (supported ? image.path.replace('.png', '.webp') : image.path);
                image.path = this.imageBasePath + fileName;
                return image;
            });

            return data;
        });
    }

    render() {
        const { id, description, html_url, homepage, projectInfo } = this.props;
        const isLoaded = projectInfo && projectInfo.loaded;

        if (!isLoaded) {
            return <CircularProgress />
        }

        const images = (projectInfo.data && projectInfo.data.previews && projectInfo.data.previews.images) || [];

        return (
            <Fragment>
                <ProjectItem
                    id={id}
                    title={description}
                    demoUrl={homepage}
                    sourceUrl={html_url}
                    image={`${this.imageBasePath}index.png`}
                    images={images}
                />
            </Fragment>
        );
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
