import {
	StyledNav,
	StyledButton,
	StyledSearchContainer,
	StyledSearch
} from './nav.styles';

const Nav = ({ newUserMenu, setNewUserMenu, setSearch }) => {
	
	return (
		<StyledNav>
			<StyledSearchContainer>
				<img src='/images/search-icon.svg' alt='search' />
				<StyledSearch
					type='text'
					name='name'
					onInput={event => setSearch(event.target.value)}
					placeholder='Search User...'
				/>
			</StyledSearchContainer>
			<StyledButton onClick={() => setNewUserMenu(!newUserMenu)}>
				NEW USER
			</StyledButton>
		</StyledNav>
	);
};

export default Nav;
