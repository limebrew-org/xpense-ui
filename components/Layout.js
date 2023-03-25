import Navbar from "./Navbar"

export default function Layout({ children }) {
	return (
		<div className="mx-14">
			<Navbar />
			<main>{children}</main>
		</div>
	)
}