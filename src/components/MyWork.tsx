import React from 'react';
import { Projects, ProjectsProps } from './Projects';

export const MyWork: React.FC<ProjectsProps> = (props) => {
  return <Projects {...props} />;
};

export default MyWork;
export * from './Projects';

