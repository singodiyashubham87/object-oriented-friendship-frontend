// import { ReactComponent as LogoutIcon } from "@/assets/images/logout.svg";
import logo from '@/assets/images/oof-logo.png'

const Navbar = () => {
	return (
		<nav className="w-3/4 bg-dark-glassmorphism border-2 border-primary-silver rounded-custom-s">
			<ul className="flex gap-4 items-center justify-center">
				<li>{/* <LogoutIcon /> */}</li>
				<li>
					<a href="/friends">Friends</a>
				</li>
				<li>
					<a href="/messages">Messages</a>
				</li>

				<li>
					<img src={logo} alt="logo" width={'148px'} height={'60px'} />
				</li>
				<li>
					<a href="/bookmark">Bookmark</a>
				</li>
				<li>
					<a href="/requests">Requests</a>
				</li>
				<li>
					<a href="/profile">Profile</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
