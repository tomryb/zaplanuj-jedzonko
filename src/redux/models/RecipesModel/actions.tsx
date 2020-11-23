/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { RecipesActions, RecipesDataInterface } from 'redux/models/RecipesModel/types';
import { action } from 'typesafe-actions';
import { AnyDict, Id } from 'types';
import { Map } from 'immutable';

export const recipesFetchSuccess = (
  recipes: RecipesDataInterface
) =>
  action(RecipesActions.RECIPES_FETCH_SUCCESS, { recipes });

export const recipesFetchFailure = (
  errors: AnyDict
) =>
  action(RecipesActions.RECIPES_FETCH_FAILURE, { errors });

export const fetchRecipes = (
  apiKey: string
) =>
  action(RecipesActions.RECIPES_FETCH, { apiKey });
