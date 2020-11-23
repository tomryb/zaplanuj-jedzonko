/* eslint-disable @typescript-eslint/no-explicit-any */
import { Map } from 'immutable';
import { Maybe } from 'types';

export enum RecipesModelStateFields {
  IS_FETCHED = 'isFetched',
  RECIPES = 'recipes',
}

export interface RecipesModelStateInterface extends Map<string, any> {
  [RecipesModelStateFields.IS_FETCHED]: Maybe<boolean>;
  [RecipesModelStateFields.RECIPES]: Maybe<RecipesDataInterface>;
}

export enum RecipesActions {
  RECIPES_FETCH = 'RECIPES',
  RECIPES_FETCH_SUCCESS = 'RECIPES_SUCCESS',
  RECIPES_FETCH_FAILURE = 'RECIPES_FAILURE',
}

export interface RecipeInterface {
  id: number;
  nazwa: string;
  skladniki: string;
  przepis: string;
}

export interface RecipesDataInterface {
  Recipes: Array<RecipeInterface>;
}

