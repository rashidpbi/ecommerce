import { NavLink, Link } from "react-router-dom";

import Title from "./Title";
import { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const AllCollections = () => {
  const [visible, setVisible] = useState(false);

  const { products } = useContext(ShopContext);
  const [collection, setCollection] = useState(products);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [value, setValue] = useState("rel");
  const [categories, setCategories] = useState({
    men: false,
    women: false,
    kids: false,
  });
  const [subCategories, setSubCategories] = useState({
    Topwear: false,
    Bottomwear: false,
    Winterwear: false,
  });
  const handleSortChange = (event) => {
    setValue(event.target.value);
  };
  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    setCategories((prevCategories) => ({
      ...prevCategories,
      [name]: checked,
    }));
  };
  const handleSubCategoryChange = (event) => {
    const { name, checked } = event.target;
    setSubCategories((prevSubCategories) => ({
      ...prevSubCategories,
      [name]: checked,
    }));
  };

  useEffect(() => {
    function sortCollection() {
      let sortedProducts = [];

      if (value === "rel") {
        sortedProducts = [...collection].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
      } else if (value === "low to h") {
        sortedProducts = [...collection].sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      } else if (value === "h to l") {
        sortedProducts = [...collection].sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      }

      let categoryFiltered = sortedProducts;

      if (
        categories.men == false &&
        categories.women == false &&
        categories.kids == true
      ) {
        categoryFiltered = categoryFiltered.filter(
          (product) => product.category == "Kids"
        );
      } else if (
        categories.men == false &&
        categories.women == true &&
        categories.kids == false
      ) {
        categoryFiltered = categoryFiltered.filter(
          (product) => product.category == "Women"
        );
      } else if (
        categories.men == false &&
        categories.women == true &&
        categories.kids == true
      ) {
        categoryFiltered = categoryFiltered.filter(
          (product) => product.category == "Kids" || product.category == "Women"
        );
      } else if (
        categories.men == true &&
        categories.women == false &&
        categories.kids == false
      ) {
        categoryFiltered = categoryFiltered.filter(
          (product) => product.category == "Men"
        );
      } else if (categories.men && !categories.women && categories.kids) {
        categoryFiltered = categoryFiltered.filter(
          (product) => product.category == "Men" || product.category == "Kids"
        );
      } else if (
        categories.men == true &&
        categories.women == true &&
        categories.kids == false
      ) {
        categoryFiltered = categoryFiltered.filter(
          (product) => product.category == "Men" || product.category == "Women"
        );
      } else {
        categoryFiltered = categoryFiltered.filter(
          (product) =>
            product.category == "Men" ||
            product.category == "Kids" ||
            product.category == "Women"
        );
      }

      let subCategoryFiltered = categoryFiltered;

      if (
        !subCategories.Topwear &&
        !subCategories.Bottomwear &&
        subCategories.Winterwear
      ) {
        subCategoryFiltered = subCategoryFiltered.filter(
          (product) => product.subCategory === "Winterwear"
        );
      } else if (
        !subCategories.Topwear &&
        subCategories.Bottomwear &&
        !subCategories.Winterwear
      ) {
        subCategoryFiltered = subCategoryFiltered.filter(
          (product) => product.subCategory === "Bottomwear"
        );
      } else if (
        !subCategories.Topwear &&
        subCategories.Bottomwear &&
        subCategories.Winterwear
      ) {
        subCategoryFiltered = subCategoryFiltered.filter(
          (product) =>
            product.subCategory === "Bottomwear" ||
            product.subCategory === "Winterwear"
        );
      } else if (
        subCategories.Topwear &&
        !subCategories.Bottomwear &&
        !subCategories.Winterwear
      ) {
        subCategoryFiltered = subCategoryFiltered.filter(
          (product) => product.subCategory === "Topwear"
        );
      } else if (
        subCategories.Topwear &&
        !subCategories.Bottomwear &&
        subCategories.Winterwear
      ) {
        subCategoryFiltered = subCategoryFiltered.filter(
          (product) =>
            product.subCategory === "Topwear" ||
            product.subCategory === "Winterwear"
        );
      } else if (
        subCategories.Topwear &&
        subCategories.Bottomwear &&
        !subCategories.Winterwear
      ) {
        subCategoryFiltered = subCategoryFiltered.filter(
          (product) =>
            product.subCategory === "Topwear" ||
            product.subCategory === "Bottomwear"
        );
      } else {
        subCategoryFiltered = subCategoryFiltered.filter(
          (product) =>
            product.subCategory === "Topwear" ||
            product.subCategory === "Bottomwear" ||
            product.subCategory === "Winterwear"
        );
      }

      setDisplayProducts(subCategoryFiltered);
    }

    sortCollection();
  }, [value, categories, subCategories]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-24 justify-between ">
        <div className="flex flex-col">
          <div
                onClick={() => setVisible(!visible)}
                className="flex p-3 items-center gap-4 cursor-pointer"
              >
                <p>Filter</p>
                <img className={`h-4 md:hidden ${
              visible ? "rotate-90" : ""
            }`}  src={assets.dropdown_icon} alt="" />
              </div>
          <div
            className={`${
              visible ? "block" : "hidden"
            } md:visible `}
          >
            <div className="flex flex-col text-gray-600">
            <div className="flex flex-col gap-4">
            <div className="border">
              <h3>Categories</h3>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="men"
                    checked={categories.men}
                    onChange={handleCategoryChange}
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
                    onChange={handleCategoryChange}
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
                    onChange={handleCategoryChange}
                  />
                  Kids
                </label>
              </div>
            </div>
      
            <div className="border">
              <h3>Type</h3>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="Topwear"
                    checked={subCategories.Topwear}
                    onChange={handleSubCategoryChange}
                  />
                  Topwear
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="Bottomwear"
                    checked={subCategories.Bottomwear}
                    onChange={handleSubCategoryChange}
                  />
                  Bottomwear
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="Winterwear"
                    checked={subCategories.Winterwear}
                    onChange={handleSubCategoryChange}
                  />
                  Winterwear
                </label>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      
      
        <div className="flex flex-col">
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
      </div>
    </div>
  );
};

export default AllCollections;
