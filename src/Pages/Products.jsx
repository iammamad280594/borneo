import React from 'react'
import Title from '../components/Title/Title'
import Food from '../components/Food/Food'
import Hero from '../components/Hero/Hero'
const Products = () => {
  return (
    <div >
      <Hero/>
      <Title subTitle='Our Best Products' title='Customer Favorite' />
        <Food />
    </div>
  )
}

export default Products
