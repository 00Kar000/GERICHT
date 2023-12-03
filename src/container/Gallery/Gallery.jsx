import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import { SubHeading } from "../../components";
import { images } from "../../constants";
import './Gallery.css';
import { useRef, useState } from 'react';

const Gallery = () => {



  const scrollRef = useRef(null)

  const scroll = (direction) => {
      const {current} = scrollRef;
      console.log(current.scrollLeft)

      if(direction === 'left') {
        current.scrollLeft -=310;
      }
      else{;
        current.scrollLeft += 310;
      }
  }

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]


  return (
    <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title="Instagram"/>
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{color:"#aaa", marginTop:"2rem"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa mollitia delectus aliquid est!
      </p>
      <button type='button' className='custom__button'>View More</button>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
            {galleryImages.map((image,index) => (
              <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery" />
                <BsInstagram className='gallery__image-icon' />
              </div>
            ))}
      </div>
      <div className='app__gallery-images_arrow'>
           <BsArrowLeftShort className='gallery__arrow-icon'  onClick={() => scroll('left')} />
           <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
      </div>
    </div>
  </div>
  )
  };

export default Gallery;
