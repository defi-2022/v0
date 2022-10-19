

import React, { useEffect, useState } from 'react';
import { Skeleton } from '@mui/material';
import { Tooltip } from '@mui/material';
import { ExpandImageModal } from './expandImageModal';
import { FreePlayGraph } from '../components/freePlayGraph';

import { useGetSneaker } from '../services/useRequests';

export const FreePrediction = () => {



	const { data: s1, error: e1 } = useGetSneaker('DZ5485-612');
	return (

		<React.Fragment>
			<div className="flex flex-col space-y-4 laptop:flex-row  laptop:space-x-4 laptop:space-y-0 pb-4">
				<div className='bg-white w-full laptop:w-[40%] rounded-lg font-SG p-6 border-[1px] border-[#0C1615] '>
					<h1 className='text-center text-xl font-medium '> Get 3 predictions in a row to spin the wheel</h1>
					<img
						src={s1?.image.original}
						className="object-cover w-[50%] laptop:w-[100%] m-auto h-auto rounded-lg "
					/>
					<div className='flex flex-col space-y-5'>
						<div className='flex-1'>
							What will the resell price of the <span className='font-bold'>{s1?.name}</span> be on <span className='font-bold'>October 31st, 2022?</span>
						</div>
						<div className='flex flex-col flex-1 space-y-3 '>
							<div className="flex flex-row bg-white items-center py-4 px-6 text-left w-[100%] border-[1px] rounded-[80px] border-[#0C1615] focus:outline-2 focus:outline-offset-2 hover:outline-1">
								<p className="flex-1 text-left mobile:text-sm laptop:text-md pr-1">Prediction Price:</p>
								<input
									className="flex-1 text-right mobile:text-sm laptop:text-md mobile:w-[10%] appearance-none focus:none focus:outline-none"
									name="Amount"
									id="amount"
									type="number"
									placeholder="$375"
									// onChange={() => CalculateTotal()}
									required
								/>
							</div>

							<button
								type="submit"
								id="mint"
								className="w-full font-medium mb-6 text-xl py-4 text-white bg-[#0C1615] rounded-[80px] hover:opacity-60"
							>
								Submit
							</button>
							<div className='pt-5'>
							<h1 className='font-bold'>Current Resell Price:
								<span className='bg-[#ACFF00] py-2 px-3 rounded-full ml-2 text-sm font-normal'>${s1?.estimatedMarketValue}</span>
							</h1>
							</div>
						</div>
						
					</div>
				</div>
				<div className='flex flex-col justify-center w-full space-y-4 laptop:w-[60%] laptop:space-y-4 '>
					<div className='bg-white rounded-lg font-SG p-6 flex-1 flex justify-center items-center border-[1px] border-[#0C1615] '>

						{e1 === "" ? (
							<React.Fragment>
								<Skeleton variant="rectangular" className={'h-[260px]'} />
							</React.Fragment>
						) : (
							<>
								<div className="flex mobile:flex-col mobile:space-y-4 tablet:flex-row bg-white rounded-lg tablet:px-4 tablet:space-x-4 tablet:space-y-0 justify-center items-center">
									<img
										src="/prizes.svg"
										className="object-cover mobile:w-[100%] tablet:w-[40%] m-auto h-auto rounded-lg hover:animate-spin"
									/>
									<p className='px-4 '>How to Play<ul className='space-y-3 pt-4'><li>
                  1.) Select a market in the Live Markets tab to place a wager on.
                  </li>
                  <li>
                  2.) Choose either YES or NO to represent which side you are on.
                  </li>
                  <li>
                  3.) Select how many tickets you want to buy and submit your transaction! </li></ul></p>

								</div>

							</>
						)}
					</div>
					<div className='bg-white rounded-lg font-SG p-6 flex-1 flex justify-center items-center border-[1px] border-[#0C1615] '>
						<FreePlayGraph />
					</div>
				</div>

			</div>


			<grid className="bg-white w-full grid  text-[#0C1615] grid-rows-[repeat(16, minmax(0, 1fr))]  grid-cols-2 flex justify-center rounded-xl border-[1px] border-[#0C1615]">

				<div className="col-span-2 row-span-6 text-left px-6 py-10">
					<p className="text-xl font-medium font-SG py-4">
						Product Description
					</p>
					{s1?.story}
				</div>

				<div className="col-span-1 row-span-3 border-t-[1px] border-[#0C1615] text-left px-6 py-3 border-r-[1px]">
					<p className="py-2">Shoe information</p>
					<p className="text-xs"> Release Date</p>
					<p>{s1?.releaseDate}</p>
				</div>
				<div className="col-span-1 row-span-3 border-t-[1px] border-[#0C1615] text-left px-6 py-3 ">
					<p className="py-2">Market information</p>
					<p className="text-xs"> Release Date</p>
					<p>10-23-2022</p>
				</div>
				<div className="col-span-1 row-span-2 border-t-[1px] border-[#0C1615] bg-[#DCDEE1] text-left px-6 py-3 border-r-[1px]">
					<p className="text-xs"> Sku </p>
					<p>{s1?.sku}</p>
				</div>
				<div className="col-span-1 row-span-2 border-t-[1px] border-[#0C1615] bg-[#DCDEE1] text-left px-6 py-3 ">
					<p className="text-xs"> Closes </p>
					<p>10-28-2022</p>
				</div>
				<div className="col-span-1 row-span-2 border-t-[1px] border-[#0C1615] bg-[#DCDEE1] text-left px-6 py-3 border-r-[1px] rounded-bl-xl">
					<p className="text-xs"> Retail price </p>
					<p>${s1?.retailPrice}</p>
				</div>
				<div className="col-span-1 row-span-2 border-t-[1px] border-[#0C1615] bg-[#DCDEE1] text-left px-6 py-3 rounded-br-xl">
					<p className="text-xs"> Estimated resell price</p>
					<p>${s1?.estimatedMarketValue}</p>
				</div>



			</grid>

		</React.Fragment>
	)
}
