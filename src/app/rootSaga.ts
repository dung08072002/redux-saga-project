import { all } from 'redux-saga/effects'
import counterSaga from './counterSaga';

function* helloSaga() {
    console.log('Hello saga');
}

export default function* rootSaga() {
    yield all([helloSaga(), counterSaga()])
}

