/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { domain } from 'redux/models/RecipesModel';
import { RecipesModelStateInterface, RecipesModelStateFields, RecipesDataInterface } from 'redux/models/RecipesModel/types';
import { createSelector } from 'reselect';
import { Maybe } from 'types';

export const selectRecipesDomain = (state) => state.get(domain) as RecipesModelStateInterface;

export const selectIsRecipesFetched = createSelector(
  selectRecipesDomain,
  (domain) => domain.get(RecipesModelStateFields.IS_FETCHED) as Maybe<boolean>
);

export const selectRecipes = createSelector(
  selectRecipesDomain,
  (domain) => domain.get(RecipesModelStateFields.RECIPES) as Maybe<RecipesDataInterface>
);
