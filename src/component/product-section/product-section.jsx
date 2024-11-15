import { storeData } from "../../assets/data/data"
import ProductSectionItem from "./product-section-item"

const ProductSection = () => {
  return (
    <div className="py-8">
        <div className="bg-black pl:w-[50%] w-[90%] p-2 mx-auto rounded-md mb-8">
            <h2 className="text-red-600 text-center text-lg font-titleFont font-bold">
                Summer T-Shirt Sale 30%
            </h2>
        </div>

        <div className="flex justify-start items-start flex-wrap pl:gap-16 gap-0 mx-auto pl:max-w-[80vw] max-w-[70vw]">
            {storeData.slice(14,20).map((item, ind) => (
                <div key={ind} className="my-4 pl:w-[27%]">
                    <ProductSectionItem img={item.img} type={item.type} name={item.name} text={item.text} id={item.id} price={item.price} size={item.size} color={item.color}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductSection