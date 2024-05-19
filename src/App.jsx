import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SiteRoutes from './routes/SiteRoutes'
import './App.css'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{SiteRoutes.map((route) => (
						<Route
							key={crypto.randomUUID()}
							path={route.path}
							element={route.component}
						/>
					))}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
