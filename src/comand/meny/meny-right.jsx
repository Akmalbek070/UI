import { AspectRatio, Box, Button, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {BiLike,BiLinkAlt} from 'react-icons/bi'
import {FaRegComment} from 'react-icons/fa'
import logo from '../../img/Publisher.png'
import {CiBookmark} from 'react-icons/ci'
import {PiBellSimpleBold} from 'react-icons/pi'

export default function MenyRight() {
  return (
    <Box w={'full'}>
<AspectRatio w={'full'} h={'400px'}  >
  <iframe
    title='naruto'
    src='https://www.youtube.com/embed/QhBnZ6NPOY0'
    allowFullScreen
  />
</AspectRatio>
<Flex pt={'10px'} justifyContent={'space-between'} alignItems={'center'}>
<Heading color={'white'} fontSize={'2xl'}>
    Reacts.JS Course Free
</Heading>
<Flex gap={4}>
<Text  color={'white'} fontSize={'2xl'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
<BiLike />
<Text color={'gray'} fontSize={'xl'}>200k</Text>
</Text>
<Text   color={'white'} fontSize={'2xl'} display={'flex'} justifyContent={'center'} alignItems={'center'} cursor={'pointer'}>
<FaRegComment />
<Text color={'gray'} fontSize={'xl'}>350k</Text>
</Text>
</Flex>
</Flex>
<Box w={'full'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} pt={'10'}>
<Flex>
  <Image w={'260px'} src={logo} />
</Flex>
<Flex gap={'5'} cursor={'pointer'} >
<IconButton
  isRound={true}
  variant='outline'
  color={'white'}
  fontSize='20px'
  icon={<CiBookmark />}
/><IconButton
  isRound={true}
  variant='outline'
  color={'white'}
  fontSize='25px'
  icon={<BiLinkAlt />}
/><IconButton
  isRound={true}
  variant='outline'
  color={'white'}
  fontSize='25px'
  icon={<PiBellSimpleBold />}
/>
<Button w={'100px'} h={'45px'} variant={'outline'} bg={'green.400'} color={'white'} rounded={'3xl'} cursor={'pointer'} >Follow</Button>
</Flex>
</Box>
    </Box>

  )
}

