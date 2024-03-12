import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import '../styles/Testimonials.css'

const Testimonials = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [currentActive, setCurrentActive] = useState(0)
	const testimSpeed = 4500
	let testimTimer
	let touchStartPos
	let touchEndPos
	let touchPosDiff
	const ignoreTouch = 30

	useEffect(() => {
		const testim = document.getElementById('testim')
		const testimDots = Array.prototype.slice.call(document.getElementById('testim-dots').children)
		const testimContent = Array.prototype.slice.call(document.getElementById('testim-content').children)
		const testimLeftArrow = document.getElementById('left-arrow')
		const testimRightArrow = document.getElementById('right-arrow')

		function playSlide(slide) {
			for (let k = 0; k < testimDots.length; k++) {
				testimContent[k].classList.remove('active')
				testimContent[k].classList.remove('inactive')
				testimDots[k].classList.remove('active')
			}

			if (slide < 0) {
				slide = setCurrentSlide(testimContent.length - 1)
			}

			if (slide > testimContent.length - 1) {
				slide = setCurrentSlide(0)
			}

			if (currentActive !== currentSlide) {
				testimContent[currentActive].classList.add('inactive')
			}
			testimContent[slide].classList.add('active')
			testimDots[slide].classList.add('active')

			setCurrentActive(currentSlide)

			clearTimeout(testimTimer)
			testimTimer = setTimeout(() => {
				playSlide(setCurrentSlide(currentSlide + 1))
			}, testimSpeed)
		}

		testimLeftArrow.addEventListener('click', () => {
			playSlide(setCurrentSlide(currentSlide - 1))
		})

		testimRightArrow.addEventListener('click', () => {
			playSlide(setCurrentSlide(currentSlide + 1))
		})

		for (let l = 0; l < testimDots.length; l++) {
			testimDots[l].addEventListener('click', function () {
				playSlide(setCurrentSlide(testimDots.indexOf(this)))
			})
		}

		playSlide(currentSlide)

		// Keyboard shortcuts
		document.addEventListener('keyup', (e) => {
			switch (e.keyCode) {
				case 37:
					testimLeftArrow.click()
					break

				case 39:
					testimRightArrow.click()
					break

				default:
					break
			}
		})

		testim.addEventListener('touchstart', (e) => {
			touchStartPos = e.changedTouches[0].clientX
		})

		testim.addEventListener('touchend', (e) => {
			touchEndPos = e.changedTouches[0].clientX
			touchPosDiff = touchStartPos - touchEndPos

			if (touchPosDiff > 0 + ignoreTouch) {
				testimLeftArrow.click()
			} else if (touchPosDiff < 0 - ignoreTouch) {
				testimRightArrow.click()
			} else {
				return
			}
		})
	}, [])

	return (
		<section id="testimonials" className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6 ">
			<h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">Testimonials</h2>
			<div id="testim" className="testim">
				<div className="wrap">
					<span id="right-arrow" className="arrow right fa fa-chevron-right">
						<FontAwesomeIcon icon={faChevronRight} />
					</span>
					<span id="left-arrow" className="arrow left fa fa-chevron-left">
						<FontAwesomeIcon icon={faChevronLeft} />
					</span>
					<ul id="testim-dots" className="dots">
						<li className="dot active"></li>
						<li className="dot"></li>
						<li className="dot"></li>
					</ul>
					<div id="testim-content" className="cont">
						<div className="active">
							<h2>&#8212;Wile E. Coyote, Genius</h2>
							<p className="dark:Acme">"Acme has always been there for me. Their Explorer rocket arrived in a wooden crate as expected. Life-long customer! A++ shopping experience."</p>
						</div>

						<div className=''>
							<h2>&#8212;Marvin The Martian &amp; K-9</h2>
							<p className="dark:Acme">
								"The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator on several occassions.
								<span className="italic">This makes me very, very angry!</span>
								Nevertheless, K-9 and I have awarded Acme the Martian contract for space exploration rockets based on Acme's quality and sturdy designs."
							</p>
						</div>

						<div>
							<h2>&#8212;Buzz Lightyear</h2>
							<p className="dark:Acme">
								"I knew I not only wanted &#8212;
								<span className="italic">I needed</span> &#8212; Acme's Infinity Rocket for my mission in space. Acme delivered in one day! Nothing says <q className="italic">Take me to your leader</q> like Acme's Infinity Rocket! 💯"
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
