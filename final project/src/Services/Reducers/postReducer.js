const initial = {
  items: [],
  loading: false,
  error: null
};

export default function postReducer(state = initial, action) {
  switch (action.type) {
    case 'POSTS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'POSTS_SUCCESS':
      return { ...state, loading: false, items: action.payload };
    case 'POSTS_FAILURE':
      return { ...state, loading: false, error: action.payload };

    case 'ADD_POST_SUCCESS':
      return { ...state, items: [...state.items, action.payload] };

    case 'UPDATE_POST_SUCCESS':
      return {
        ...state,
        items: state.items.map(p => (p.id === action.payload.id ? action.payload : p))
      };

    case 'DELETE_POST_SUCCESS':
      return { ...state, items: state.items.filter(p => p.id !== action.payload) };

    default:
      return state;
  }
}
