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
        filter: 'brightness(.72)',
        transition: '.48s',
        '&:hover': {
            filter: 'brightness(1)'
        }
    },
    media: {
        height: 200,
        backgroundPositionY: 'top'
    },
    title: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
};

const ProjectItem = ({ className, classes, id, title, demoUrl, sourceUrl, image, images }) => (
    <Card className={`${className} ${classes.root}`}>
        <a data-fancybox={id}
           rel="noopener"
           aria-label={`${title}`}
           href={images.length ? images[0].path : image}
        >
            <CardMedia
                className={classes.media}
                image={image}
            />
        </a>
        <nav>
            {images.map((image, index) => (!index ? null :
                <a  key={`image-${id}-${image.path}`}
                    data-fancybox={id}
                    data-caption={image.title}
                    rel="noopener"
                    aria-label={image.title}
                    href={image.path}
                />
            ))}
        </nav>
        <CardContent>
            <Typography component="p" className={classes.title}>
                {title}
            </Typography>
        </CardContent>
        <CardActions>
            <Button
                variant="contained"
                color="primary"
                target="_blank"
                href={demoUrl}
                rel="noreferrer"
                aria-label="Demo of Web App"
            >
                See Demo
            </Button>
            <Button
                color="primary"
                target="_blank"
                href={sourceUrl}
                rel="noreferrer"
                aria-label="Source code"
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