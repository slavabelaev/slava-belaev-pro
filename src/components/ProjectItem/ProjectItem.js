import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
    },
    media: {
        height: 200,
        backgroundPositionY: 'top',
        //filter: 'grayscale(100%)',
        //transition: '.36s',
        '&:hover': {
            //filter: 'grayscale(0)'
        }
    }
};

const ProjectItem = ({ classes, name, description, html_url, homepage }) => (
    <Card className={classes.root}>
        <CardMedia
            className={classes.media}
            image={`https://raw.githubusercontent.com/slavabelaev/${name}/master/previews/home.png`}
        />
        <CardContent>
            <Typography component="p">
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button
                variant="contained"
                color="primary"
                target="_blank"
                href={homepage}
            >
                See Demo
            </Button>
            <Button
                color="primary"
                target="_blank"
                href={html_url}
            >
                Source
            </Button>
        </CardActions>
    </Card>
);

ProjectItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectItem);
