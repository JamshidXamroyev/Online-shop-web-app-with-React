import { sliderData } from '../../assets/data/data'
import {nextSlide, dotSlide, prevSlide} from '../../slice/sliderSlice'
import { useSelector, useDispatch } from 'react-redux'


const Slider = () => {

    const slideIndex = useSelector(state => state.slider.value)
    const dispatch = useDispatch()
  return (
    <div className='relative pb-4'>
        <i className="fa-solid fa-angle-left absolute z-10 top-[45%] left-6 text-3xl p-2 bg-white rounded-full duration-300 hover:bg-green-400"  onClick={() => dispatch(nextSlide(slideIndex + 1))}></i>
        <div>
            {sliderData.map(item => (
                <div key={item.id} className={parseInt(item.id) === slideIndex ? 'opacity-100 duration-700 scale-100 ease-in-out' :'opacity-0 duration-700 scale-75 ease-in-out' }>
                    <div className='m-0'>
                        {parseInt(item.id) === slideIndex && (
                            <img src={item.img} alt="image" className='h-[95vh] w-full m-0'/>
                        )}
                    </div>
                    <div className='absolute top-20 mx-auto inset-x-1/3'>
                        <p className='text-white text-center text-4xl font-titleFont font-bold'>{parseInt(item.id) === slideIndex && item.text}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="flex absolute bottom-28 left-[45%]">
            {sliderData.map((item, ind) => (
                <div className='mr-4' key={ind}>
                    <div className={ind === slideIndex ? "p-4 bg-green-500 rounded-full cursor-pointer" : "p-4 bg-white rounded-full cursor-pointer"} onClick={() => dispatch(dotSlide(ind))}></div>
                </div>
            ))}
        </div>
        <i className="fa-solid fa-angle-right absolute z-10 top-[45%] right-6 text-3xl p-2 bg-white rounded-full duration-300 hover:bg-green-400" onClick={() => dispatch(prevSlide(slideIndex - 1))}></i>
    </div>
  )
}

export default Slider