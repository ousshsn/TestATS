import axios from 'axios';

export const getProducts = () => {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`).then(response => {
        return Promise.resolve({
            payload: response.data.products,
            success: true
        })
    }).catch(reason => {
        return Promise.resolve({
            success: false,
            reason: reason
        })
    })
}
export const getProductByColor = (color) => {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}/product/${color}`).then(response => {
        return Promise.resolve({
            payload: response.data,
            success: true
        })
    }).catch(reason => {
        return Promise.resolve({
            success: false,
            reason: reason
        })
    })
}