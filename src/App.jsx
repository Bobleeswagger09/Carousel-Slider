
import { useState } from 'react'
import './App.css'
const App = () => {
  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://media.istockphoto.com/id/1216139260/photo/watermelon.jpg?s=612x612&w=0&k=20&c=Ln6a0YnsHXrbHyeDKfCCGcT8o8ab-JnQDYNcOYMRoZU=",
    "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
    "https://media.istockphoto.com/id/1398811723/photo/controlling-the-plants.jpg?s=612x612&w=0&k=20&c=LyfMUMWEeXVsz_OLh2dazWPNQZjcH1ItlIGDDByjnW4="
  ]


  const [current, setState] = useState(0);

  function nextSlide(){
    //update current state == len let d count start from 0  else do +1
    setState(current === images.length - 1 ? 0 : current + 1);
  }
//if the current slide is 0 make current slide start counting from 1 else if its 2 subtract 1
  function prevSlide(){
    setState(current === 0 ? images.length -1 :current -1);
  }

  return (
    <div>
      <h2>
        Projects: Carousel
      </h2>
      <div className='slider'>
        <div className='left-arrow' onClick={prevSlide}>⬅</div>
        <div className='right-arrow' onClick={nextSlide}>⮕</div>
        {images.map(
          (image, index)=>
            current === index && (
              <div key={image} className='slide'>
                <img src={image} alt='images'/>
              </div>
            )
          )}
      </div>
    </div>
  )
}

export default App