import { useState } from 'react'

const Navbar = () => {
	const [dark, setDark] = useState(false)

	return (
		<header className="sticky top-0 z-10 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
			<section className="mx-auto flex items-center justify-between p-6">
				<a href="/" className="text-white">
					🚀 Acme Rockets
				</a>
				<div className="menu flex items-center">
					<button id="hamburger-button" className="block md:hidden focus:outline-none">
						<svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
						</svg>
					</button>
					<nav className="hidden md:flex space-x-4 text-base items-center h-1">
						<a className="text-white" href="/#about-us">
							About Us
						</a>
						<a className="text-white" href="/#our-rockets">
							Our Rockets
						</a>
						<a className="text-white" href="/#testimonials">
							Testimonials
						</a>
						<a className="text-white" href="/#contact-us">
							Contact Us
						</a>
						<a className="text-white" href="/rateus">
							Rate Us
						</a>
						<a className="text-white" href="/contributors">
							Contributors
						</a>
						<a className="text-white" href="/feedback">
							Feedback
						</a>
						<button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" onClick={() => setDark(!dark)}>
							{dark ? (
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
								</svg>
							) : (
								<svg className="w-5 h-5" fill="currentColor" id="theme-toggle-light-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
								</svg>
							)}
						</button>
					</nav>
				</div>
			</section>
			<section id="mobile-menu" className="top-16 md:hidden absolute w-full bg-black text-white">
				<nav className="flex flex-col items-center py-8" aria-label="mobile">
					<a href="/#hero" className="w-full py-4 text-center hover:opacity-90">
						Home
					</a>
					<a href="/#our-rockets" className="w-full py-4 text-center hover:opacity-90">
						Our Rockets
					</a>
					<a href="/#testimonials" className="w-full py-4 text-center hover:opacity-90">
						Testimonials
					</a>
					<a href="/#contact-us" className="w-full py-4 text-center hover:opacity-90">
						Contact Us
					</a>
					<a href="#footer" className="w-full py-4 text-center hover:opacity-90">
						Legal
					</a>
				</nav>
			</section>
		</header>
	)
}

export default Navbar
