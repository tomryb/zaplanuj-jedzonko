import React from 'react';

import './styles.scss';

export interface DesktopInterface {
  className?: string;
}

const defaultProps: DesktopInterface = {
  className: '',
};

const Desktop: React.FC<DesktopInterface> = (props) => {
  return (
    <main className={`Desktop ${props.className}`}>
      <h2>NASZ PIEKNY Desktop</h2>
      <input type="text" placeholder="kim ty jestes czlowieku" />
      <button type="submit">ZAPISZSZZ</button>
      <div>
        (to nie dziala, no problemo)
      </div>
    </main>
  );
};

Desktop.defaultProps = defaultProps;

export default Desktop;