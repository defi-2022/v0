import type { NextPage } from 'next';

import Head from 'next/head';

import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { ethers, utils, BigNumber } from 'ethers';
import { Layout } from '../components/layout';

import { ContentHeader } from '../components/contentHeader';
import { Card } from '../components/cardWager';
import marketFactoryabi from '../abi/marketFactory.json';

declare var window: any;

const Markets: NextPage = () => {
	const SORT_BY_STATES = {
		RELEASE_DATE: 'releaseDate',
		NAME: 'name',
		RETAIL_PRICE: 'retailPrice',
	};

	const LAYOUT_STATES = {
		GRID: 'grid',
		LIST: 'list',
	};

	const [response, setResponse] = useState([] as any);
	const [sortBy, setSortBy] = useState({ state: SORT_BY_STATES.NAME });
	const [isAscending, setIsAscending] = useState(true);
	const [admin, setAdmin] = useState(false);
	let [isLoading, setisLoading] = useState(true as boolean);

	const options = {
		method: 'GET',
		url: 'https://7004dufqxk.execute-api.us-east-1.amazonaws.com/v2/sneakers?limit=10&brand=adidas&name=yeezy-350&gender=men',
	};

	const handleSortByReleaseDateClick = () => {};
	const handleSortByRetailPriceClick = () => {};

	// fetch sneaker data
	const getSneaker = async () => {
		Promise.all([
			axios.get(
				'https://7004dufqxk.execute-api.us-east-1.amazonaws.com/v2/sneakers?limit=10&sku=384664-023'
			),
			axios.get(
				'https://7004dufqxk.execute-api.us-east-1.amazonaws.com/v2/sneakers?limit=10&sku=BQ4422-400'
			),

			axios.get(
				'https://7004dufqxk.execute-api.us-east-1.amazonaws.com/v2/sneakers?limit=10&sku=CT8012-011'
			),
			axios.get(
				'https://7004dufqxk.execute-api.us-east-1.amazonaws.com/v2/sneakers?limit=10&sku=DV2122-400'
			),
		])

			.then(
				axios.spread((obj1, obj2, obj3, obj4) => {
					setResponse([
						obj1.data.results[0],
						obj2.data.results[0],
						obj3.data.results[0],
						obj4.data.results[0],
					]);

					setisLoading(false);

					console.log({ obj1 });
					console.log({ obj2 });
				})
			)
			.catch(function (error) {
				console.error(error);
			});
	};

	useEffect(() => {
		getSneaker();

		console.log();
	}, []);

	const adminCheck = async () => {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		// Prompt user for account connections
		let wallet = await provider.send('eth_requestAccounts', [0]);
		let accounts = wallet.toString();
		console.log(accounts);

		if (accounts == 0x50924f626d1ae4813e4a81e2c5589ec3882c13ca) {
			setAdmin(true);
		} else {
			setAdmin(false);
		}
	};

	const createNewMarket = async (e: any) => {
		const address = '0x27D7a1119D4D397f432D7C3266dbC6D77a09CACe';
		e.preventDefault();
		const data = new FormData(e.target);
		console.log(data.get('contractNumber'));
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		await provider.send('eth_requestAccounts', []);
		const signer = provider.getSigner();
		const MarketFactory = new ethers.Contract(
			address,
			marketFactoryabi,
			signer
		);

		const create = await MarketFactory.createNewMarket(
			'https://raw.githubusercontent.com/xsauce-io/MarketInfo/main/marketsData.json',
			BigNumber.from(data.get('prediction')),
			0,
			BigNumber.from(data.get('closingDate')),
			0
		);
		create.wait(1);

		const newMarket = await create.allMarkets(-1);

		alert(`market created at ${newMarket}!`);
	};

	useEffect(() => {
		getSneaker();
		adminCheck();
	}, []);

	useMemo(() => {
		if (response.length > 0 && isAscending === true) {
			if (response.length > 0 && sortBy.state === SORT_BY_STATES.NAME) {
				response.sort((a: { name: string }, b: { name: string }) =>
					a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
				);
				console.log({ response });
			} else if (
				response.length > 0 &&
				sortBy.state === SORT_BY_STATES.RELEASE_DATE
			) {
				response.sort(
					(a: { releaseDate: string }, b: { releaseDate: string }) =>
						a.releaseDate > b.releaseDate
							? 1
							: b.releaseDate > a.releaseDate
							? -1
							: 0
				);
				console.log({ response });
			} else if (
				response.length > 0 &&
				sortBy.state === SORT_BY_STATES.RETAIL_PRICE
			) {
				response.sort(
					(a: { retailPrice: number }, b: { retailPrice: number }) =>
						a.retailPrice - b.retailPrice
				);
				console.log({ response });
			}
		} else if (response.length > 0 && isAscending === false) {
			if (response.length > 0 && sortBy.state === SORT_BY_STATES.NAME) {
				response.sort((a: { name: string }, b: { name: string }) =>
					a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
				);
				console.log({ response });
			} else if (
				response.length > 0 &&
				sortBy.state === SORT_BY_STATES.RELEASE_DATE
			) {
				response.sort(
					(a: { releaseDate: string }, b: { releaseDate: string }) =>
						a.releaseDate < b.releaseDate
							? 1
							: b.releaseDate < a.releaseDate
							? -1
							: 0
				);
				console.log({ response });
			} else if (
				response.length > 0 &&
				sortBy.state === SORT_BY_STATES.RETAIL_PRICE
			) {
				response.sort(
					(a: { retailPrice: number }, b: { retailPrice: number }) =>
						b.retailPrice - a.retailPrice
				);
				console.log({ response });
			}
		}
	}, [sortBy, isAscending]);

	return (
		//#F5DEB3 - Vanilla
		//#E5E5E5 - Gray

		<div>
			<Head>
				<title>Xsauce</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Layout
				headerSubtitle={'PRE MARKET'}
				showHowItWorksButton={true}
				showFinancialOverview={false}
				headerTitle={'Xchange'}
			>
				<main className="flex w-full flex-1 flex-col text-center">
					{/*Sorting */}
					<ContentHeader
						title={'Predict the live market'}
						icon={<img className="" src="/candle.svg" />}
					>
						<div className="border-[#0C1615] bg-[#DCDEE1] border-2 rounded-[80px] flex items-center p-2 px-5 space-x-3 z-10">
							<h5 className="text-sm font-Inter">Filter on</h5>
							<div className="dropdown dropdown-end">
								<label
									tabIndex={0}
									className="text-[14px] flex flex-row justify-center  text-center items-center border-[#0C1615] border-2 rounded-3xl p-2 text-sm px-5 bg-white space-x-5 hover:opacity-50"
								>
									<img className="" src="/textBlock.svg" />

									{sortBy.state === SORT_BY_STATES.RETAIL_PRICE ? (
										<span className="text-black font-Inter ">Retail Price</span>
									) : sortBy.state === SORT_BY_STATES.RELEASE_DATE ? (
										<span className="text-black font-Inter">Release Date</span>
									) : (
										<span className="text-black font-Inter ">Name</span>
									)}
									<img className="" src="/downArrow.svg" />
								</label>
								<ul
									tabIndex={0}
									className="menu dropdown-content bg-[#DCDEE1] p-2 shadow rounded-box w-52 mt-4"
								>
									<li>
										<button
											onClick={() =>
												setSortBy({ state: SORT_BY_STATES.RETAIL_PRICE })
											}
											className="text-black font-Inter "
										>
											Retail Price
										</button>
									</li>
									<li>
										<button
											onClick={() =>
												setSortBy({ state: SORT_BY_STATES.RELEASE_DATE })
											}
											className="text-black font-Inter "
										>
											Release Date
										</button>
									</li>

									<li>
										<button
											onClick={() => setSortBy({ state: SORT_BY_STATES.NAME })}
											className="text-black font-Inter "
										>
											Name
										</button>
									</li>
								</ul>
							</div>
							<button
								className="hover:scale-150"
								onClick={() => setIsAscending(!isAscending)}
							>
								{isAscending === true ? (
									<img className="" src="/upArrow.svg" />
								) : (
									<img className="" src="/downArrow.svg" />
								)}
							</button>
						</div>
						{admin === true ? (
							<form className="space-x-2 ml-4">
								<input
									className="desktop:w-1/3 py-4 pl-3  text-[12px] shadow-md rounded-lg appearance-none focus:ring focus:outline-none focus:ring-black"
									name="prediction"
									type="string"
									placeholder="Prediction Price"
								/>
								<input
									className="desktop:w-1/3 py-4 pl-3  text-[12px] shadow-md rounded-lg appearance-none focus:ring focus:outline-none focus:ring-black"
									name="closingDate"
									type="string"
									placeholder="Closing Date (UNIX)"
								/>
								<button
									className="bg-black text-white rounded-lg py-3 px-2 mt-3"
									onClick={createNewMarket}
								>
									Add Market
								</button>
							</form>
						) : (
							<></>
						)}
					</ContentHeader>
					<div className="grid mobile:grid-cols-1  laptop:grid tablet:grid-cols-2 grid-rows-1 gap-y-6 place-items-center gap-x-6 mb-10 ">
						{response.map((el: any) => (
							<Card cardObject={el} />
						))}
					</div>
				</main>
			</Layout>
		</div>
	);
};

export default Markets;