import * as React from 'react';
import { container } from './project-list.module.css';

const ProjectList = ({ children }) => {
    return (
        <div className={container}>
            {children}
        </div>

    );
}

export default ProjectList