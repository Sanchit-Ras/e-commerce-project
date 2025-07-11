import axios from 'axios';
export function getProductData(){
  console.log("getProductData was called");
    return axios.get("https://dummyjson.com/products");
}
export function getProduct(id){
    return axios.get("https://dummyjson.com/products/"+id);
}