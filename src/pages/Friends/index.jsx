import React from 'react'
import { Tooltip } from 'react-tooltip'

const friendsData = [
	{
		id: 1,
		name: 'Shubham',
		location: 'Bengaluru',
		image: '/path/to/image1.jpg',
	},
	{
		id: 2,
		name: 'Master',
		location: 'Bengaluru',
		image: '/path/to/image2.jpg',
	},
	{
		id: 3,
		name: 'Mickey',
		location: 'Bengaluru',
		image: '/path/to/image3.jpg',
	},
	{
		id: 4,
		name: 'Singodiya',
		location: 'Bengaluru',
		image: '/path/to/image4.jpg',
	},
	{
		id: 5,
		name: 'Anonymo.',
		location: 'Bengaluru',
		image: '/path/to/image5.jpg',
	},
	{ id: 6, name: 'Radha', location: 'Bengaluru', image: '/path/to/image6.jpg' },
	{ id: 7, name: 'Krsna', location: 'Bengaluru', image: '/path/to/image7.jpg' },
	{
		id: 8,
		name: 'Shree Ji',
		location: 'Bengaluru',
		image: '/path/to/image8.jpg',
	},
	{
		id: 9,
		name: 'Kanuda',
		location: 'Bengaluru',
		image: '/path/to/image9.jpg',
	},
	{
		id: 10,
		name: 'Premswaroopa',
		location: 'Bengaluru',
		image: '/path/to/image10.jpg',
	},
]

const truncateName = (name) => {
	if (name.length > 7) {
		return `${name.slice(0, 7)}...`
	}
	return name
}

const Friends = () => {
	return (
		<div className="flex-grow flex justify-center items-center w-3/4 h-full bg-dark-glassmorphism border-2 border-secondary-silver rounded-custom-s">
			<div className="w-full px-6 py-4">
				<div className="flex justify-center mb-4">
					<h2 className="text-xl text-primary-silver font-bold">Friends</h2>
				</div>
				<div className="grid grid-cols-5 gap-6">
					{friendsData.map((friend, index) => (
						<div
							key={friend.id}
							className="flex flex-col items-center bg-secondary-dark rounded-custom-xs p-4 shadow-lg border border-secondary-silver"
						>
							<img
								src={friend.image}
								alt={friend.name}
								className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-secondary-silver"
							/>
							<div className="relative group">
								<p
									className="text-primary-silver text-md font-semibold truncate max-w-[100px] text-center"
									data-tooltip-id={`tooltip-${index}`}
								>
									{truncateName(friend.name)}
								</p>
								<Tooltip id={`tooltip-${index}`} place="top" effect="solid">
									{friend.name}
								</Tooltip>
							</div>
							<p className="text-secondary-silver text-sm">{friend.location}</p>
							<button
								type="button"
								className="mt-3 bg-primary-silver text-secondary-dark px-4 py-2 rounded-custom-xs hover:bg-secondary-silver"
							>
								Message
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Friends
