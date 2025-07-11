import React,{useState,useEffect,useMemo, useCallback} from 'react'
import ProductList from './ProductList.jsx'
import {getProductData} from "./database.js";
import NoResults from './NotResults.jsx';
import Loading from './Loading.jsx';
import Sorting from "./Sorting.jsx";
import Pages from "./Pages.jsx";
export default function ProductListPage(){
  const [sort,setSort] = useState("default");
  const [query,setQuery] = useState('');
  const [productList,updateProductList]=useState([]);
  useEffect(()=>{
    const promise=getProductData();
    promise.then((response)=>{
      updateProductList(response.data.products)
    });
  },[]);

  const handelSearch=useCallback((event)=>{
    setQuery(event.target.value);
  },[]);
  const handelSort=useCallback((event)=>{
    setSort(event.target.value);
  },[]);
  const processedData=useMemo(()=>{
    
    let filterData=productList.filter(item=>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    let data=[...filterData];
  
    if(sort==="lowTohigh"){
    data.sort((a,b)=>{
      const price1=+a.price;
      const price2=+b.price;
      return price1-price2;
    })
    }
    if(sort==="highTolow"){
      data.sort((a,b)=>{
        const price1=+a.price;
        const price2=+b.price;
        return price2-price1;
      })
    }
    if(sort==="category"){
      data.sort((a,b)=>{
        const cat1=a.category;
        const cat2=b.category;
        return cat1<cat2?-1:1;
      })
    }
    return data;
  },[sort,query,productList]);//useMemo returns the value computed on initial render, returns a new value only if the dependency changes ->useful for optimising
                              //big calculations  
  
  if(productList.length===0){
    return <Loading/>
  }

  if(processedData.length===0){
    return (
      <NoResults/>
    );
  }
 
  
  
  return (
    <div className='flex flex-col py-10 my-10 md:px-28 px-5 gap-y-5 bg-white items-center max-w-5xl'>
      
      <div className="w-full flex md:justify-between justify-center px-2 gap-3">
        <input type="text" placeholder="search" className="border p-2 border-gray-400 grow min-w-0" onChange={handelSearch}/>
        <Sorting sortVal={sort}
                onSortChange={handelSort}
        />
      </div>
      <ProductList products={processedData}/>
      <Pages />
    </div>
  )
     
}