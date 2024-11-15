import clothes from '../../assets/images/clothes.jpg'
import { useDispatch } from 'react-redux'
import { filterProducts, filterProductsStart } from '../../slice/productSlice' 
import { Link } from 'react-router-dom'

const NavigateButton = () => {
  const buttons = ["Hoodies", "Dresses", "Suits", "Shoes", "T-Shirts", "Jeans", "Jackets", "Bags"] 
  const dispatch = useDispatch() 

  const FilteredHAndler = (item) => {
    dispatch(filterProductsStart())
    try {
        dispatch(filterProducts(item))
    } catch (error) {
        console.log(error);
    }
  }
  
  return (
    <div>
        <div className="flex items-center justify-center pl:py-8 py-3 pl:my-0 my-8 pl:pl-0 pl-56 pl:overflow-hidden overflow-x-auto">
            {buttons.map((item, ind) => (
                <div className="pl:mr-5 mr-1" key={ind}>
                    <Link to={`/filter/${item}`}>
                        <button className='duration-500 p-2 pl:px-4 px-5 border rounded-lg hover:bg-gray-200 hover:border-black' onClick={() => FilteredHAndler(item)}>{item}</button>
                    </Link>
                </div>
            ))}
        </div>
        <div className="bg-black p-2 pl:w-[55%] w-[90%] mx-auto rounded-md">
            <h3 className='text-orange-600 text-center text-lg font-titleFont font-bold'>SALE UP TO 50%</h3>
        </div>
        <div className='flex justify-center items-center py-5'>
            <img src={clothes} alt="image" className='pl:w-[70vw] w-[90vw] h-[60vh] rounded-md shadow-lg shadow-gray-400' />
        </div>
    </div>
  )
}

export default NavigateButton