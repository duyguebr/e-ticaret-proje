import React from 'react'
import Slider from 'react-slick';


const SliderComp = () => {
    const settings = {
         //dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div>
        <Slider {...settings}>
      <div>
        <div className='!flex items-center bg-gray-100 px-4'>
            <div>
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odit natus est, adipisci iure vel molestias reiciendis quam accusamus, vitae pariatur provident ut tenetur aut! Nihil accusantium at mollitia quidem porro quisquam cupiditate iure deserunt perspiciatis culpa, quasi minima quas?.</div> <br />
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
        
          <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/02157ab2-d58b-484c-b0bd-e3f785d52f94/NIKE+FULL+FORCE+LO.png" alt="" style={{ width: '700px', height: '700px' }}  />
          </div>
          </div>
            <div className='!flex items-center bg-gray-100 px-4'>
          <div>
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odit natus est, adipisci iure vel molestias reiciendis quam accusamus, vitae pariatur provident ut tenetur aut! Nihil accusantium at mollitia quidem porro quisquam cupiditate iure deserunt perspiciatis culpa, quasi minima quas?.</div> <br />
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
          </div>
          <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29a58cdc-d85a-4f01-a226-ede927c8c881/W+NIKE+COURT+VISION+LO+NN.png" alt="" style={{ width: '700px', height: '700px' }}  />
        </div>
        
      </Slider>
    </div>
  )
}

export default SliderComp