import { EDIT_ITEMS_FAILURE, EDIT_ITEMS_REQUEST, EDIT_ITEMS_SUCCESS, GET_WAREHOUSE_FAILURE, GET_WAREHOUSE_REQUEST, GET_WAREHOUSE_SUCCESS } from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    warehouse: []
}

export const reducer = (state=initState, {type, payload}) => {

    switch(type) {
        case GET_WAREHOUSE_REQUEST: 
            return {...state, isLoading: true};
        case GET_WAREHOUSE_FAILURE:
            return {...state, isLoading: false, isError: true};
        case GET_WAREHOUSE_SUCCESS:
            return {...state, isLoading: false, isError: false, warehouse: [...payload]};
        case EDIT_ITEMS_REQUEST:
            return {...state, isLoading: true}
        case EDIT_ITEMS_FAILURE:
            return {...state, isLoading: false, isError: true}
        case EDIT_ITEMS_SUCCESS:
            let editedData = state.warehouse.map((ele) => {
                return  ele.id == payload.id ? payload : ele;
            })
            return {...state, isLoading: false, isError: false, warehouse: [...editedData]};
        default:
            return state;
    }
}