import React from 'react';
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

const ProjectList = ({ classes, projects = [] }) => (
    <GridList
        cellHeight={'auto'}
        cols={4}
        spacing={0}
        className={classes.gridList}>
        {projects.map(project => (
            <GridListTile key={project.id} className={classes.gridListTile}>
                <ProjectItem {...project} />
            </GridListTile>
        ))}
    </GridList>
);

export default withStyles(styles)(ProjectList);
