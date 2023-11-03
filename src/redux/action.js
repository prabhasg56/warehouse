import { EDIT_ITEMS_FAILURE, EDIT_ITEMS_REQUEST, EDIT_ITEMS_SUCCESS, GET_WAREHOUSE_FAILURE, GET_WAREHOUSE_REQUEST, GET_WAREHOUSE_SUCCESS } from "./actionTypes"

export const getWarehouseRequest = () => {
    return({type: GET_WAREHOUSE_REQUEST});
}

export const getWarehouseFailure = () => {
    return({type: GET_WAREHOUSE_FAILURE});
}

export const getWarehouseSuccess = (payload) => {
    return({type: GET_WAREHOUSE_SUCCESS, payload});
}

export const editWarehouseRequest = () => {
    return({type: EDIT_ITEMS_REQUEST});
}

export const editWarehouseFailure = () => {
    return({type: EDIT_ITEMS_FAILURE});
}

export const editWarehouseSuccess = (payload) => {
    return({type: EDIT_ITEMS_SUCCESS, payload})
}