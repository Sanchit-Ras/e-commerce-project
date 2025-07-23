import React, { useState, useEffect, useCallback } from 'react'
import ProductList from './ProductList.jsx'
import { getProductData } from "./api.js";
import NoResults from './NotResults.jsx';
import Loading from './Loading.jsx';
import Sorting from "./Sorting.jsx";
import Pages from "./Pages.jsx";
import { useSearchParams } from 'react-router-dom';
import { replace } from 'lodash';
export default function ProductListPage() {
  const [productData, updateProductData] = useState({});
  const [searchParams,setSearchParams]=useSearchParams();
  const [loading,setLoading]=useState(true);
  const params=Object.fromEntries([...searchParams]);
  let {page,query,sort}=params;
  page=page||1;
  query=query||""
  sort=sort||"default"


  useEffect(() => {
    let sortBy;
    let sortType;
    if(sort==="title"){
      sortBy=sort;
    }else if(sort==="lowTohigh"){
      sortBy="price"
    }else if(sort==="highTolow"){
      sortBy="price"
      sortType="desc"
    }
    const promise = getProductData({sortBy,sortType,query,page});
    promise.then((response) => {
      updateProductData(response.data)
      setLoading(false);
    });
  }, [sort,query,page]);

  const handelSearch = useCallback((event) => {//useCallback - returns the function from previous render if the dependency hasnt changed-used when we pass
    setSearchParams({...params,query:event.target.value,page:1},{replace:false});//a function to memoized component(React memo)
  }, [params]);
  const handelSort = useCallback((event) => {//React saves this specific function instance and gives it back to you on every subsequent render.
    setSearchParams({...params,sort:event.target.value},{replace:false});
  }, [params]);
 //useMemo returns the value computed on initial render, returns a new value only if the dependency changes ->useful for optimising
  //big calculations  

  if  (loading) {
    return <Loading />
  }





  return (
    <div className='flex flex-col py-10 my-10 md:px-28 px-5 gap-y-5 bg-white items-center max-w-5xl'>

      <div className="w-full flex md:justify-between justify-center px-2 gap-3">
        <input type="text" placeholder="search" className="border p-2 border-gray-400 grow min-w-0" onChange={handelSearch} />
        <Sorting sortVal={sort}
          onSortChange={handelSort}
        />
      </div>
        {productData.data.length!==0&&<ProductList products={productData.data}  />}
        {productData.data.length === 0 && <NoResults/>}
        {productData.data.length!==0&&<Pages {...productData.meta} params={params}/>}
    </div>
  )

}