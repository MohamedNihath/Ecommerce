import React, { useContext } from 'react'
import './Css/ShopCatagery.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';

const ShopCatagery = (props) => {
  const {all_Product}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner}/>

      <div className="shopcatagory-indexshort">

        <p>
           <span>Showing 1-12</span>Out of 36 products
        </p>

        <div className="shopcatagory-short">
          sort by <img src={dropdown_icon}/>
        </div>
      </div>
      <div className="shopcatagory-products">
        {all_Product.map((item,i)=>{

          if(props.category===item.category){

            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

          }
          else{
            return null;
          }




        })}
      </div>
      <div className="shopcatagory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCatagery
