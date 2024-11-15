import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { addToCard } from "../../slice/cardSlice"

const ProductSectionItem = ({img, name, text, color, size, id, price }) => {
    const dispatch = useDispatch()
  return (
    <div>
        <Card sx={{ maxWidth: 345, boxShadow: "0px 12px 23px rgba(0, 0, 0, 0.5)" }} className="relative">
            <CardMedia
                sx={{height: "32vh"}}
                component="img"
                alt="green iguana"
                image={img}
            />
            <h3 className="absolute top-5 right-2 -rotate-45 text-3xl font-bold font-titleFont text-red-600">Sale%</h3>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {text}
                </Typography>
            </CardContent >
                <div className="flex justify-between px-3">
                <Typography gutterBottom variant="subtitle1" component="div">
                    Size: {size[0]}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {color?.map(item => (
                        <span key={item} style={{background: item}} className="m-2 px-2 rounded-full"></span>
                    ))}
                </Typography>
                </div>
            <CardActions>
            <Button variant="contained" sx={{mx: "auto", my: 1}} onClick={() => dispatch(addToCard({
                      ammount: 1,
                      id: id,
                      name: name,
                      img: img,
                      text: text,
                      size: size[0],
                      color: color[0],
                      price: price,
                      totalPrice: price
                    }))}>Add to Card</Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default ProductSectionItem