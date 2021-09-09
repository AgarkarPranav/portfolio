import './Styles/navbar.css';
import './Styles/main.css';
import React, {useState, useEffect} from 'react'

function Navbar() {

	const [navbar,setNavbar] = useState(false);

	const changeBackground = () => {
		if(window.scrollY >= 40){
			setNavbar(true)
		}else{
			setNavbar(false)
		}
	}

	window.addEventListener('scroll', changeBackground)

  return (
	<div className="Navbar">
		<nav className={navbar ? 'navbar isactive fixed-top p-0.5 m-8 rounded-lg navbar-expand-lg navbar-dark bg-gray-600 shadow-md hover:shadow-2xl transition duration-300 ease-in-out' : 'navbar fixed-top p-0.5 m-8 rounded-lg navbar-expand-lg navbar-dark bg-gray-700 shadow-md hover:shadow-2xl transition duration-300 ease-in-out'} >
		  <div className="container-fluid">
			<a className="navbar-brand text-white navbar-brand-centered" href="http://localhost:3000/#">Navbar</a>
			<button className="navbar-toggler p-1" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			  <span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item">
				  <a className={navbar ? 'nav-link p-1 active text-white text-center m-1 bg-gray-700 rounded-md': 'nav-link p-1 active text-white text-center m-1 bg-gray-600 rounded-md'} aria-current="page" href="http://localhost:3000/#">Home</a>
				</li>
				<li className="nav-item">
					<a className="nav-link p-1 text-white m-1 bg-gray-600 text-center rounded-md" href="http://localhost:3000/#">Link</a>
				  </li>
	  			</ul>
			</div>
		  </div>
	  </nav>
	</div>
  );
}

export default Navbar;
