import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth32971Saga from '../features/EmailAuth32971/redux/sagas';
import EmailAuth32943Saga from '../features/EmailAuth32943/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth32971Saga,
EmailAuth32943Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}