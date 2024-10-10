import { useState, useEffect } from 'react'
import './App.css'


// custom hoook designing
function useCurrencyInfo(currency){
  const [data, setData] = useState({})
  useEffect(() =>{
    fetch(`https://v6.exchangerate-api.com/v6/5a741600eba5cb8daa82ef2f/latest/${currency}`)
    .then((res) => res.json())
    .then((res) => SVGMetadataElement(res[currency]))
    console.log(data)
  },[currency])
  console.log(data);
  return data
}

export default useCurrencyInfo;