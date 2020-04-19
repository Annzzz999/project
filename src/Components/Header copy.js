import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
//DenseAppBar(
const  AppHeader=(props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <onLeftIconButtonTouchTap>{() => props.onLeftIconClick() } </onLeftIconButtonTouchTap>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
           Кулинарная книга
          </Typography>
        </Toolbar>
        
        
      </AppBar>
    </div>
  );
}



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
//DenseAppBar(
  export const  AppHeader=(props) => {
  const classes = useStyles();

  return (
    /*<div className={classes.root}>*/
      <AppBar position="static"
        onLeftIconButtonClick = {() => props.onLeftIconClick() }>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
           Кулинарная книга
          </Typography>
        </Toolbar>
        
        
      </AppBar >
    /*</div>*/
  );
}
export default AppHeader;



export default class App extends Component{
  constructor(props){
    super(props)  // т к наследуем передаем данные пропса

    this.state = {
      isDrawerOpen: false//передаем поле

    }
  }