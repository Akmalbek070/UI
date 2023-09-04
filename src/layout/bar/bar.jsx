import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import logo  from '../../img/logo-lg.png'
import { BarData } from '../../api/api'


export default function Bar() {
  return (
   <Box w={'170px'} h={'100vh'} position={'fixed'} bg={'gray.800'} display={'flex'}  alignItems={'center'} flexDirection={'column'} pt={'10'} >
    <Image src={logo} alt='logo' />
    <Flex className='color-green-400' flexDirection={'column'} color={'white'} fontSize={'3xl'} pt={'20'} gap={'7'} cursor={'pointer'} >
       {BarData.map(item => (
         <Text key={item.id}>
           {item.icons}
        </Text>
       ))}
        
    </Flex>
   </Box>
  )
}

