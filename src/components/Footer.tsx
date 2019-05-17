import React from 'react';
import FilterLink from '../containers/FilterLink';
import {
  showAll,
  showCompleted,
  showActive
} from '../modules/visibilityFilter';

const Footer: React.FC = () => {
  return (
    <div>
      <span>Show: </span>
      <FilterLink filter={showAll()}>All</FilterLink>
      <FilterLink filter={showActive()}>Active</FilterLink>
      <FilterLink filter={showCompleted()}>Completed</FilterLink>
    </div>
  );
};

export default Footer;
