import React from "react";

const NewsLetterBox = () => {
    const  onSubmitHandler = (e)=>{
e.preventDefault()
    }
  return (
    <div className="flex flex-col text-center gap-4">
      <p className="text-2xl font-medium text-gray-800 ">Subscribe now & get 20% off</p>
      <p className="mt-3 text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
 <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 " >
    <input type="email" className="w-full sm:flex-1 outline-none" placeholder="enter your email" required />
    <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
 </form>
      
    </div>
  );
};

export default NewsLetterBox;
