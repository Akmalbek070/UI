import { Avatar, Box, Flex, Heading, Text, WrapItem } from '@chakra-ui/react'
import React from 'react'
import {BsSearch,BsMoonStars,BsListNested} from 'react-icons/bs'
import {IoMdContact} from 'react-icons/io'
 
export default function Header() {
  return (
    <Box w={'full'}  h={'20'} bg={'gray.700'} display={'flex'} justifyContent={'space-between'} px={'7'} alignItems={'center'}> 
          <Flex color={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'2'}>
         <Text fontSize={'2xl'}>
         <BsListNested />
         </Text>
          <Heading color={'white'} fontSize={'3xl'}>Explore</Heading>
          </Flex>
          <Flex gap={'8'} alignItems={'center'} cursor={'pointer'}>
            <Text color={'white'} fontSize={'xl'}>
                <BsSearch />
            </Text>
            <Text color={'white'} fontSize={'xl'}>
                <BsMoonStars />
            </Text>
            <Text color={'white'} fontSize={'2xl'}>
                <IoMdContact />
            </Text>
            <WrapItem>
    <Avatar   size='md' name='Christian Nwamba' src='https://bit.ly/code-beast' /> {' '}
  </WrapItem>
          </Flex>
    </Box>
  )
}
