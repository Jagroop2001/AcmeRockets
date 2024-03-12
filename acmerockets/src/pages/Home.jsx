
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Hero, AboutUs, ContactUs, Testimonials, OurRockets } from '../Sections'
import '../styles/Home.css'

const Home = () => {
	return (
		<main className="mx-auto max-w-4xl">
			<Hero />
			<hr className="mx-auto mb-1 w-1/2 bg-black dark:bg-white" />
			<AboutUs />
			<hr className="mx-auto w-1/2 bg-black dark:bg-white" />
			<OurRockets />
			<hr className="mx-auto w-1/2 bg-black dark:bg-white" />
			<Testimonials />
			<hr className="mx-auto w-1/2 bg-black dark:bg-white" />
			<ContactUs />
			<a href="#" className="to-top-btn z-[1000]">
				<FontAwesomeIcon icon={faChevronUp} className="text-white" />
			</a>
		</main>
	)
}

export default Home
