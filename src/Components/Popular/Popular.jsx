import React from 'react'
import './popular.css'
import dataProducts from '../Assets/data'
import Item from '../Items/Item'
const Popular = () => {
  return (
    <div className='popular-comp'>
          <h1>POPULAR IN WOMEN</h1>
          <hr />
          <div className="popular-product">
              {dataProducts.map((item) => {
                  return <Item key={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              })}
          </div>
    </div>
  )
}

export default Popular
