/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { put, fork, takeLatest } from 'redux-saga/effects';

import { RecipesActions, RecipesDataInterface } from './types';
import { recipesFetchSuccess, recipesFetchFailure } from 'redux/models/RecipesModel/actions';
import { PartialPayloadAction } from 'types/reduxTypes';
import { constants } from 'crypto';
export const RecipesModelSagas = [
  function* () {
    yield fork(function* () {
      yield takeLatest(RecipesActions.RECIPES_FETCH, recipesFetcher);
    });
  }
];


export function* recipesFetcher({ payload }: PartialPayloadAction<{
  apiKey: string;
}>) {
  try {
    console.log('loading');

    if (payload) {
      const { apiKey } = payload;

      if (apiKey) {
        const recipesResponse: Response = yield fetch('/przepisy.json');
        const tmp: RecipesDataInterface = yield recipesResponse.json();
        yield put(recipesFetchSuccess(tmp));
      } else {
        throw Error('NO API KEY GIVEN');
      }
    } else {
      throw Error('NO PARAMS?');
    }

  } catch (error) {
    console.log(error);
    yield put(recipesFetchFailure(error));
  } finally {
    console.log('receipes tried to fetch');
  }
}