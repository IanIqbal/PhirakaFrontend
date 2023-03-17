import { GET_SELECTED_USER, GET_USER } from "./actionType"

const initialState = {users:[], user:{}}

function userReducer (state = initialState, action){
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                users: action.payload
            }
        
            case GET_SELECTED_USER:
                return{
                    ...state,
                    user:action.payload
                }
        default:
            return state
    }
}

export default userReducer