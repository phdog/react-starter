const INITIAL_STATE = {
    height: '100vh',
    fontSize: '3rem',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    flexFlow: 'column',
    button: {
      color: 'black',
      backgroundColor: 'red',
      onHover: {
        backgroundColor: 'blue',
      },
    },
  };

const cssReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch (type) {
      default:
        return {...state};
    }
};

export default cssReducer;
