
import React from 'react'
import "../styling/Home.css"
import Product from './Product.jsx';
import PureProducts from './PureProducts';

function Home() {

// This function is passed in map function
function setProducts(product){
 return <Product 
    key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            image={product.image}
  />
}

    return (


// This is a home page ('/')
        <div className="home" > 
        {/* Background image  */}
    <div className="backgroundImage">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"  alt="background for amazon"  />
            </div>
            
            <div className="shopThese">
        {/* 1st row in home page */}
            <div className="product__component">
            <div className="pureProducts">
            {
              PureProducts.slice(0,2).map(setProducts) //1st two products is pulled from PureProducts.js
              }
              </div>
            
      </div>
      {/* 2nd row in home page */}
      <div className="product__component">
      <div className="pureProducts">
      {      
              PureProducts.slice(2,5).map(setProducts) //next three products is pulled
                                                       //.map(()=>{}) to .map(setProducts)
              
              }
              </div>
      </div>

        {/* 3rd row in home page */}
      <div className="product__component">
      <div className="pureProducts">
      {            
              PureProducts.slice(5).map(setProducts) //last product is pulled
        
              }
              </div>
        </div>
        </div>
        </div>
    )
}

export default Home;
