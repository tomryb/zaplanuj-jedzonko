import React from 'react';
import {  NavLink, Route } from 'react-router-dom';
import SidebarMenuItem from './SidebarMenuItem';

import './styles.scss';

export interface SidebarInterface {
  className?: string;
  name?: string;
}

const defaultProps: SidebarInterface = {
  className: '',
  name: '',
};

const Sidebar: React.FC<SidebarInterface> = (props) => {
  return (
    <nav className={`Sidebar ${props.className}`}>
      <Route>
        <SidebarMenuItem name="Pulpit" url="desktop">
        </SidebarMenuItem>
        <SidebarMenuItem name="Przepisy" url="recipes">
        </SidebarMenuItem>
        <SidebarMenuItem name="Plany" url="plans">
        </SidebarMenuItem>
        {/* <SidebarMenuItem name="Kontakt" url="desktop">
        </SidebarMenuItem> */}
      </Route>
    </nav>
  );
};

Sidebar.defaultProps = defaultProps;

export default Sidebar;