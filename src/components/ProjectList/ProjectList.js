import React from 'react';
import { compose } from 'redux';
import withWidth from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import Dialog from '@material-ui/core/Dialog';
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

const ProjectList = ({ classes, projects = [], width }) => {
    const [open, setOpen] = React.useState(false);
    const [dialogHomepage, setDialogHomepage] = React.useState(false);
    return (
        <div>
            <GridList
                cellHeight={'auto'}
                cols={{'xs': 1, 'sm': 2, 'md': 3, 'lg': 4, 'xl': 4}[width]}
                spacing={0}
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
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth={true} maxWidth={'xl'}>
                <iframe 
                    src={'https://material.io/resources/resizer/#url=' + dialogHomepage} 
                    frameBorder={0} 
                    style={{width: '100%', height: '95vh'}} 
                />
            </Dialog>
        </div>
    )
};

export default compose(
    withStyles(styles),
    withWidth()
)(ProjectList);
