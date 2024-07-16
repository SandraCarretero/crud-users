import styled from 'styled-components';

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	margin-block: 30px;
`;

const StyledSearchContainer = styled.div`
	height: 30px;
	width: 300px;
	background-color: white;
	border-radius: 4px;
	display: flex;
	justify-content: space-between;
	padding-left: 4px;
`;

const StyledSearch = styled.input`
	width: 100%;
	font-family: 'Roboto', sans-serif;
	border: none;

	&::placeholder {
		color: #d8d8d8;
		font-family: 'Roboto', sans-serif;
		letter-spacing: 0.5px;
	}
`;

const StyledButton = styled.button`
	border: none;
	border-radius: 4px;
	color: white;
	font-family: 'Roboto', sans-serif;
	font-weight: 700;
	background-color: #559ff5;
	width: 100px;
	height: 30px;
	cursor: pointer;
`;

export { StyledNav, StyledSearchContainer, StyledSearch, StyledButton };
