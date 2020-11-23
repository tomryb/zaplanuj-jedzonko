import React from 'react';

import './styles.scss';

export interface PlansInterface {
  className?: string;
}

const defaultProps: PlansInterface = {
  className: '',
};

const Plans: React.FC<PlansInterface> = (props) => {
  return (
    <main className={`Plans ${props.className}`}>
      PLANS
    </main>
  );
};

Plans.defaultProps = defaultProps;

export default Plans;