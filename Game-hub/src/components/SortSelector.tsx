import { MenuList, Menu, MenuButton, MenuItem,Button} from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'
interface Props{
    sortSel: (sortsel:string)=>void
    selected:string ,
}

const SortSelector = ({sortSel,selected}:Props) => {
    const sortorders=[
        {value:"",label:"Relevance"},
        {value:"-added",label:"date added"},
        {value:"name",label:"Name"},
        {value:"-released",label:"Release Date"},
        {value:"-metacritic",label:"Popularity"},
        {value:"-rating",label:"Rating"},

        
    ]
    const current_sor_or=sortorders.find(o=>o.value==selected)
    // console.log(current_sor_or)
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Sort by:{current_sor_or?.label}
        

    </MenuButton>
    <MenuList>
        {sortorders.map(o=> <MenuItem key={o.value} value={o.label} onClick={()=>{sortSel(o.value)}}>{o.label}</MenuItem>)}
    </MenuList>
  </Menu>  )
}

export default SortSelector