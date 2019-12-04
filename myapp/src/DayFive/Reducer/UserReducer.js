
export default function UserReducer(state = {users: []}, action) {
    switch(action.type) {
        case "FETCH_USERS" :
            return {
                ...state,
                users: action.json
            }
        default: 
            return state;
    }
}
