import { useEffect, useState } from 'react'
import '../styles/Contributors.css'

async function fetchContributors() {
	try {
		const response = await fetch(`https://api.github.com/repos/Jagroop2001/AcmeRockets/contributors`)
		if (!response.ok) {
			throw new Error('Request Failed!')
		}
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error.message)
		return []
	}
}

const Contributors = () => {
	const [contributors, setContributors] = useState([])

	useEffect(() => {
		fetchContributors()
			.then((contributors) => setContributors(contributors))
			.catch((error) => console.log(error.message))
	}, [])

	return (
		<div className="contributors-container dark:bg-white bg-black">
			<h2>Contributors</h2>
			<ul id="contributors-list">
				{contributors.map((contributor) => (
					<li key={contributor.id} className="flex flex-col items-center">
						<a href={contributor.html_url} target="_blank">
							<img className="contributor-image" src={contributor.avatar_url} alt={contributor.login} width="100" height="100" />
						</a>
						<p>{contributor.login}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Contributors
