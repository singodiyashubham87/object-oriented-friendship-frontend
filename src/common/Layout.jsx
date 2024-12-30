import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
	return (
		<div className="relative flex flex-col gap-[3.125rem] py-[3.125rem] items-center justify-center min-h-screen bg-dark bg-kali bg-center bg-blend-darken">
			<Navbar />
			<Outlet />
		</div>
	)
}

export default Layout
