import React from 'react';
import RecipeList from '../RecipeList';

import './styles.scss';

export interface AddNewRecipeInterface {
  className?: string;
  name?: string;
}

const defaultProps: AddNewRecipeInterface = {
  className: '',
  name: 'UZUPELNIJ NAME PLACEHOLDER',
};

const AddNewRecipe: React.FC<AddNewRecipeInterface> = (props) => {
  return (
    <div className={`AddNewRecipe ${props.className}`}>
      <div className='gora'>
        <button type="button" name="zapisz">Zapisz i zamknij</button>
        <input type="text" name="recipeName"/>
        <input type="text" name="recipeDescription"/>
      </div>
      <div className='dol'>
        <RecipeList name='Instrukcje' />
        <RecipeList name='Skladniki' />
      </div>
    </div>
  );
};

AddNewRecipe.defaultProps = defaultProps;

export default AddNewRecipe;