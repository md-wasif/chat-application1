import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


import './Input.css';

const Input =  ({ setMessage, sendMessage, message }) => (
  <form className="form">
  <input
    className="input"
    type="text"
    placeholder="Type a message..."
    value={message}
    onChange={({ target: { value } }) => setMessage(value)}
    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
  />
   <IconButton varient="contained" color="primary" type="submit" className="sendButton">
   <SendIcon />
   </IconButton>
</form>
)

export default Input;