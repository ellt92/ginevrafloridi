import { render, h, Component } from 'preact';
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import 'preact/devtools';

class App extends Component {
    render() {
        return (
            <Router>
                <div><a href='http://www.lse.ac.uk/social-policy/people/research-students/Ginevra-Floridi'>Ginevra Floridi's</a> website is coming soon...</div>
            </Router>
        );
    }
}

render(
        <App/>,
    document.getElementById('root')
);
