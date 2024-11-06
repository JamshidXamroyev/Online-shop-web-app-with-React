import { logo } from "../../assets/data/data"
import '../../index.css'

const Navbar = () => {
  return (
      <>
        <div className="bg-black w-full p-2">
            <h3 className="text-white font-titleFont text-2xl text-center font-bold">Welcome All</h3>
        </div>
        <div className="flex justify-around items-center">
            <div className="cursor-pointer">
              <img src="https://logos.flamingtext.com/Name-Logos/Jamshid-design-beauty-name.png" className="pl:h-28 pl:w-full h-20 w-[30vw]" alt="logo" />
            </div>
            <div className="flex flex-row items-center">
              <button className="font-subtitleFont text-base text-center font-bold mr-1">Logout</button>
              <div className="flex flex-row items-center cursor-pointer">
                <i className="fa-regular fa-heart ml-2"></i>
                <p className="font-subtitleFont text-base text-center ml-1">Whish List</p>
              </div>
              <div className="flex flex-row items-center cursor-pointer">
                <i className="fa-solid fa-cart-shopping ml-2"></i>
                <p className="font-subtitleFont text-base text-center ml-1">Shopping bag</p>
              </div>
            </div>
        </div>
        <div className="bg-black p-4 w-full justify-around items-center flex">
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