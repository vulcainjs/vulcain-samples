import {CRUD_CREATE_FAILURE} from "admin-on-rest";
import {stopSubmit} from 'redux-form';
import { put, takeEvery } from "redux-saga/effects";

export default function* errorSagas() {
    yield takeEvery(CRUD_CREATE_FAILURE, crudCreateFailure);
}

function* crudCreateFailure(action) {
    yield put(stopSubmit('record-form', action.payload));
}