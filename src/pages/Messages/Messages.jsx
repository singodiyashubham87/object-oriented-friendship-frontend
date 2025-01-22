import MessageIcon from '@/components/icons/MessageIcon'
import React, { useState } from 'react'
import { chatData, message } from './data/chatAndMessages'

const Messages = () => {
	const [selectedChatIndex, setSelectedChatIndex] = useState(0)
	return (
		<div className="flex-grow flex flex-col justify-between items-center gap-8 w-full h-full bg-dark-glassmorphism-30 border-xs border-secondary-silver rounded-custom-s overflow-hidden px-6 py-6">
			<div className="flex justify-center">
				<h2 className="text-4xl text-primary-silver font-bold uppercase">
					Messages
				</h2>
			</div>
			<div className="w-full p-4 flex-1 flex justify-between items-stretch gap-4 overflow-hidden border-sm border-secondary-silver rounded-custom-s">
				<div className="chatListSidebar w-1/3 flex flex-col gap-2 overflow-y-auto p-4 rounded-custom-s">
					{chatData?.map((chat, index) => {
						const isChatSelected = selectedChatIndex === index

						return (
							// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<div
								className={`flex border-sm p-4 gap-4 rounded-custom-s cursor-pointer ${
									isChatSelected
										? 'bg-primary-silver border-secondary-dark'
										: 'bg-dark-glassmorphism-50 border-primary-silver'
								}`}
								key={chat.id}
								onClick={() => setSelectedChatIndex(index)}
							>
								<img
									src={chat.avatarUrl}
									alt="user_profile"
									className="w-12 h-12 border-xs border-primary-dark rounded-full"
								/>
								<div className="chatSlotContent">
									<h6
										className={`${
											isChatSelected
												? 'text-secondary-dark'
												: 'text-primary-silver'
										} font-semibold`}
									>
										{chat.name?.length > 15
											? chat.name.slice(0, 15)
											: chat.name}
									</h6>
									<span
										className={`text-sm opacity-80 ${
											isChatSelected
												? 'text-secondary-dark'
												: 'text-primary-silver'
										}`}
									>
										{`${chat.bio.slice(0, 16).trim()}${
											chat.bio.length > 16 ? '...' : ''
										}`}
									</span>
								</div>
							</div>
						)
					})}
				</div>
				<div className="messageContent w-2/3 flex flex-col justify-between p-4 bg-dark-glassmorphism-50 border-sm border-secondary-silver rounded-custom-s">
					<div className="chats overflow-y-auto flex flex-col gap-2">
						{message?.map((msg) =>
							msg.isSentByMe ? (
								<div
									className="self-end flex gap-2 items-center max-w-[90%]"
									key={msg.id}
								>
									<p className="text-right py-1 px-4 bg-dark-cyan-70 rounded-custom-s">
										{msg.content}
									</p>
									<img
										src={
											'https://raw.githubusercontent.com/singodiyashubham87/imageHoster/refs/heads/main/userAvatar.png'
										}
										alt="user_profile"
										className="w-8 h-8 border-xs border-primary-dark rounded-full"
									/>
								</div>
							) : (
								<div
									className="self-start flex gap-2 items-center max-w-[90%]"
									key={msg.id}
								>
									<img
										src={
											'https://raw.githubusercontent.com/singodiyashubham87/imageHoster/refs/heads/main/userAvatar.png'
										}
										alt="user_profile"
										className="w-8 h-8 border-xs border-primary-dark rounded-full"
									/>
									<p className="text-left py-1 px-4 bg-secondary-silver-70 rounded-custom-s">
										{msg.content}
									</p>
								</div>
							),
						)}
					</div>
					<div className="draftAndSendMessage flex justify-between items-stretch gap-2">
						<input
							type="text"
							name="message"
							id="messsage"
							placeholder="Type a message..."
							className="w-full pr-2 pl-4 py-1 rounded-custom-s outline-none bg-dark-glassmorphism-30 border-2 border-primary-gray text-primary-silver"
						/>
						<div className="p-1 px-2 rounded-custom-s border-2 border-secondary-silver flex items-center cursor-pointer bg-secondary-silver hover:bg-secondary-dark">
							<MessageIcon size={16} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Messages
