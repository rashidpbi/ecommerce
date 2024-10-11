import * as React from 'react';

const Dropdown = () => {
    const [sortVal,setSortVal] = useState("date")
 return (

   <div>

     <select>

       <option value="fruit">rel</option>

       <option value="vegetable">low to h</option>

       <option value="meat">h to l</option>

     </select>

   </div>

 );

};
export default Dropdown