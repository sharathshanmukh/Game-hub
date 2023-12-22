import React from 'react'
import { InputGroup,InputLeftElement, Input } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'


const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch/>}/>
    <Input borderRadius={20} placeholder='search games...' variant={'filled'} ></Input>

    </InputGroup>
  )
}

export default SearchInput