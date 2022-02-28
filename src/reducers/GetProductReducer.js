
  const initialState = {
    loading: false,
    data: {},
    errorMsg: "",
  };
  const GetProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case "PRODUCT_MULTIPLE_LOADING":
        return {
          ...state,
          loading: true,
          errorMsg: "",
        };
      case "PRODUCT_MULTIPLE_FAIL":
        return {
          ...state,
          loading: true,
          errorMsg: "Unable to find Pokemon",
        };
      case "PRODUCT_MULTIPLE_SUCCESS":
        return {
         // ...state,
          loading: false,
          errorMsg: "",
          data: {
            ...state.data,
            [action.product]: action.payload,
          },
        //  data:action.payload
        };
      default:
        return state;
    }
  };
  export default GetProductReducer;
  