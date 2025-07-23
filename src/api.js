import axios from 'axios';
export function getProductData({ sortBy, sortType, query, page }) {
  let params = {}
  if (sortBy) {
    params.sortBy = sortBy;
  }
  if (sortType) {
    params.sortType = sortType;
  }
  if (query) {
    params.search = query;
  }
  if (page) {
    params.page = page;
  }
  console.log("getProductData was called");
  return axios.get("https://myeasykart.codeyogi.io/products", {
    params
  });
}
export function getProduct(id) {
  return axios.get("https://myeasykart.codeyogi.io/product/" + id);
}
export function getProducts(ids) {
  const commaSeparatedIds=ids.join();
  return axios.get("https://myeasykart.codeyogi.io/products/bulk",
    {
      params:{ids:commaSeparatedIds}
    }
  );
}

export function saveCart(cart){
  return axios.post("https://myeasykart.codeyogi.io/carts",{data:cart},{
    headers:{
      Authorization:localStorage.getItem("token")
    }
  })
}
export function getCart(){
  return axios.get("https://myeasykart.codeyogi.io/carts",{
    headers:{
      Authorization:localStorage.getItem("token")
    }
  })
}
