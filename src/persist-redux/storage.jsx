const InitialState = {
    token:'',
    role:'',
    userInfo:'',
    currPage:'',
}
const rootReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
        return { ...state, token: action.payload };
    case 'SET_ROLE':
        return { ...state, role: action.payload };
    case 'SET_INFO':
        return { ...state, userInfo: action.payload };
    case 'SET_PAGE':
        return { ...state, currPage: action.payload };
    case 'LOG_OUT':
        return InitialState;
    default:
      return state;
  }
};
  
// const rootReducer = createStore(reducer);


export default rootReducer;