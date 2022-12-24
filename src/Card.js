import React from  'react'
import image1 from './Images/image1.png'
import image2 from './Images/image2.png'
import image3 from './Images/image3.png'
import image4 from './Images/image4.png'
import image5 from './Images/image5.png'
import image6 from './Images/image6.png'
import love from './Images/love.png'
import cart from './Images/cart.png'



function card() {
  return (
    <div className='card'>
      <div className='first'>
        < img src={image1} alt='img' />
        <div className='tag'><b>Gucci Top  <br />$20000</b>

          <div className='cart'>
            <img src={love} alt='img' />
            <br />
            <img src={cart} alt='img' />


          </div>
        </div>
      </div>

      <div className='first'>
        < img src={image2} alt='img' />
        <div className='tag'><b>Gucci Top  <br />$20000</b>

          <div className='cart'>
            <img src={love} alt='img' />
            <br />
            <img src={cart} alt='img' />


          </div>
        </div>
      </div>
      <div className='first'>
        < img src={image3} alt='img' />
        <div className='tag'><b>Gucci Top  <br />$20000</b>

          <div className='cart'>
            <img src={love} alt='img' />
            <br />
            <img src={cart} alt='img' />


          </div>
        </div>
      </div>
      <div className='first'>
        < img src={image4} alt='img' />
        <div className='tag'><b>Gucci Top  <br />$20000</b>

          <div className='cart'>
            <img src={love} alt='img' />
            <br />
            <img src={cart} alt='img' />


          </div>
        </div>
      </div>
      <div className='first'>
        < img src={image5} alt='img' />
        <div className='tag'><b>Gucci Top  <br />$20000</b>

          <div className='cart'>
            <img src={love} alt='img' />
            <br />
            <img src={cart} alt='img' />


          </div>
        </div>
      </div>
      <div className='first'>
        < img src={image6} alt='img' />
        <div className='tag'><b>Gucci Top  <br />$20000</b>

          <div className='cart'>
            <img src={love} alt='img' />
            <br />
            <img src={cart} alt='img' />


          </div>
        </div>
      </div>
    </div>
  )
}

export default card