const PRODUCT_API_BASE_URL ="https://fakestoreapi.com/products"; // https://fakestoreapi.com/docs


export const getProductList = () =>{
    return fetch(PRODUCT_API_BASE_URL)
    .then(res=>res.json())
    .then(json=>console.log(json));
}

export const getProductById = (id) =>{
    return fetch(`${PRODUCT_API_BASE_URL}/${id}`)
    .then(res=>res.json())
    .then(json=>console.log(json));
}


export const getProductListLimit = (limit) =>{
    return fetch(`${PRODUCT_API_BASE_URL}?limit=${limit}`)
    .then(res=>res.json())
    //.then(json=>console.log(json));
}