import { fork, all } from 'redux-saga/effects';
import { ConfigInterface } from 'services/interfaces';

import { TemplateModelSagas } from 'redux/models/TemplateModel/sagas';
import { RecipesModelSagas } from './models/RecipesModel/sagas';

export default (config: ConfigInterface) => (function* rootSaga() {
  const sagas = [
    // ...ModelSagas
    ...TemplateModelSagas,
    ...RecipesModelSagas
  ];

  yield all(sagas.map(fork));
});
