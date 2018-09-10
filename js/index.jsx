import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';






document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>
            <App/>
        </div>,
        document.getElementById('app')
    );
});