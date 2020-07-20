import { all } from 'redux-saga/effects';

import eventos from './eventos/sagas';

export default function* rootSaga() {
  return yield all([eventos]);
}
