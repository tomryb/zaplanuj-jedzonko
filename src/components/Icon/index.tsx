import React from 'react';

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconName } from 'assets/icons/types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IconInterface extends Partial<FontAwesomeIconProps> {
  className?: string;

  width?: string | number;
  height?: string | number;

  name?: IconName;
}

const defaultProps: IconInterface = {
  className: '',
};

const Icon: React.FC<IconInterface> = (props) => {

  if (!props.name) {
    return null;
  }

  const { name, ...iconProps } = props;

  return (
    <FontAwesomeIcon
      {...iconProps}
      icon={name as IconProp}
    />
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
