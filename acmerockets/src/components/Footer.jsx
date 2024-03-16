import { faGithub, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-8">
			<div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
				<div className="footer-sec1 mb-6 md:mb-0">
					<h1 className="text-xl font-bold">AcmeRockets</h1>
					<p className="mt-2 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam id nostrum eveniet, ut, officiis fugiat fuga aspernatur maxime saepe temporibus, doloremque necessitatibus vero inventore nobis!</p>
					<div className="mt-4 flex space-x-4">
						<a href="#" className="text-white">
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a href="#" className="text-white">
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a href="#" className="text-white">
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
						<a href="#" className="text-white">
							<FontAwesomeIcon icon={faWhatsapp} />
						</a>
					</div>
				</div>
				<div className="footer-sec2 mb-6 md:mb-0">
					<h2 className="text-xl font-bold mb-2 text-white">Links</h2>
					<ul>
						<li>
							<a href="#" className="text-gray-400 hover:text-white">
								- MIT LICENSE
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-400 hover:text-white">
								- Code of Conduct
							</a>
						</li>
						<li>
							<a href="#rockets" className="text-gray-400 hover:text-white">
								- Our Rockets
							</a>
						</li>
						<li>
							<a href="#contact" className="text-gray-400 hover:text-white">
								- Contact Us
							</a>
						</li>
						<li>
							<a href="#testimonials" className="text-gray-400 hover:text-white">
								- Testimonials
							</a>
						</li>
					</ul>
				</div>
				<div className="footer-sec3">
					<h2 className="text-xl font-bold mb-2 text-white">Location</h2>
					<div className="content">
						<p className="text-gray-400">
							Acme Rocket-Powered Products, Inc. <br />
							555 Astro Way
							<br />
							Fairfield, New Jersey 12345-5555
						</p>
						<p className="text-gray-400">☎️ (555) 555-5555</p>
						<p className="text-gray-400">📧 inquiries@acmerockets.com</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
