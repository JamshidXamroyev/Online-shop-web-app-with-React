import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const FilterCard = ({id, img, name, price, text, colors}) => {
  return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea key={id}>
                <CardMedia
                component="img"
                height="140"
                image={img}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {text}
                </Typography>
                <Typography gutterBottom variant="small" component="div">
                    {price}$
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {colors.map((item, ind) => (
                        <i className="fa-solid fa-circle mr-4" style={{backgroundColor: item}} key={ind}></i>
                    ))}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
  )
}

export default FilterCard