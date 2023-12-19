import { Badge } from '@chakra-ui/react'


interface Props{
    score:number;
}


const CriticScore = ({score}:Props) => {
    const colorr=score>90 ? 'green' : (score>85 ? 'yellow' : 'red') 
  return (
    <Badge colorScheme={colorr}fontSize='12px' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore