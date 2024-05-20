import React from 'react'
import './Title.css'
import PropTypes from 'prop-types'
// eslint-disable-next-line react/prop-types
const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  )
};

Title.PropTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string
};

export default Title
