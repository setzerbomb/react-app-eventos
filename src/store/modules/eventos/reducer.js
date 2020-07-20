import produce from 'immer';

export default function eventos(state = [], action) {
  switch (action.type) {
    case 'ADD_EVENT_SUCCESS':
      return produce(state, (draft) => {
        const { event } = action;

        draft.push(event);
      });
    case 'LOAD_EVENTS_SUCCESS':
      return produce(state, (draft) => {
        const { events } = action;

        if (draft.length < 1) {
          if (events.length > 0) {
            draft.push(...events);
          }
        }
      });
    case 'DELETE_EVENT_SUCCESS':
      return produce(state, (draft) => {
        const { id } = action;

        const index = draft.findIndex((e) => e.id === id);

        if (index >= 0) {
          draft.splice(index, 1);
        }
      });
    case 'UPDATE_EVENT_SUCCESS':
      return produce(state, (draft) => {
        const { id, event } = action;

        console.tron.log('UPDATE');
      });
    default:
      return state;
  }
}
