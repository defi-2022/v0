import React from 'react';
import { BigNumber, ethers, utils } from 'ethers';
import { useState, useEffect } from 'react';
import individualBook from "../abi/book.json"
import marketabi from "../abi/markets.json"
import axios from 'axios';
import { Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useRouter } from 'next/router';
import { useGetMarketBySku } from '../services/useRequests';
import { $tableAddress } from '../services/constants';

export const OpenXchange = (cardObject) => {
	// ----------------------- Variables and State Variable ------------------------

	const router = useRouter();
	const { sku } = router.query;

	const [alignment, setAlignment] = useState();
	const [isYes, setIsYes] = useState();
	const [No, setNo] = useState();
	const [Yes, setYes] = useState();
	const [order, setOrder] = useState();

	const [isBuy, setIsBuy] = useState();
	const [currentQuote, setCurrentQuote] = useState();
	const [orderBookAbi, setOrderBookAbi] = useState(null);
	const [signedContract, setSignedContract] = useState(null);
	const [currentMarket, setCurrentMarket] = useState();
	const [expiration, setExpiration] = useState();

	//--------------------- Fetch Requests  ------------------------

  const { data, error } = useGetMarketBySku(sku);

	//--------------------- Handler  Functions ------------------------

  const limitOrder = async (e) => {
    e.preventDefault();
      const dataForm = new FormData(e.target);
      console.log(dataForm.get("Amount"));
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const market = new ethers.Contract(data.book, individualBook, signer);
      let signedContract = market.connect(signer);
      setSignedContract(signedContract)
      let position;
      if (isYes === true) {
        position = 1
      } else { position = 2 };
      console.log(position);
      await signedContract.limitOrder(data.address, BigNumber.from(position), ethers.utils.parseUnits(dataForm.get("Amount").toString(), 18), ethers.utils.parseUnits((dataForm.get("Amount") * dataForm.get("LimitPrice")).toString(), 18), ethers.utils.parseUnits(dataForm.get("LimitPrice").toString(), 18),false, false)

  }

	const quote = async (e) => {
		e.preventDefault();
		// const data = new FormData(e.target);
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		await provider.send('eth_requestAccounts', []);
		const signer = provider.getSigner();
		const orderBook = new ethers.Contract(
			data.book,
			individualBook,
			signer
		);
		signedContract = orderBook.connect(signer);
		setSignedContract(signedContract);
		let fromToken;
		if (isBuy === true) {
			fromToken = data.address;
		} else {
			fromToken = $tableAddress;
		}
		const LowestAsk = await orderBook.quoteMarketPrice(fromToken);
		setCurrentQuote((LowestAsk / 10 ** 18).toString());

		console.log((LowestAsk / 10 ** 18).toString());
	};

	// const grabData = async () => {
	// const requestOrderBook = axios.get(OrderBookGit);
	// const requestOrderBookAddress = axios.get(OrderBookAddressGit);

	// 	axios
	// 		.all([requestOrderBook, requestOrderBookAddress])
	// 		.then(
	// 			axios.spread((...responses) => {
	// 				setOrderBookAbi(responses[0].data);
	// 				// TODO fetch object based on chainID now is only Rinkeby
	// 				setOrderBookAddress(responses[1].data[4].OrderBook20.address);
	// 			})
	// 		)
	// 		.catch((errors) => {
	// 			console.log(errors);
	// 		});
	// };

	const ratios = async () => {
	    if (currentMarket !== undefined) {
	        const provider = new ethers.providers.Web3Provider(window.ethereum);
	        const signer = provider.getSigner();
	        const contract = new ethers.Contract(currentMarket?.address, marketabi, signer);
	        const getYes = await contract.totalSupply(
	            1
	        )
	        const getNo = await contract.totalSupply(
	            2
	        )

	        let NoRatio = (getNo.toNumber() / (getYes.toNumber() + getNo.toNumber())) * 100
	        let YesRatio = (getYes.toNumber() / (getYes.toNumber() + getNo.toNumber())) * 100
	        console.log(YesRatio)

	        setYes(YesRatio.toFixed(0))
	        setNo(NoRatio.toFixed(0))

	    }
	}

	// --------------------- useEffects ---------------------------
	useEffect(() => {
		ratios();
		// calculations();
	}, [currentMarket]);

  useEffect(() => {
		setCurrentMarket(data);
	}, [data]);


	useEffect(() => {
		if (isYes === true) {
			setAlignment('1');
		} else {
			setAlignment('2');
		}
	}, [isYes]);

	useEffect(() => {
		if (isBuy === true) {
			setOrder('1');
		} else {
			setOrder('2');
		}
	}, [isBuy]);



	return (
		<div className="flex flex-col justify-start border-[1px] border-[#0C1615] rounded-[10px] text-black">
			<div className="bg-white p-4 text-left w-[100%] rounded-tl-xl rounded-tr-xl border-b-[1px] border-[#0C1615]">
				<flex className="flex flex-rows space-x-2 justify-center items-center">
					<p className=" mr-1 text-xs  ">Market Statistics</p>
					<div className="text-xs w-1/4 bg-[#0C1615] p-2 rounded-2xl text-center text-white">
						No - {No}%
					</div>
					<div className="text-xs   w-1/4 bg-[#ACFF00] p-2 rounded-2xl text-center">
						Yes - {Yes}%
					</div>
				</flex>
			</div>
			<form
				onSubmit={limitOrder}
				className="flex flex-col justify-center items-center mobile:w-full laptop:w-full"
			>
				<div className="bg-white items-center text-left border-b-[1px] p-4   space-y-4 border-[#0C1615] w-full ">
					<div class="bg-white items-center p-3  px-5 text-left w-[100%] border-[1px] rounded-3xl border-[#0C1615]  dropdown dropdown-end  ">
						<label tabindex="0" class="flex items-center hover:opacity-60 ">
							<p className="text-left text-sm ">Select the Wager</p>
							<div class="flex-1"></div>
							{isYes === true ? (
								<>
									<span className="text-black">Yes</span>
								</>
							) : (
								<>
									<span className="text-black">No</span>
								</>
							)}
						</label>
						<ul
							tabindex="0"
							class="menu dropdown-content p-2 shadow bg-[#EFF1F3] rounded-box w-[25%] mt-4    "
						>
							<li>
								<a
									onClick={() => {
										setIsYes(true);
									}}
									className="flex justify-right"
								>
									Yes
								</a>
							</li>
							<li>
								<a
									onClick={() => {
										setIsYes(false);
									}}
								>
									No
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="bg-white items-center text-left border-b-[1px] p-4 space-y-4 border-[#0C1615] w-full ">
					<div className="bg-white items-center p-3 px-5 text-left w-[100%] border-[1px] rounded-3xl border-[#0C1615] flex focus:outline-2 focus:outline-offset-2  hover:outline-1">
						<p className="text-left text-sm pr-1 ">Limit Price:</p>
						<input
							className="flex-1 text-right mobile:text-sm laptop:text-md appearance-none focus:none focus:outline-none "
							name="LimitPrice"
							type="number"
							placeholder="100"
							required
						/>
						<p className="text-sm ml-1"> USDC</p>
					</div>
					<div className="bg-white items-center p-3 px-5 text-left w-[100%] border-[1px] rounded-3xl border-[#0C1615] flex focus:outline-2 focus:outline-offset-2 hover:outline-1">
						<p className="text-left text-sm inline-block pr-1 ">Amount:</p>
						<input
							className="flex-1 text-right mobile:text-sm laptop:text-md  inline-block appearance-none focus:none focus:outline-none "
							name="Amount"
							type="number"
							placeholder="# of Contracts"
							required
						/>
					</div>
				</div>

				<div className="bg-[#ACFF00] items-center text-left  p-4 space-y-4  w-full border-b-[1px] border-b-[#0C1615]">
					<div className="font-Inter mobile:text-lg font-medium flex flex-row justify-center items-center">
						<Tooltip
							title="Price is dynamic and will adjust in response to buys/sells in the market. Buy price will always show the lowest asking price in the orderbook."
							arrow
							className="self-start mr-2"
						>
							<InfoIcon sx={{ fontSize: '18px' }} />
						</Tooltip>
						<p className="pr-4 ">Price : ${currentQuote} </p>
						<button
							onClick={quote}
							className="bg-black text-white p-3 text-xs rounded-3xl"
						>
							Update Quote
						</button>
					</div>
				</div>

				<div className="bg-white items-center text-left  p-4 space-y-4 rounded-bl-lg rounded-br-lg  w-full">
					<button
						type="submit"
						id="mint"
						className={
							isBuy == undefined
								? ' w-full font-medium  text-xl py-4  text-[#0C1615] bg-[#DCDEE1] rounded-[80px] hover:opacity-60'
								: isBuy == true
								? 'w-full font-medium  text-xl py-4  text-[#0C1615] rounded-[80px] hover:opacity-60text-black bg-[#ACFF00] '
								: ' w-full font-medium  text-xl py-4  text-white bg-[#0C1615] rounded-[80px] hover:opacity-60 '
						}
					>
						{isBuy == undefined
							? 'Select Order Type'
							: isBuy === true
							? 'Place Buy Order'
							: 'Place Sell Order'}
					</button>
				</div>
			</form>
		</div>
	);
};
