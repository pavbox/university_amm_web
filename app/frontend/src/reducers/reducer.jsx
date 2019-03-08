
export default (state, action) => {
  switch (action.type) {
    case 'SWITCH_TABLE':
      return this.setState({ SWITCH_TABLE: false });
    default:
      return state;
  }
};
