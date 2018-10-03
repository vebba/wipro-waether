export default function weather (state = { }, action) {
    switch (action.type){
        case 'DATA_SCCUESS' :
        return action.payload
        default:
         return state;
    }
}