import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

export interface SidebarMenuItemInterface {
  className?: string;
  url: string;
  name?: string;
}

const defaultProps: SidebarMenuItemInterface = {
  className: '',
  url: '/',
  name: 'UZUPELNIJ NAME PLACEHOLDER',
};

const SidebarMenuItem: React.FC<SidebarMenuItemInterface> = (props) => {
  return (
    <NavLink to={`/${props.url}`} className={`SidebarMenuItem ${props.className}`}>
      {props.name}
    </NavLink>
  );
};

SidebarMenuItem.defaultProps = defaultProps;

export default SidebarMenuItem;