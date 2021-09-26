
import React from 'react'
import "../styling/Home.css"
import Product from './Product.jsx';
import PureProducts from './PureProducts';

function Home() {



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
        <div className="home" >
    <div className="backgroundImage">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"  alt="background for amazon"  />
            </div>
            <div className="shopThese">
            <div className="product__component">
            <div className="pureProducts">
            {
              PureProducts.slice(0,2).map(setProducts) 
              }
              </div>
            
      </div>
      <div className="product__component">
      <div className="pureProducts">
      {            
              PureProducts.slice(2,5).map(setProducts) 
              }
              </div>
      </div>

      <div className="product__component">
      <div className="pureProducts">
      {            
              PureProducts.slice(5).map(setProducts) 
              }
              </div>
        </div>
        </div>
        </div>
    )
}

export default Home;
