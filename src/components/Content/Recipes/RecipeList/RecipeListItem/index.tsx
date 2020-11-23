import React from 'react';

import './styles.scss';

export interface RecipeListItemInterface {
  className?: string;
  name?: string;
  id: number
}

const defaultProps: RecipeListItemInterface = {
  className: '',
  name: '',
  id: 0
};

const RecipeListItem: React.FC<RecipeListItemInterface> = (props) => {
  return (
    <div className={`RecipeListItem ${props.className}`}>
    </div>
  );
};

RecipeListItem.defaultProps = defaultProps;

export default RecipeListItem;