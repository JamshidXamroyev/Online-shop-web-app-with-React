import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import FilterCard from "./filter-card"
import { CircularProgress } from "@mui/material"

const FiterProduct = () => {
  const products = useSelector(state => state.filter.filter) 
  const {type} = useParams()
  if(products) return <CircularProgress />
  return (
    <div>
        <div className="pt-14">
            <div className="pl-14">
                <h1 className="text-6xl font-titleFont font-bold leading-0">
                    {type}
                </h1>
            </div>
            <div className="grid justify-items-center grid-cols-4 gap-12 py-8">
                {products.map((item, ind) => {
                    console.log(item.id);
                    return (
                        <FilterCard 
                            name={item.name}
                            price={item.price}
                            img={item.img}
                            colors={item.colors}
                            text={item.text}
                            id={item.id}
                        />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default FiterProduct