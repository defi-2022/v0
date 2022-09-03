import type { NextPage } from 'next';
import { Nav } from '../../../components/nav';
// import { Card } from '../components/card'
import { PredictToggle} from '../../../components/predictionToggle'
import { Announcement } from '../../../components/announcement';
import { WagerCard } from '../../../components/wagerCard';
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import axios from "axios";
import Head from 'next/head';
import { BigNumber, ethers, utils } from 'ethers'

const LiveMarket: NextPage = (cardObject) => {

  const router = useRouter()

  const {sku}= router.query

  console.log(sku)

  const skuUrl = 'https://7004dufqxk.execute-api.us-east-1.amazonaws.com/v2/sneakers?limit=10&sku=' + sku

  const options = {
    method: "GET",
    url: skuUrl
};

const [response, setResponse] = useState([] as any);
const [admin, setAdmin] = useState(false);

// fetch sneaker data
const getSneaker = async () => {
    axios
        .request(options)
        .then(function (response) {
          const array: any[] = response.data.results
            setResponse(array);
            console.log(response.data.results);
        })
        .catch(function (error) {
            console.error(error);
        });
};

const adminCheck =  async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  // Prompt user for account connections
  let wallet = await provider.send("eth_requestAccounts", [0]);
  let accounts = wallet.toString();
  console.log(accounts)

  if (accounts == 0x50924f626d1ae4813e4a81e2c5589ec3882c13ca ) {
    setAdmin(true)
  } else {
    setAdmin(false)
  }
  }


useEffect(() => {
  if(!router.isReady) return;
    getSneaker();
    adminCheck();
}, [router.isReady]);


useEffect(() => {
  adminCheck();
}, []);

	return (

		<div className="flex min-h-screen w-screen flex-col items-center justify-center bg-[#E5E5E5] ">
			<Head>
				<title>Xsauce</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex w-full flex-1 flex-col text-center">
      <Announcement />
				<Nav />
				
			
        <h3 className="flex flex-row items-center justify-center text-left pt-4 mt-8 pb-4 text-[28px] font-medium">
        ⏱ Live Market
				
					</h3>
        <h1>{admin}</h1>
        
				<div className=" laptop:flex flex-col">
        <div className="p-5 laptop:flex flex-row items-center justify-center laptop:space-x-[1px] pb-20">
        {response.map((el: any) => (
            <WagerCard  cardObject={el}/>
            ))
        }
					
					<div className='mobile:flex flex-col space-y-6 justify-center items-center pt-2 laptop:w-1/3'>
{/*       
          <button className={admin == true ? 'h-[100px] w-[100px] bg-[black]': 'h-[100px] w-[100px] bg-[red]' }></button>
			 */}
					<PredictToggle />
         
          
          </div>
          
          </div>
        
      
				</div>
        
			</main>

			{/* <footer className="flex h-24 w-full items-center justify-center border-t">
			</footer> */}
		</div>
	);
};

export default LiveMarket;
