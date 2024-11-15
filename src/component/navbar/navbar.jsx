import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { logo } from "../../assets/data/data"
import '../../index.css'
import { Card } from "../"
import { Avatar } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"

const Navbar = () => {
  const {user} = useSelector(state => state.auth)
  const {name, image} = user
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const {totalAmmount} = useSelector(state => state.card)

  return (
      <>
        <div className="bg-black w-full p-2 relative">
            <h3 className="text-white font-titleFont text-2xl text-center font-bold">Welcome All</h3>
        </div>
        <div className="flex justify-around items-center">
            <div className="cursor-pointer" onClick={() => navigate("/")}>
              <img src="https://logos.flamingtext.com/Name-Logos/Jamshid-design-beauty-name.png" className="pl:h-28 h-16 pl:w-full w-[30vw]" alt="logo" />
            </div>
            <div className="flex flex-row items-center pl:gap-0 gap-4">
              <button className="font-subtitleFont text-base text-center font-bold">Logout</button>
              <div className="flex flex-row items-center cursor-pointer pl:relative hover:relative pl:left-12">
                <i className="fa-regular fa-heart ml-2 text-2xl pl:mr-0"></i>
                <p className="font-subtitleFont text-base text-center ml-1 duration-500 ease-in-out rounded-md pl:relative absolute pl:bottom-0 -bottom-8 pl:-left-8 -left-12 p-1 pl:text-black text-white pl:bg-transparent bg-black w-36">Whish List</p>
              </div>
              <div className="flex flex-row items-center cursor-pointer pl:relative hover:relative" onClick={() => setOpen(prev => !prev)}> 
                {totalAmmount > 0 ? (<span className="px-2.5 bg-gray-400 rounded-full">{totalAmmount}</span>) : ""}
                <i className="fa-solid fa-cart-shopping text-2xl"></i>
                <p className="font-subtitleFont text-base text-center duration-500 ease-in-out rounded-md pl:relative absolute pl:bottom-0 -bottom-8 pl:-left-4 -left-12 p-1 pl:text-black text-white pl:bg-transparent bg-black w-36">Shopping bag</p>
              </div>
              <div className="flex items-center gap-2">
              <Avatar alt="Cindy Baker" src={image} />
              <p className="font-semibold font-titleFont text-[20px] max-pl:hidden">Hi {name}</p>
              </div>
              {open && <Card open={open} setOpen={setOpen}/>}
            </div>
        </div>
        <div className="bg-black p-4 w-full justify-around items-center flex pl:flex-row flex-col gap-3">
          <div className="text-white font-subtitleFont text-base font-medium text-center">
          <span className="font-bold text-[18px]">50%</span> Chegirma
          </div>

          <div className="text-white font-subtitleFont text-base font-medium text-center">
            <span className="font-bold text-[18px]" >Bepul</span> yetkazib berish va qaytarish 
          </div>
          
          <div className="text-white font-subtitleFont text-base font-medium text-center">
            Turli to'lov usullari
          </div>
        </div>
      </>
  )
}

export default Navbar