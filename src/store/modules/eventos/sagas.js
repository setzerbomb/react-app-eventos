import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import AxiosGET from '../../../Functions/AxiosGET';
import AxiosPOST from '../../../Functions/AxiosPOST';
import AxiosPUT from '../../../Functions/AxiosPUT';
import AxiosDELETE from '../../../Functions/AxiosDELETE';

import {
  deleteEventSuccess,
  addEventSuccess,
  loadEventsSuccess,
  updateEventSuccess,
} from './actions';

function* addEvent(action) {
  const { event } = action;
  try {
    const response = yield call(AxiosPOST, '/events', event, null);
    const { data, status } = response;

    if (status === 200) {
      toast.info('Evento adicionado com sucesso');
      yield put(addEventSuccess(data));
    } else {
      toast.error('Não foi possível adionar o evento');
    }
  } catch (err) {
    toast.error(err.response.data.message);
  }
  return;
}

function* deleteEvent(action) {
  try {
    const { nome, id } = action;
    const { status } = yield call(AxiosDELETE, `/events/${id}`);

    if (status === 200) {
      toast.info(`Evento ${nome} removido com sucesso`);
      yield put(deleteEventSuccess(id));
    } else {
      toast.error('Não foi possível remover o evento');
    }
  } catch (err) {
    toast.error(err.response.data.message);
  }
  return;
}

function* updateEvent(action) {
  try {
    const { id, event } = action;
    const { data, status } = yield call(AxiosPUT, `/events/${id}`, event);

    if (status === 200) {
      toast.info('Evento atualizado com sucesso');
      yield put(updateEventSuccess(id, data));
    } else {
      toast.error('Não foi possível atualizar o evento');
    }
  } catch (err) {
    toast.error(err.response.data.message);
  }
  return;
}

function* loadEvents() {
  try {
    const { data: eventos } = yield call(AxiosGET, '/events');
    yield put(loadEventsSuccess(eventos));
  } catch (err) {
    toast.error(err.response.data.message);
  }
  return;
}

export default all([
  takeLatest('ADD_EVENT_REQUEST', addEvent),
  takeLatest('LOAD_EVENTS_REQUEST', loadEvents),
  takeLatest('DELETE_EVENT_REQUEST', deleteEvent),
  takeLatest('UPDATE_EVENT_REQUEST', updateEvent),
]);
