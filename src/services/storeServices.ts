const axios = require('axios').default;

const StoreServices = {
    productList: () => {
        return axios.get(`https://omni-hack.herokuapp.com/v1/products`);
    },
    updateProduct: (requestObj: any) => {
        return axios.put(`https://omni-hack.herokuapp.com/v1/products/${requestObj.productId}`, requestObj.request);
    },
    cartProducts: () => {
        return axios.get(`https://omni-hack.herokuapp.com/v1/products?in_cart=true`);
    }
};

export default StoreServices;