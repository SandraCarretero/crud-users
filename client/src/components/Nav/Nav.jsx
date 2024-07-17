import {
	StyledNav,
	StyledButton,
	StyledSearchContainer,
	StyledSearch
} from './nav.styles';

const Nav = ({ newUserMenu, setNewUserMenu }) => {
	return (
		<StyledNav>
			<StyledSearchContainer>
				<img src='/images/search-icon.svg' alt='search' />
				<StyledSearch type='text' placeholder='Search User...' />
			</StyledSearchContainer>
			<StyledButton onClick={() => setNewUserMenu(!newUserMenu)}>
				NEW USER
			</StyledButton>
		</StyledNav>
	);
};

export default Nav;
