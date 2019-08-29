import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';


const styles = theme => ({
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
    },
    adaptabilityButton: {
        marginLeft: 'auto',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    }
});

const ProjectItem = ({ className, classes, id, title, demoUrl, sourceUrl, previews, onShowDemo}) => (
    <Card className={`${className} ${classes.root}`}>
        <a data-fancybox={id}
           rel="noopener"
           aria-label={`${title}`}
           href={previews ? previews[0] : null}
        >
            <CardMedia
                className={classes.media}
                image={previews ? previews[0] : null}
            />
        </a>
        <nav>
            {(previews || []).map((imageUrl, index) => ( index === 0 ? null :
                <a  key={`image-${id}-${imageUrl}`}
                    data-fancybox={id}
                    rel="noopener"
                    href={imageUrl}
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
                Demo
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
            <Tooltip title='Show Adaptability' placement='left'>
                <IconButton onClick={onShowDemo} className={classes.adaptabilityButton}>
                    <ImportantDevicesIcon />
                </IconButton>
            </Tooltip>
        </CardActions>
    </Card>
);

ProjectItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles)
)(ProjectItem);
