import image from '../../assets/spices.jpg'
import image2 from '../../assets/cook.jpg'
import img3 from '../../assets/breakfast.jpg'
import img4 from '../../assets/dish.jpg'
import { Container } from './Home.styles'
import { Button } from '../../components/Button/Button'

export function Home() {
  return (
    <Container>
      <div className='content'>
        <h1>Cook like a chef</h1>
        <p>
          Need some ideas? We provide a variety of simple and tasty recipes from
          famous chefs. Let&apos;s start cooking.
        </p>
        <Button to='/recipes'>Explore recipes</Button>
      </div>
      <div className='images'>
        <div className='col'>
          <img src={image} className='top-img' alt='Image of spices.' />
          <img className='top-img' src={img4} alt='' />
        </div>
        <div className='col'>
          <img
            src={image2}
            className='bottom-img'
            alt='Photo of someone cutting vegetables.'
          />
          <img src={img3} alt='Sandwich with egg and avocado.' />
        </div>
      </div>
    </Container>
  )
}
