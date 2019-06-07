import React from 'react';
import { compose } from 'redux';
import withWidth from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import ProjectItem from '../ProjectItem';

const styles = {
    gridList: {
        padding: '.5rem'
    },
    gridListTile: {
        padding: '.5rem!important'
    }
};

const ProjectList = ({ classes, projects = [], width }) => (
    <GridList
        cellHeight={'auto'}
        cols={{'xs': 1, 'sm': 2, 'md': 3, 'lg': 4, 'xl': 4}[width]}
        spacing={0}
        className={classes.gridList}>
        {projects.map(project => !project.homepage ? null : (
            <GridListTile key={project.id} className={classes.gridListTile}>
                <ProjectItem {...project} />
            </GridListTile>
        ))}
    </GridList>
);

export default compose(
    withStyles(styles),
    withWidth()
)(ProjectList);
