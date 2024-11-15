import { Link, useNavigate, useParams } from "react-router-dom"
import { CircularProgress } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { filterProducts, filterProductsStart, removeProduct, singleProduct } from "../../slice/productSlice"
import Loader from "./loader"
import { useEffect } from "react"

const FiterProduct = () => {
  const {filter, loading} = useSelector(state => state.filter)
  const {type} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const backHandler = () => {
    localStorage.removeItem("FilteredProduct")
    navigate("/")
    dispatch(removeProduct())
  }

  const oneProducHandler = (id) => {
    dispatch(filterProductsStart())
    try {
        dispatch(singleProduct(id))
    } catch (error) {
        console.log(error);
    }
  }
  
  useEffect(() => {
    dispatch(filterProductsStart())
    try {
        dispatch(filterProducts(type))
    } catch (error) {
        console.log(error);
    }

  }, [])

  const genderButton = ["Male","Female"]
  const colorButton = ["red", "blue", "gray", "brown", "black", "purple"]



  
  if(loading){
    return <Loader />
} else{
      return (
        <div>
            <i className="fa-solid fa-left-long ml-6 mt-4 text-3xl duration-300 hover:text-green-400" onClick={backHandler}></i>
            <div className="pt-14">
                <div className="flex items-center justify-between mb-8 mx-8">
                    <div className="flex">
                        {genderButton.map((item, ind) => (
                            <button key={ind} className="mx-2 py-2 px-8 rounded-md bg-green-500 text-lg font-bold text-white">
                                {item}
                            </button>
                        ))}
                            <select id="countries" className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 font-bold  ">
                                {colorButton.map((item, ind) => (
                                    <option selected style={{color: item}} className="font-bold">{item}</option>
                                ))}
                            </select>
                    </div>
                </div>
                <div className="pl-14">
                    <h1 className="text-6xl font-titleFont font-bold leading-0">
                        {type}
                    </h1>
                </div>
                <div className="grid justify-items-center pl:grid-cols-4 flex-col gap-12 py-8">
                    {filter?.map((item) => (
                        <Link to={`/filter/${type}/${item.id}`}  key={item.id}>
                            <div className="p-2 py-2 border" onClick={() => oneProducHandler(item.id)}>
                                <div className="p-2 h-[45vh]">
                                    <img src={item.img} alt="" className="w-full h-full object-cover rounded-xl shadow-2xl shadow-blue-200" />
                                </div>
                                <div className="flex justify-center items-center flex-col gap-4">
                                    <h3 className="font-bold text-3xl font-titleFont">{item.name}</h3>
                                    <p className="font-subtitleFont text-center">{item.text}</p>
                                    <div className="flex justify-between items-center w-full px-4 border-t-2">
                                        <h5 className="font-subtitleFont text-[20px]">{item.price}$</h5>
                                        <h5 className="font-subtitleFont text-[18px] opacity-60 capitalize">{item.gender}</h5>
                                        <div className="flex justify-around items-center">
                                            {item?.color?.map((color, ind) => (
                                                <span className="p-2 m-1 rounded-full" key={ind} style={{backgroundColor: color}}></span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
      )
    }
}


export default FiterProduct