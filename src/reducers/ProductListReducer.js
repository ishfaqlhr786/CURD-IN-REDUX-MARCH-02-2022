const initialState = {
    loading: false,
   data: [{}],
     errorMsg: "",
    count: 0,
 }
   const PostListReducer = (state = initialState, action) => {
     switch (action.type) {
       case "PRODUCT_LIST_LOADING":
         return {
           ...state,
           loading: true,
           errorMsg: "",
         };
   
    //    case "POST_LIST_FAIL":
    //      return {
    //        ...state,
    //        loading: false,
    //        errorMsg: "Unable to catch Pokemon",
    //      };
   
       case "PRODUCT_LIST_SUCCESS":
         return {
           ...state,
          loading: false,
          data: action.payload,
 //errorMsg: "",
// count: action.payload.count,
        //  count: parseInt(action.payload.count),
         };
       default:
         return state;
     }
   };
   
   export default PostListReducer;
   