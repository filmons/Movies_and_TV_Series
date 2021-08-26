import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';

const useStyles = makeStyles({
  root: {
    width: 500,
    position:'fixed',
    bottom:0,
    backgroundColor:"#2d313a",
    zIndex:100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
         <BottomNavigationAction
        style={{color:"white"}}
        label="Trending "
        icon={<WhatshotIcon />} 
        />
      <BottomNavigationAction 
        style={{color:"white"}}
        label="Mouvies"
        icon={<MovieIcon />}
         />
      <BottomNavigationAction 
        style={{color:"white"}}
        label="Tv series"
        icon={<TvIcon />} 
        />
      <BottomNavigationAction
        style={{color:"white"}}
        label="Serche"
        icon={<SearchIcon />} 
        />
       
    </BottomNavigation>
    
    
  );
}