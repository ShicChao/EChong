
const HomeReducer = (state=[],action) => {
    switch (action.type){
        case "HOME_LIST":
            return action.payload;
        default :
            return state;
    }
}
export default HomeReducer;