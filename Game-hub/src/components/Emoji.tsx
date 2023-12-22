import bullsEye from "../assets/bulls-eye.webp"
import thumbsUp from "../assets/thumbs-up.webp"
import meh from "../assets/meh.webp"
import { Image, ImageProps } from "@chakra-ui/react"


interface Props{
    rating:number
}


const Emoji = ({rating}:Props) => {

    const emojiMap:{[key:number]:ImageProps}={
        3:{src:meh,alt:"meh"},
        4:{src:thumbsUp,alt:"recommende"},
        5:{src:bullsEye,alt:"bullseye"},
    }
  return (
  
  
  <Image {...emojiMap[rating]} marginTop={1} boxSize='25px' />
  
  
  
    )
}

export default Emoji