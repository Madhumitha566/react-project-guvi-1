import { useState,useEffect } from 'react'
import ProductItems from './components/ProductItems'
import Navbar from './components/Navbar'
import CartItems from './components/CartItems'


const App=()=>{

  //State for product

  const [products,setProduct]=useState([])
  const [cart,setCartItems]=useState([])
  const [isLoading,setLoading]=useState(true)
  const [isopenmodel,setModel]=useState(false)
  
 //fetching the product from API

  useEffect(()=>{
      const fetchProduct=async()=>{
        try{
          const response=await fetch('https://fakestoreapi.com/products')
          const data=await response.json()
          setProduct(data)
        }catch(error){
          console.log("Error fetching products",error)
          alert("The product is not fetching....")
        }finally{
          setLoading(false)
        }
      };
      fetchProduct();
  },[])
  //Adding the product to the card

  const handleToAdd=(product)=>{
  
    const isAlreadyAdd=cart.some(item=>item.id===product.id)

    if(isAlreadyAdd){
         alert("The product is already added to card")
    }else{
      setCartItems(prevCart=>[...prevCart,product])
    }

  };
  //removing the product from the card
  const removeFromCard=(productId)=>{
      setCartItems(prevCart=>prevCart.filter(item=>item.id!==productId))
  }
  const cartCount=cart.length
  return(
    <>
    <div className="bg-orange-50">
      <Navbar 
        cartCount={cartCount}
        isOpen={()=>setModel(true)}/>
      <main>
        <h1 className="text-center text-[25px] md:text-[40px] font-bold mt-5">  Products For Shopping 🛒</h1>
        {isLoading && (
                    <div className="text-center">
                        <p className="loading-message">Loading products...</p>
                    </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {products.map(product=>(<ProductItems
                     key={product.id}
                     product={product}
                     onAddcart={handleToAdd}
                     />
                     ))}
                 </div>
      </main>
     
        <CartItems
        isOpen={isopenmodel}
        onClose={()=>setModel(false)}
        cartComponent={cart}
        removeCart={removeFromCard}
        />
    </div>
    <footer className="text-center bg-gray-500 p-5 px-15">
      <p className=" text-[20px] md:text-[30px] font-semi-bold text-white">Fake API store | Using React and Tailwindcss</p>
    </footer>
    </>
  )
}
export default App
