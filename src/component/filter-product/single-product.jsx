import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import {OutlinedInput, InputLabel, MenuItem, FormControl, Select, Button} from '@mui/material';
import { addToCard } from "../../slice/cardSlice";
import { useState } from "react";

const SingleProduct = () => {
  const {singleProduct} = useSelector(state => state.filter) 
  const {id, type} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")

  return (
    <>
    <i className="fa-solid fa-left-long ml-6 mt-4 text-3xl duration-300 hover:text-green-400" onClick={() => navigate(`/filter/${type}`)}></i>
    <div className="px-24 py-10">
        <h1 className="text-6xl font-titleFont font-bold leading-0 mb-10">
            {singleProduct?.map(item => item.name)}
        </h1>
        {singleProduct.filter(product => product.id === id)?.map((item, ind) => (
            <div className="p-2 py-2 border flex justify-around items-center" key={ind}>
                <div className="p-2 h-[80vh]">
                    <img src={item.img} alt="" className="w-full h-full object-cover rounded-xl shadow-2xl shadow-blue-200" />
                </div>
                <div className="flex justify-start items-start flex-col gap-2 w-1/2">
                    <h3 className="font-bold text-4xl font-titleFont">{item.name}</h3>
                    <h4 className="font-bold text-3xl text-orange-600">15% OFF</h4>
                    <p className="font-subtitleFont text-[23px]">{item.text}</p>
                    <div className="flex justify-start items-center flex-col w-full gap-2 border-t-2">
                    <FormControl sx={{ mt: 1, ml: "-60px", width: 600 }}>
                        <InputLabel id="demo-multiple-name-label">Select Size</InputLabel>
                            <Select
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                input={<OutlinedInput label="Select Size" />}
                            >               
                            {item?.size?.map((name) => (
                                <MenuItem key={name} value={name} onChange={(e) => setSize(e.target.value)}>
                                  {name}
                                </MenuItem>
                            ))}
                            </Select>
                    </FormControl>

                    <FormControl sx={{ mt: 1, width: 600, ml: "-60px" }}>
                        <InputLabel id="demo-multiple-name-label">Select color</InputLabel>
                            <Select
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                input={<OutlinedInput label="Select color" />}
                            >
                            {item.color.map((name) => (
                                <MenuItem key={name} value={name}> {name} </MenuItem>
                            ))}
                            </Select>
                    </FormControl>
                    <Button variant="contained" sx={{ml: "-80%"}} onClick={() => dispatch(addToCard({
                      ammount: 1,
                      id: item.id,
                      name: item.name,
                      img: item.img,
                      text: item.text,
                      size: size,
                      color: color,
                      price: item.price,
                      totalPrice: item.price
                    }))}>Add to Card</Button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default SingleProduct