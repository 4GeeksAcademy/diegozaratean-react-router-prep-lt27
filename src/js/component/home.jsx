import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from './about'
import Service from "./service";
import Contact from "./contact";
import Header from "./header";

const Home = () => {
	const [texto,setTexto] = useState('inicial')
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<About />}/>
					<Route path="/servicios" element={<Service />}/>
					<Route path="/cont" element={<Contact />}/>
				</Routes>
				<h3>footer</h3>
				<button onClick={()=>setTexto('modficado')}>cambiar texto</button>
				<p>{texto}</p>
			</BrowserRouter>
		</>
	);
};

export default Home;
