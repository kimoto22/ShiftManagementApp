import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import App from './App'

export const RouterConfig = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
