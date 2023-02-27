const HindiReducer=(state,action)=>{
    switch (action.type) {
        case "GET_DATA":
            return{
                ...state,
                hindiData: action.payload,
            }
        default:
            return state;
    }
}
export default HindiReducer;