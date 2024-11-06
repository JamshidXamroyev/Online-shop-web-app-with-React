import {Button} from '@mui/material'
import clothes from '../../assets/images/clothes.jpg'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../../slice/productSlice' 
import { Link } from 'react-router-dom'

const NavigateButton = () => {
  const buttons = ["Hoodies", "Dresses", "Suits", "Shoes", "T-Shirts", "Jeans", "Jackets", "Bags"] 
  const dispatch = useDispatch() 
  
  return (
    <div>
        <div className="flex items-center justify-center py-8">
            {buttons.map((item, ind) => (
                <div className="mr-5" key={ind}>
                    <Link to={`/filter/${item}`}>
                        <Button className='text-green-500 duration-500 hover:bg-gray-500 hover:text-white' onClick={() => dispatch(filterProducts(item))}>{item}</Button>
                    </Link>
                </div>
            ))}
        </div>
        <div className="bg-green-300 p-2 w-[55%] mx-auto rounded-md">
            <h3 className='text-orange-900 text-center text-lg font-titleFont font-bold'>SALE UP TO 50%</h3>
        </div>
        <div className='flex justify-center items-center py-5'>
            <img src={clothes} alt="image" className='w-[70vw] h-[60vh] rounded-md shadow-lg shadow-gray-400' />
        </div>
    </div>
  )
}

export default NavigateButton