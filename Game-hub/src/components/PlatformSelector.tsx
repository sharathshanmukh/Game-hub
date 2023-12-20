import React from 'react'
import { MenuList, Menu, MenuButton, MenuItem,Button} from '@chakra-ui/react'
import { BsChevronBarContract, BsChevronBarDown, BsChevronBarExpand } from 'react-icons/bs'
import { usePlatforms } from '../hooks/usePlatforms'


const PlatformSelector = () => {
    const {data,err}=usePlatforms();
    // console.log(data)
    if (err){return null}
    return err ? null :(
         (
            <Menu>
              <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
                Platforms
              </MenuButton>
              <MenuList>
                {/* MenuItems go here */}
                {data.map(d=><MenuItem key={d.id}>{d.name}</MenuItem>)}
              </MenuList>
            </Menu>
          )
    )
    
   
}

export default PlatformSelector