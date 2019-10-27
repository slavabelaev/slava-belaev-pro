import React from 'react';
import { compose } from 'redux';
import withWidth from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import Dialog from '@material-ui/core/Dialog';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles, createStyles } from '@material-ui/core/styles';
import ProjectItem from '../ProjectItem';

const styles = createStyles({
    gridList: {
        padding: '.5rem'
    },
    gridListTile: {
        padding: '.5rem!important',
        width: '100%',
        '@media (min-width: 600px)': { maxWidth: '50%' },
        '@media (min-width: 840px)': { maxWidth: '33.3333%' },
        '@media (min-width: 1280px)': { maxWidth: '25%' },
    }
});

const ProjectList = ({ classes, projects = [], width }) => {
    const [open, setOpen] = React.useState(false);
    const [dialogHomepage, setDialogHomepage] = React.useState(false);
    const dialog = (
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth={true} maxWidth={'xl'}>
            <iframe
                src={`https://material.io/resources/resizer/#url=${dialogHomepage}`}
                frameBorder={0}
                style={{width: '100%', height: '95vh'}}
            />
        </Dialog>
    );
    return (
        <div>
            <GridList
                cellHeight={'auto'}
                spacing={0}
                cols={{'xs': 1, 'sm': 2, 'md': 3, 'lg': 4, 'xl': 4}[width]}
                className={classes.gridList}>
                {projects.map(project => !project.homepage ? null : (
                    <GridListTile key={project.id} className={classes.gridListTile}>
                        <ProjectItem {...project} onShowDemo={() => {
                                setDialogHomepage(project.homepage);
                                setOpen(!open);
                            }} 
                        />
                    </GridListTile>
                ))}
            </GridList>
            {dialog}
        </div>
    )
};

export default compose(
    withStyles(styles),
    withWidth()
)(ProjectList);
