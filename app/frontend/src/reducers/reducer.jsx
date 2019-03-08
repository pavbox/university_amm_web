
export default (state, action) => {
  switch (action.type) {
    case 'SWITCH_TABLE':
      return {
        ...state,
      };
    default:
      return state;
  }
};
