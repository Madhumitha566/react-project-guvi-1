//navbar  for topic and cart button

const Navbar=({cartCount,isOpen})=>{
 return(
    <>
    <nav>
    <div className="relative flex flex-row justify-between bg-gray-500 p-5 px-15">
      <div className="text-white">
        <h1 className="text-[20px] sm:text-[30px] md:text-[50px] font-semi-bold cursor-pointer">Fake Store Products</h1>
      </div>
      <div className="mx-20 rounded-lg bg-white">
        <button className=" p-1 sm:p-3 md:p-5" onClick={isOpen} aria-label={`open cart with ${cartCount} items`}>
            <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
           </svg>
            <span>Card</span>
            <span>{cartCount}</span>
        </button>
      </div>
    </div>
    </nav>
    </>
 )
}
export default Navbar