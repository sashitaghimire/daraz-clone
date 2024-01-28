import React from 'react'
import './Navbar.css';
import {Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__category">
                 <Button>Category
                     <ExpandMoreIcon />
                 </Button>
            </div>
            <Button>Save more on app</Button>
            <Button>Sell on daraz</Button>
            <Button>Customer care</Button>
            
        </div>
    )
}

export default Navbar;
