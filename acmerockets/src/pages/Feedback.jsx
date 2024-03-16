import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Feedback.css'

const Feedback = () => {
	const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

	const history = useNavigate()

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const { name, email, subject } = formData
		if (name.trim() === '' || email.trim() === '' || subject.trim() === '') {
			alert('Please fill out all required fields.')
		} else {
			// Perform your submission logic here
			history.push('/submit') // Redirect to submit page
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Feedback Form</h2>
			<p>Feel free to contact us, we will get back to you asap!</p>

			<label htmlFor="name" className="text-black pt-2">
				Name:
			</label>
			<input type="text" name="name" placeholder="John Doe" value={formData.name} className="p-2 bg-white text-black" onChange={handleChange} required />

			<label htmlFor="email" className="text-black pt-2">
				Email:
			</label>
			<input type="email" placeholder="johnDoe@email.com" name="email" value={formData.email} className="p-2 bg-white text-black" onChange={handleChange} required />

			<label htmlFor="subject" className="text-black pt-2">
				Subject:
			</label>
			<input placeholder="Subject of message" type="text" name="subject" value={formData.subject} className="p-2 bg-white text-black" onChange={handleChange} required />

			<label htmlFor="message" className="text-black pt-2">
				Message:
			</label>
			<textarea placeholder="This is your message" name="message" rows="4" value={formData.message} className="p-2 bg-white text-black" onChange={handleChange} required></textarea>

			<button type="submit" className="bg-green-500 hover:bg-green-600 text-white border-none rounded-md w-full">
				Submit
			</button>
		</form>
	)
}

export default Feedback
