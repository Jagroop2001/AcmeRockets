import './styles/App.css'
import { Navbar, AppRouter, Footer } from './components'

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<AppRouter />
			<Footer />
		</div>
	)
}

export default App
