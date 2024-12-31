import logo from '@/assets/images/oof-logo.png'
import profileImage from '@/assets/images/profile.png'
import NavIcon from '@/components/NavIcon'
import BookmarkIcon from '@/components/icons/Bookmark'
import FriendsIcon from '@/components/icons/Friends'
import InboxIcon from '@/components/icons/Inbox'
import LogoutIcon from '@/components/icons/Logout'
import RequestsIcon from '@/components/icons/Requests'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
	const [hoveredIcon, setHoveredIcon] = useState(null)
	const location = useLocation()

	const navIcons = [
		{ href: '/login', Icon: LogoutIcon, name: 'logout' },
		{ href: '/friends', Icon: FriendsIcon, name: 'friends' },
		{ href: '/messages', Icon: InboxIcon, name: 'inbox' },
	]

	const rightNavIcons = [
		{ href: '/bookmark', Icon: BookmarkIcon, name: 'bookmark' },
		{ href: '/requests', Icon: RequestsIcon, name: 'requests' },
	]

	return (
		<nav className="w-full bg-dark-glassmorphism-30 border-xs border-secondary-silver rounded-custom-s blur-76 backdrop-blur-76">
			<ul className="flex items-center justify-between py-6 px-8 gap-3 md:gap-6">
				<div className="leftIcons flex items-center justify-center gap-3 md:gap-6">
					{navIcons.map((icon) => (
						<NavIcon
							key={icon.name}
							href={icon.href}
							IconComponent={icon.Icon}
							iconName={icon.name}
							hoveredIcon={hoveredIcon}
							setHoveredIcon={setHoveredIcon}
							isActive={location.pathname === icon.href}
						/>
					))}
				</div>
				<li className="hidden md:block">
					<img src={logo} alt="Logo" width={'125px'} />
				</li>
				<div className="rightIcons flex items-stretch justify-center gap-3 md:gap-6">
					{rightNavIcons.map((icon) => (
						<NavIcon
							key={icon.name}
							href={icon.href}
							IconComponent={icon.Icon}
							iconName={icon.name}
							hoveredIcon={hoveredIcon}
							setHoveredIcon={setHoveredIcon}
							isActive={location.pathname === icon.href}
						/>
					))}
					<li>
						<a href="/profile">
							<div className="w-11 h-11 flex items-center justify-center rounded-custom-xs">
								<img
									src={profileImage}
									alt="Profile"
									className="w-full h-full object-cover rounded-custom-xs"
								/>
							</div>
						</a>
					</li>
				</div>
			</ul>
		</nav>
	)
}

export default Navbar
