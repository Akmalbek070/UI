import { Box } from "@chakra-ui/react";
import { Bar } from "./layout";
import Header from "./layout/header/header";
import { Meny } from "./comand/meny.js";


function App() {
  return (
    <>
    <Box>
         <Bar />
         <Box pl={'170px'}   position={'fixed'} w={'full'} h={'100vh'}  zIndex={'20'} >
         <Header/>
         </Box>
         <Box pl={'170px'} pt={'80px'} >
          <Meny />
         </Box>
    </Box>
   

    </>
     
  
  );
}

export default App;
