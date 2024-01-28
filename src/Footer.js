import ForumIcon from '@material-ui/icons/Forum';
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">

            <ForumIcon className="footer__msg"/>
            <p>Messages</p>
        </div>
    )
}

export default Footer
