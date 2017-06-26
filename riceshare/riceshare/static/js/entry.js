/**
 * Created by Han on 6/21/2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import ChatRoom from './chatRoom.js';
import Search from './search.js';


ReactDOM.render(
    <App />,
    document.getElementById('react-root')
);

ReactDOM.render(
    <Search />,
    document.getElementById('tester2')
);

ReactDOM.render(
    <ChatRoom />,
    document.getElementById('tester1')
);