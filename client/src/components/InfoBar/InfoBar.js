import React from 'react';
import GroupIcon from '@material-ui/icons/Group';

import './InfoBar.css';

const InfoBar = ({ room, users }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <GroupIcon />
      <span>{ room }</span>
    </div>
    <div className="rightInnerContainer">
        <button type="button" onClick={(event) => { event.preventDefault(); window.location.href="/";
       }}>Leave Room</button>  
    </div>
  </div>
);

export default InfoBar;