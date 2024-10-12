import Title from "./Title";
import { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ShopContext } from "../context/ShopContext";

const AllCollections = () => {
  const { products } = useContext(ShopContext);
  const [collection, setCollection] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState(collection);
  const [value, setValue] = useState("rel");
  const [categories, setCategories] = useState({
    men: false,
    women: false,
    kids: false,
  });
  // const [type,setType]= usestate(null)
  const handleSortChange = (event) => {
    setValue(event.target.value);
  };
  // const handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;
  //   setCategories((prevCategories) => ({
  //     ...prevCategories,
  //     [name]: checked,
  //   }));
  // };
  // const applyFilters = () => {
  //   const selectedCategories = Object.keys(categories).filter(
  //     (category) => categories[category]
  //   );
  //   console.log('Selected Categories:', selectedCategories);
  // };

  useEffect(() => {
    // let filteredProducts = collection
    // if(categories){
    // // console.log(categories[0])
    // if(categories.men==false && categories.women==false && categories.kids==true){
    //    filteredProducts = filteredProducts.filter((product)=>(product.category =='Kids'));
    // }else if(categories.men==false && categories.women==true && categories.kids==false){
    //   filteredProducts = filteredProducts.filter((product)=>(product.category =='Women'));

    // }
    // else if(categories.men==false && categories.women==true && categories.kids==true){
    //   filteredProducts = filteredProducts.filter((product)=>(product.category =='Kids'||product.category =='Women'));

    // }
    // else if(categories.men==true && categories.women==false && categories.kids==false){
    //   filteredProducts = filteredProducts.filter((product)=>(product.category =='Men'));

    // }
    // else if(categories.men==true && categories.women==true && categories.kids==false){
    //   filteredProducts = filteredProducts.filter((product)=>(product.category =='Men'||product.category =='Women'));

    // }
    // else {
    //   filteredProducts = filteredProducts.filter((product)=>(product.category =='Men'||product.category =='Kids'));

    // }}

    if (value == "rel") {
      const sortedProducts = collection.sort(
        (a, b) => parseFloat(a.date) - parseFloat(b.date)
      );
      setCollection(sortedProducts);
    } else if (value == "low to h") {
      const sortedProducts = collection.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );

      setCollection(sortedProducts);
    } else {
      const sortedProducts = collection.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );

      setCollection(sortedProducts);
    }

    setDisplayProducts(collection);
  }, [value, displayProducts]);
  return (
    <div>
      {/* <div>
        <h3>Categories</h3>
        <div>
          <label>
            <input
              type="checkbox"
              name="men"
              checked={categories.men}
              onChange={handleCheckboxChange}
            />
            Men
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="women"
              checked={categories.women}
              onChange={handleCheckboxChange}
            />
            Women
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="kids"
              checked={categories.kids}
              onChange={handleCheckboxChange}
            />
            Kids
          </label>
        </div>

        <button onClick={applyFilters}>Apply Filters</button>
      </div> */}
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {displayProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCollections;
