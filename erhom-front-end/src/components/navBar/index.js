import React from 'react'

import {AppBar, Toolbar,makeStyles, Typography,IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme)=>({
    root:{
        marginRight: theme.spacing(2)
    },
    appBar: {
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
    }
}))

const NavBar = () =>{
    const classes = useStyles()
    return (
        <div>
        <AppBar className={classes.appBar}>
            <Toolbar>
            <IconButton color='inherit' aria-label='menu' className={classes.root}>
            <MenuIcon/>
            </IconButton>
                <Typography>
                Erhom Viajes
                </Typography>

            </Toolbar>

        </AppBar>   


         </div>
    )
    
}
export default NavBar