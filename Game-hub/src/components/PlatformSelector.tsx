import React, { useState } from 'react'
import { MenuList, Menu, MenuButton, MenuItem,Button} from '@chakra-ui/react'
import { BsChevronBarContract, BsChevronBarDown, BsChevronBarExpand } from 'react-icons/bs'
import { usePlatforms } from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'
interface Props{
   onselectPlatform:(platform:Platform)=>void;
   splat:Platform|null,
}

const PlatformSelector = ({splat,onselectPlatform}:Props) => {
    const {data,err}=usePlatforms();
    // const[sp,setSp]=useState<Platform | null>(null)
    if (err){return null}
    return err ? null :(
         (
            <Menu>
              <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
               {/* {splat?.name ?  splat?.name :"aaa" }                 */}
               {splat?.name || "Platforms"}
              </MenuButton>
              <MenuList>
                {/* MenuItems go here */}
                {data.map(d=><MenuItem onClick={()=>{
                  onselectPlatform(d)
                  // setSp(d)
                
                }} key={d.id}>{d.name}</MenuItem>)}
              </MenuList>
            </Menu>
          )
    )
    
   
}

export default PlatformSelector    