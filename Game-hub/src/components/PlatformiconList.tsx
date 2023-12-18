import {FaWindows,FaPlaystation
    ,FaAndroid,FaXbox,FaApple,FaLinux} from 'react-icons/fa'
import { Platform } from '../hooks/useGames'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from 'react-icons'

import { Card , Image, Heading, CardBody,Text,Icon,HStack} from '@chakra-ui/react'

interface Props{
    platform:Platform[]
}

const PlatformiconList = ({platform}:Props) => {
    const iconMap:{[key:string]:IconType}={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        android:FaAndroid,
    }


  return (


    <HStack>{platform.map(p=><Icon color='gray.500'as={iconMap[p.slug]} key={p.slug}/>)}
    {/* {platform.map(p => {
                // Check if the key exists in the iconMap
                const IconComponent = iconMap[p.slug as keyof typeof iconMap];
                if (!IconComponent) {
                    return null; // Return null if the key is not found
                }
                return <Icon as={IconComponent} key={p.slug} />; // Return the icon component
            })} */}
    </HStack>
  
)
}

export default PlatformiconList