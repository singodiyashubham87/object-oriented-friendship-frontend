import userAvatar from '@/assets/images/userAvatar.png'
import LocationIcon from '@/components/icons/Location'
import MessageIcon from '@/components/icons/Message'
import { friendsData } from '@/data/friends'
import React from 'react'
import { Tooltip } from 'react-tooltip'

const truncateName = (name) => {
	if (name.length > 7) {
		return `${name.slice(0, 7)}...`
	}
	return name
}

const Friends = () => {
	return (
		<div className="flex-grow flex flex-col justify-center items-center gap-8 w-full h-11/12 bg-dark-glassmorphism-30 border-xs border-secondary-silver rounded-custom-s overflow-y-auto overflow-x-hidden px-6 py-6">
			<div className="flex justify-center">
				<h2 className="text-4xl text-primary-silver font-bold uppercase">
					Friends
				</h2>
			</div>
			<div className="w-full px-4 py-2 grid grid-cols-1 sm:grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-5 overflow-y-auto overflow-x-hidden">
				{friendsData.map((friend, index) => (
					<div
						key={friend.id}
						className="flex flex-col gap-2 items-center bg-dark-glassmorphism-70 rounded-custom-xs p-4 shadow-lg"
					>
						<img
							src={userAvatar}
							alt={'user-avatar'}
							className="w-20 h-20 rounded-full object-cover"
						/>
						<div className="flex flex-col items-center gap-1">
							<div className="relative group">
								<p
									className="text-primary-silver text-sm font-semibold truncate max-w-[100px] text-center"
									data-tooltip-id={`tooltip-${index}`}
								>
									{truncateName(friend.name)}
								</p>
								<div>
									<Tooltip id={`tooltip-${index}`} place="top" effect="solid">
										{friend.name}
									</Tooltip>
								</div>
								<div className="flex items-center gap-1">
									<LocationIcon />
									<p className="text-secondary-silver text-sm">
										{friend.location}
									</p>
								</div>
							</div>
							<div className="flex gap-2 items-center bg-primary-silver text-primary-dark font-primary font-semibold px-4 py-1 rounded-custom-xs hover:bg-secondary-silver cursor-pointer">
								<button type="button" className="uppercase text-sm">
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
