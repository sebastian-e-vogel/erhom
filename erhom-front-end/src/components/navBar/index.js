import React from 'react'

import {AppBar, Toolbar,makeStyles, Typography,IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme)=>({
    root:{
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            display:'none',
        }
    },
    appBar: {
        [theme.breakpoints.up('sm')]:{
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
        }
    }
}))

const NavBar = (props) =>{
    const classes = useStyles()
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
            <IconButton  onClick={props.openMenu} color='inherit' aria-label='menu' className={classes.root}>
            <MenuIcon/>
            </IconButton>
                <Typography>
                Erhom Viajes
                </Typography>

            </Toolbar>

        </AppBar>   

    )
    
}
export default NavBar