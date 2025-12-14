//product for shopping

const ProductItems=({product,onAddcart})=>{
const formattedAmount=product.price.toFixed(2)
return(
    <>
    <div className="bg-white rounded-lg items-center m-10 p-5 grid  grow-1 hover:shadow-xl">
       
           <div className="m-4 items-center justify-center flex">
              <img src={product.image} alt={product.title} className="w-30 h-30"/>
           </div>
          <div className="text-center text-lg font-semibold p-2">
               {product.title}
          </div>
         <div className=" p-0.5 flex justify-between">
            <span className="text-blue-800 font-semibold p-3" >${formattedAmount}</span>
            <span className="text-gray-600 font-semibold p-3">{product.category}</span>
         </div>
            <button onClick={()=>onAddcart(product)} className="w-full py-2 text-white rounded-lg  bg-blue-800
            hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-white">Add To Cart</button>
     
    </div>
    </>
)
}
export default ProductItems