/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { put, fork, takeEvery, delay } from 'redux-saga/effects';

import get from 'lodash/get';
import { TemplateActions } from './types';
import { PartialPayloadAction } from 'types/reduxTypes';
import { setIsTemplateWorkingSuccess } from 'redux/models/TemplateModel/actions';

export const TemplateModelSagas = [
  function* () {
    yield fork(function* () {
      yield takeEvery(TemplateActions.SET_IS_TEMPLATE_WORKING, setIsTemplateWorking);
    });
  }
];

export function* setIsTemplateWorking({ payload }: PartialPayloadAction<{value: boolean}>) {
  try {
    const value = get(payload, 'value', false);

    if (value) {
      console.log('SAGA IS ALSO WORKING!');

      yield delay(2000); // wait 2 seconds

      yield put(setIsTemplateWorkingSuccess());
    } else {
      throw new Error('Something went terribly wrong :|');
    }
  } catch (error) {
    console.log('Wild error appeared!', error);
  };
}