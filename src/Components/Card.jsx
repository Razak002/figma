import image1 from '../assets/Images/image1.png'
import image2 from '../assets/Images/image2.png'
import image3 from '../assets/Images/image3.png'
import image4 from '../assets/Images/image4.png'
import image5 from '../assets/Images/image5.png'
import image6 from '../assets/Images/image6.png'
import love from '../assets/Images/love.png'
import cart from '../assets/Images/cart.png'



export const Card=()=>{
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

