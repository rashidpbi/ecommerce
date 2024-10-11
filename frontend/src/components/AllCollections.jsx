import Title from './Title'
import { useContext, useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { ShopContext } from '../context/ShopContext'

const AllCollections = () => {

    const {products} = useContext(ShopContext)
    const [collection,setCollection] = useState([])
    const [value, setValue] = useState('rel');
    // const [categories,setCategories]= useState(null)
    // const [type,setType]= usestate(null)
    const handleSortChange = (event) => {

        setValue(event.target.value);
     
      };


useEffect(()=>{
const collectionProducts = products.slice(0,15)

const filteredProducts = collectionProducts;
if(value=='rel'){
const sortedProducts = filteredProducts.sort((a, b) => parseFloat(a.date) - parseFloat(b.date))
    setCollection(sortedProducts)
}else if(value=='low to h'){
    const sortedProducts = filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))

setCollection(sortedProducts)
}else{
    const sortedProducts = filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))

setCollection(sortedProducts)
}
},[value])
  return (
    <div>

filer

      <div className="flex justify-between ">
        <Title text1={"ALL"} text2={"COLLECTIONS"} />
        <div>

<select value={value} onChange={handleSortChange}>

  <option value="rel">rel</option>

  <option value="low to h">low to h</option>

  <option value="h to l">h to l</option>

</select>


</div>

      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

          {
              collection.map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
              ))
            }
      </div>
    </div>
  )
}

export default AllCollections
