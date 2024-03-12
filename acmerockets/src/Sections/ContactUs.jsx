import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const ContactUs = () => {
	return (
		<section id="contact-us" className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6 antialiased">
			<div className="flex min-h-screen w-full items-center justify-center">
				<div className="flex w-full max-w-4xl flex-col space-y-6 overflow-hidden rounded-xl bg-teal-700 p-8 text-white shadow-lg sm:p-12 md:flex-row md:space-x-6 md:space-y-0">
					<div className="flex flex-col justify-between space-y-8">
						<div>
							<h1 className="mb-6 text-center text-4xl font-bold sm:text-5xl text-white">Contact Us</h1>
							<p className="text-md text-slate-200">Feel Free to drop us a message with any inquiries or feedback.We're here to assist you!</p>
						</div>
						<div className="flex flex-col space-y-6">
							<div className="text-md inline-flex items-center space-x-2">
								<FontAwesomeIcon icon={faPhone} className=" text-teal-400" />
								<span>+ (555) 555-5555 </span>
							</div>
							<div className="text-md inline-flex items-center space-x-2">
								<FontAwesomeIcon icon={faEnvelope} className=" text-teal-400" />
								<span>Inquires@AcmeRockets.com</span>
							</div>
							<div className="text-md inline-flex items-center space-x-2">
								<FontAwesomeIcon icon={faLocationDot} className=" text-teal-400" />
								<span>Inc. 555 Astro Way Fairfield, New Jersey</span>
							</div>
						</div>
						<div className="gap-2 flex">
							<a href="#">
								<FontAwesomeIcon icon={faFacebookSquare} className="text-2xl hover:text-cyan-200 text-white" />
							</a>
							<a href="#">
								<FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-cyan-200 text-white" />
							</a>
							<a href="#">
								<FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-cyan-200 text-white" />
							</a>
							<a href="#">
								<FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-cyan-200 text-white" />
							</a>
						</div>
					</div>
					<div className="relative">
						<div className="absolute -right-28 -top-28 z-0 h-40 w-40 rounded-full bg-teal-400" />
						<div className="absolute -bottom-16 -left-28 z-0 h-40 w-40 rounded-full bg-teal-400" />
						<div className="relative z-1 rounded-xl bg-white p-8 text-gray-600 shadow-lg md:w-80 flex ">
							<form action="" className="flex flex-col space-y-4 m-0 bg-white shadow-none p-0">
								<div>
									<label htmlFor="" className="text-sm">
										Your name
									</label>
									<input type="text" placeholder="Your name" className="bg-white w-full rounded-md px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-teal-600" />
								</div>
								<div>
									<label htmlFor="" className="text-sm">
										Email Address
									</label>
									<input type="email" placeholder="Your Email" className="bg-white  w-full rounded-md px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-teal-600" />
								</div>
								<div>
									<label htmlFor="" className="text-sm">
										Mobile Number
									</label>
									<input type="phone" placeholder="Your number" rows="4" className="bg-white w-full rounded-md px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-teal-600" />
								</div>
								<div>
									<label htmlFor="" className="text-sm">
										Message
									</label>
									<textarea type="phone" placeholder="Your message" className="bg-white w-full rounded-md px-4 py-2 outline-none ring-1 ring-gray-300 focus:ring-teal-600" />
								</div>
								<button className="inline-block self-end rounded-lg bg-teal-700 px-6 py-2 text-sm font-bold uppercase text-white">Send</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactUs
