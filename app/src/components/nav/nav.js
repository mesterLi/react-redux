import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Project, Setting, Active } from '../child';

export default class Nav extends React.Component {
    render() {
        return (
            <ul className="nav">
                <li><Link to="/Home" component={ Home }>Home</Link></li>
                <li><Link to="/Project" component={ Project }>Project</Link></li>
                <li><Link to="/Active" component={ Active }>Active</Link></li>
                <li><Link to="/Setting" component={ Setting }>Setting</Link></li>
            </ul>
        )
    }
}