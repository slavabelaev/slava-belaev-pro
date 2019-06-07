import React from 'react';
import { compose } from 'redux';
import withWidth from '@material-ui/core/withWidth';
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

const styles = theme  => ({
    root: {
        boxShadow: 'none'
    },
    avatar: {
        [theme.breakpoints.only('xs')]: {
            width: 32,
            height: 32
        }
    },
    avatarButton: {
      padding: 0
    },
    title: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#fff',
        marginRight: '1rem',
        [theme.breakpoints.only('xs')]: {
            display: 'none'
        }
    },
    fullName: {
        whiteSpace: 'nowrap',
        color: '#fff',
        marginLeft: '1rem'
    },
    hyphen: {
        marginRight: '.5rem',
        marginLeft: '.5rem',
        opacity: .48,
        color: '#fff'
    },
    professionName: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#fff',
        opacity: .48
    },
    delimiter: {
        marginRight: '.5rem',
        marginLeft: '.5rem',
        opacity: .48,
        color: '#fff',
    },
    portfolioLabel: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#fff',
        opacity: .24,
    },
    iconButton: {
        padding: 0,
        marginLeft: '1rem',
        [theme.breakpoints.only('xs')]: {
            marginLeft: '.5rem'
        }
    },
    iconButtonGitHub: {
        [theme.breakpoints.only('xs')]: {
            display: 'none'
        }
    },
    icon: {
        width: 32,
        height: 32,
        [theme.breakpoints.only('xs')]: {
            width: 24,
            height: 24
        }
    },
    button: {
        backgroundColor: '#0d47a1',
        whiteSpace: 'nowrap',
        [theme.breakpoints.only('xs')]: {
            padding: '.25rem .5rem'
        }
    },
    emailIcon: {
        marginRight: '.5rem'
    },
    grid: {
        flexWrap: 'nowrap',
        width: 'auto',
        marginLeft: 'auto'
    }
});

const Header = ({ classes, width }) => (
    <AppBar position="sticky" className={classes.root}>
        <Toolbar>
            <Tooltip title="My Instagram">
                <IconButton
                    className={classes.avatarButton}
                    target="_blank"
                    href="https://www.instagram.com/slava_belaev/"
                    rel="noreferrer"
                    aria-haspopup="true"
                >
                    <Avatar
                        alt="Slava Belaev"
                        src="https://avatars2.githubusercontent.com/u/7487565?s=80&v=4"
                        className={classes.avatar} />
                </IconButton>
            </Tooltip>
            <Typography variant="h6" component="h1" className={classes.title}>
                <span className={classes.fullName}>Slava B.</span>
                <span className={classes.hyphen}>—</span>
                <span className={classes.professionName}>Frontend Developer</span>
                <span className={classes.delimiter}>/</span>
                <span className={classes.portfolioLabel}>Portfolio</span>
            </Typography>
            <Grid container justify="flex-end" alignItems="center" className={classes.grid}>
                <Tooltip
                    title="You will send message to slav@belaev.pro"
                    placement="left"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        href="mailto:slav@belaev.pro"
                    >
                        <EmailIcon className={classes.emailIcon} />
                        Contact Me
                    </Button>
                </Tooltip>
                <Tooltip title="My Telegram">
                    <IconButton
                        className={classes.iconButton}
                        href="tg://resolve?domain=slava_belaev"
                        aria-haspopup="true"
                    >
                        <Avatar
                            className={classes.icon}
                            src={TelegramIcon}
                            alt="Telegram"
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="My Upwork">
                    <IconButton
                        className={classes.iconButton}
                        target="_blank"
                        href="https://www.upwork.com/freelancers/~01e82aef512027f4ff"
                        rel="noreferrer"
                        aria-haspopup="true"
                    >
                        <Avatar
                            className={classes.icon}
                            src={UpworkIcon}
                            alt="Upwork"
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="My LinkedIn">
                    <IconButton
                        className={classes.iconButton}
                        target="_blank"
                        href="https://linkedin.com/in/slava-belaev-b44b8b141/"
                        rel="noreferrer"
                        aria-haspopup="true"
                    >
                        <Avatar
                            className={classes.icon}
                            src={LinkedInIcon}
                            alt="LinkedIn"
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="My GitHub">
                    <IconButton
                        className={`${classes.iconButton} ${classes.iconButtonGitHub}`}
                        target="_blank"
                        href="https://github.com/slavabelaev"
                        rel="noreferrer"
                        aria-haspopup="true"
                    >
                        <Avatar
                            className={classes.icon}
                            src={GitHubIcon}
                            alt="GitHub"
                        />
                    </IconButton>
                </Tooltip>
            </Grid>
        </Toolbar>
    </AppBar>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles),
    withWidth()
)(Header);
