import React from 'react';
import { browserHistory } from 'react-router';
import Radium, { StyleRoot } from 'radium';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

@Radium
class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        
        this.state ={
            open: true,
            docked: true
        }
    }

    navigateTo(route){
        browserHistory.push(route);
    }

    render() {

        return (
            <StyleRoot>
                 <Drawer
                    open={this.state.open}
                    docked={this.state.docked}
                 >
                      <MenuItem >Item Management</MenuItem>
                      <MenuItem >Rooms and Beds</MenuItem>
                      <MenuItem >User Management</MenuItem>
                 </Drawer>
            </StyleRoot>
           
        )
    }
}

export default Sidebar;
