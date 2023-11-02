// App.tsx
//react-router-domで使うものをimportする
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//切り替え先のcomponentをimportする
import { Login } from './components/login'
import { SampleB } from './components/sampleB'
import { SampleC } from './components/sampleC'
import { SampleD } from './components/sampleD'

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/sampleb" element={<SampleB />} />
					<Route path="/samplec" element={<SampleC />} />
					<Route path="/sampled" element={<SampleD />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
export default App
