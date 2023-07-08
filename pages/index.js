
import Head from 'next/head'
import Home from './Portfolio/Home'



 function IndexFile() {

  return (
    <>
     <Head>
        <title>Welcome to My PortFolio</title>
      </Head>
     <Home/> 
    </>
  )
}

IndexFile.requireNavbarAndFooter = true;
export default IndexFile;