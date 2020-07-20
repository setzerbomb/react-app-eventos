export function loadEventsRequest() {
  return {
    type: 'LOAD_EVENTS_REQUEST',
  };
}

export function loadEventsSuccess(events) {
  return {
    type: 'LOAD_EVENTS_SUCCESS',
    events,
  };
}

export function addEventRequest(event) {
  return {
    type: 'ADD_EVENT_REQUEST',
    event,
  };
}

export function addEventSuccess(event) {
  return {
    type: 'ADD_EVENT_SUCCESS',
    event,
  };
}

export function deleteEventRequest(id, nome) {
  return {
    type: 'DELETE_EVENT_REQUEST',
    id,
    nome,
  };
}

export function deleteEventSuccess(id) {
  return {
    type: 'DELETE_EVENT_SUCCESS',
    id,
  };
}

export function updateEventRequest(id, event) {
  return {
    type: 'UPDATE_EVENT_REQUEST',
    id,
    event,
  };
}

export function updateEventSuccess(id, event) {
  return {
    type: 'UPDATE_EVENT_SUCCESS',
    id,
    event,
  };
}
