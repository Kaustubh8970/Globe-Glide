const initialState = {
  bookingData: []
};

const Data = (state = initialState, action) => {
  switch (action.type) {
      case 'BOOK_HOTEL':
          return {
              ...state,
              bookingData: [...state.bookingData, action.payload]
          };
      case 'CANCEL_BOOKING':
          return {
              ...state,
              bookingData: []
          };
      default:
          return state;
  }
};

export default Data;
