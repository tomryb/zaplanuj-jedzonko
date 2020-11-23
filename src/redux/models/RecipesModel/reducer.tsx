import { fromJS } from 'immutable';
import { Reducer } from 'redux';
import { RecipesModelStateInterface, RecipesModelStateFields, RecipesActions } from './types';
import { PayloadAction } from 'types/reduxTypes';

import get from 'lodash/get';

const initialState: RecipesModelStateInterface = fromJS({
  [RecipesModelStateFields.IS_FETCHED]: null,
  [RecipesModelStateFields.RECIPES]: null,
});

const RecipesModelReducer: Reducer<RecipesModelStateInterface, PayloadAction> = (
  state: RecipesModelStateInterface = initialState, action: PayloadAction
): RecipesModelStateInterface => {

  switch (action.type) {
    case RecipesActions.RECIPES_FETCH_SUCCESS: {

      const recipes = get(action, ['payload', 'recipes'], []);

      return state
        .set(RecipesModelStateFields.IS_FETCHED, true)
        .set(RecipesModelStateFields.RECIPES, recipes);
    }

    case RecipesActions.RECIPES_FETCH_FAILURE: {
      return state
        .set(RecipesModelStateFields.IS_FETCHED, false);
    }

    default: {
      return state;
    }
  }
};

export default RecipesModelReducer;