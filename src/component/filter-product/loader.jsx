import { CircularProgress } from "@mui/material"
import { useSelector } from "react-redux"

const Loader = () => {
  const {loading} = useSelector(state => state.filter)
    
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        {loading && (
            <CircularProgress />
        )}
    </div>
  )
}

export default Loader