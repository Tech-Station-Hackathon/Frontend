import Logo from './Logo';
import NavBar from './NavBar';
import UserWidget from './UserWidget';

const Header = () => {
	return (
		<div className="container-fluid bg-light">
			<div className="row justify-content-md-center">
				<NavBar/>
				<Logo />
				<UserWidget />
			</div>
		</div>
	);
};

export default Header;