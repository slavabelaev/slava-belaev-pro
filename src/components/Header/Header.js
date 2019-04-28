import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from './Telegram.svg';
import UpworkIcon from './Upwork.svg';
import LinkedInIcon from './LinkedIn.svg';
import GitHubIcon from './GitHub.svg';

const styles = {
    root: {
        boxShadow: 'none'
    },
    avatar: {
    },
    fullName: {
        whiteSpace: 'nowrap',
        color: '#fff',
        marginLeft: '1rem'
    },
    professionName: {
        whiteSpace: 'nowrap',
        color: '#fff',
        opacity: .48,
        marginLeft: '1rem'
    },
    portfolioLabel: {
        whiteSpace: 'nowrap',
        color: '#fff',
        opacity: .24,
        marginLeft: '1rem'
    },
    iconButton: {
        padding: 0,
        marginLeft: '1rem'
    },
    icon: {
        width: 32,
        height: 32
    },
    button: {
    },
    emailIcon: {
        marginRight: '.5rem'
    }
};

const Header = ({ classes }) => (
    <AppBar position="sticky" className={classes.root}>
        <Toolbar>
            <Avatar alt="Remy Sharp" src="https://avatars2.githubusercontent.com/u/7487565?s=80&v=4" className={classes.avatar} />
            <Typography variant="h6" className={classes.fullName}>
                Slava B.
            </Typography>
            <Typography variant="h6" className={classes.professionName}>
                — Frontend Developer
            </Typography>
            <Typography variant="h6" className={classes.portfolioLabel}>
                / Portfolio
            </Typography>

            <Grid container justify="flex-end" alignItems="center">
                <Tooltip
                    title="You will send message to slav@belaev.pro"
                    placement="left"
                >
                    <Button variant="contained" color="primary" className={classes.button}>
                        <EmailIcon className={classes.emailIcon} />
                        Contact Me
                    </Button>
                </Tooltip>
                <Tooltip title="My Telegram">
                    <IconButton
                        className={classes.iconButton}
                        aria-haspopup="true"
                    >
                        <Avatar className={classes.icon} src={TelegramIcon} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="My Upwork">
                    <IconButton
                        className={classes.iconButton}
                        aria-haspopup="true"
                    >
                        <Avatar className={classes.icon} src={UpworkIcon} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="My LinkedIn">
                    <IconButton
                        className={classes.iconButton}
                        aria-haspopup="true"
                    >
                        <Avatar className={classes.icon} src={LinkedInIcon} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="My GitHub">
                    <IconButton
                        className={classes.iconButton}
                        aria-haspopup="true"
                    >
                        <Avatar className={classes.icon} src={GitHubIcon} />
                    </IconButton>
                </Tooltip>
            </Grid>
        </Toolbar>
    </AppBar>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
