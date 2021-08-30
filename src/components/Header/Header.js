import "./Header.scss"
const Header = () => {
	return (
				// function onclick kab thti nab laeli tmelsena // scroll-behavier :smoosth "kes eliu kem smles ygebre ab app.scss"
			<span onClick={()=> window.scroll(0, 0)} className="header">Entertaiment hub</span>
		
	);
};

export default Header;
