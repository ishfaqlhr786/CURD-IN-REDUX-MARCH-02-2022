
  const initialState = {
    loading: false,
    data: {},
    errorMsg: "",
  };
  const DeleteReducer = (state = initialState, action) => {
    switch (action.type) {
      case "PRODUCT_DELETING_LOADING":
        return {
          ...state,
          loading: true,
          errorMsg: "",
        };
      case "PRODUCT_DELETE_FAIL":
        return {
          ...state.data,
          loading: true,
          errorMsg: "Unable to find Pokemon",
        };
      case "PRODUCT_DELETING_SUCCESS":
        return {
         ...state.data,
          loading: false,
          errorMsg: "",
          // data: {
          //   ...state,
          //  // [action.product]: action.payload,
          //  data:action.payload
          // },

          [action.index]: action.payload
        //  data:action.payload
        };
      default:
        return state;
    }
  };
  export default DeleteReducer;
  