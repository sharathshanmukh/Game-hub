import { HStack,Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
interface Props{
  onsearch:(searchText:string)=>void
}

const NavBar = ({onsearch}:Props) => {
  return (
    <HStack  padding='5px'>
        <Image src={logo} boxSize='60px'/>
        <SearchInput onSearch={onsearch}></SearchInput>

        <ColorModeSwitch></ColorModeSwitch>    </HStack>
  )
}

export default NavBar