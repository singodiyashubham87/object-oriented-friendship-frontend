import userAvatar from '@/assets/images/userAvatar.png'
import LocationIcon from '@/components/icons/Location'
import MessageIcon from '@/components/icons/Message'
import { friendsData } from '@/pages/Friends/data/friends'
import React from 'react'
import { Tooltip } from 'react-tooltip'

const Friends = () => {
	return (
		<div className="flex-grow flex flex-col justify-center items-center gap-8 w-full h-11/12 bg-dark-glassmorphism-30 border-xs border-secondary-silver rounded-custom-s overflow-y-auto overflow-x-hidden px-6 py-6">
			<div className="flex justify-center">
				<h2 className="text-4xl text-primary-silver font-bold uppercase">
					Friends
				</h2>
			</div>
			<div className="w-full px-4 py-2 grid grid-cols-1 msm:grid-cols-2 sm:grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-5 overflow-y-auto overflow-x-hidden">
				{friendsData.map((friend, index) => (
					<div
						key={friend.id}
						className="flex flex-col gap-2 items-center justify-stretch bg-dark-glassmorphism-70 rounded-custom-xs p-4 shadow-lg border-2 border-gray-30"
					>
						<div className="w-24 border-2 border-gray-30 overflow-hidden rounded-full">
							<img
								src={userAvatar}
								alt="user-avatar"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex flex-col items-center gap-1">
							<div className="relative group text-center">
								{friend.name.length > 7 ? (
									<>
										<p
											className="text-primary-silver text-base font-semibold truncate max-w-[100px] text-center"
											data-tooltip-id={`tooltip-${index}`}
										>
											{friend.name.length > 7
												? `${friend.name.slice(0, 7)}...`
												: friend.name}
										</p>
										<Tooltip id={`tooltip-${index}`} place="top" effect="solid">
											{friend.name}
										</Tooltip>
									</>
								) : (
									<span className="text-primary-silver text-base font-semibold text-center">
										{friend.name}
									</span>
								)}
								<div className="flex items-center gap-1">
									<LocationIcon />
									<p className="text-secondary-silver text-sm uppercase font-primary font-semibold">
										{friend.location}
									</p>
								</div>
							</div>
							<div className="flex gap-2 items-center bg-primary-silver-50 text-primary-dark px-4 py-1 rounded-custom-xs hover:bg-secondary-silver cursor-pointer">
								<button
									type="button"
									className="uppercase text-base font-primary font-semibold"
								>
									Message
								</button>
								<MessageIcon size={16} />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Friends
