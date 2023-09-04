import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import MenyRight from './meny-right'
import MenyLeft from './meny-left'

export default function Meny() {
  return (
    <Box w={'full'} h={'100vh'} bg={'gray.700'} px={'6'}>
        <Flex justifyContent={'space-between'} cursor={'pointer'}>
            <MenyRight />
            <MenyLeft />  
        </Flex>       
    </Box>
  )
}
