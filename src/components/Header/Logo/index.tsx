import React from 'react';

import './styles.scss';

export interface LogoInterface {
  className?: string;
}

const defaultProps: LogoInterface = {
  className: '',
};

const Logo: React.FC<LogoInterface> = (props) => {
  return (
    <div className={`Logo ${props.className}`}>
      <span className='Logo-word1'>Zaplanuj</span>
      <span className='Logo-word2'>Jedzonko</span>
    </div>
  );
};

Logo.defaultProps = defaultProps;

export default Logo;