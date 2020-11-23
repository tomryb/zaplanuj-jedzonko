import React from 'react';
import Logo from './Logo';

import './styles.scss';

export interface HeaderInterface {
  className?: string;
}

const defaultProps: HeaderInterface = {
  className: '',
};

const Header: React.FC<HeaderInterface> = (props) => {
  return (
    <header className={`Header ${props.className}`}>
      <Logo />
    </header>
  );
};

Header.defaultProps = defaultProps;

export default Header;