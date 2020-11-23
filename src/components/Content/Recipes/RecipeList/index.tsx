import React, { useEffect, useState } from 'react';
import { Reducer } from 'redux';

import { useSelector, useDispatch } from 'react-redux';
// import { configureStore } from 'redux-immutable';
// import RecipesModelReducer from 'redux/models/RecipesModel/reducer';

import { fetchRecipes } from 'redux/models/RecipesModel/actions';
import { selectIsRecipesFetched, selectRecipes } from 'redux/models/RecipesModel/selectors';

import './styles.scss';
import { RecipeInterface } from 'redux/models/RecipesModel/types';


export interface RecipeListInterface {
  className?: string;
  name?: string;
}

const defaultProps: RecipeListInterface = {
  className: '',
  name: 'Lista przepisów',
};

const fakeApiKey = 'asd';

// const store = configureStore({ reducer: RecipesModelReducer });

const RecipeList: React.FC<RecipeListInterface> = (props) => {

  const dispatch = useDispatch();
  const callRecipesFetcher = () => dispatch(fetchRecipes(fakeApiKey));

  useEffect(() => {
    callRecipesFetcher();
  }, []);


  const success = useSelector(selectIsRecipesFetched);
  console.log(success);

  const recipesDataFromSelector = useSelector(selectRecipes);
  console.log(recipesDataFromSelector);

  let recipeItems;
  if (recipesDataFromSelector) {
    recipeItems = recipesDataFromSelector.Recipes.map((recipe: RecipeInterface) => {
      return (
        <tr key={recipe.id}>
          <td>{recipe.id}</td>
          <td>{recipe.nazwa}</td>
          <td>{recipe.skladniki}</td>
          <td>{recipe.przepis}</td>
        </tr>
      );
    });
  } else {
    recipeItems = null;
  }

  return (
    <div className={`RecipeList ${props.className}`}>
      <div>
        <h3>{props.name}</h3>
        <button className="add">+</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAZWA</th>
            <th>OPIS</th>
            <th>AKCJE</th>
          </tr>
        </thead>
        <tbody>
          {recipeItems}
          {/* <RecipeListItem /> */}
        </tbody>
      </table>
    </div>
  );
};

RecipeList.defaultProps = defaultProps;

export default RecipeList;