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
	transition: all 0.4s;
	&:focus-within {
		outline: 1px solid #d3dbee;
	}
`;

const StyledSearch = styled.input`
	width: 100%;
	font-family: 'Poppins', sans-serif;
	border: none;

	&::placeholder {
		color: #d8d8d8;
		font-family: 'Poppins', sans-serif;
		letter-spacing: 0.5px;
	}
	&:focus {
		outline: none;
	}
`;

const StyledButton = styled.button`
	border: none;
	border-radius: 15px;
	color: white;
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	background-color: #849fff;
	width: 100px;
	height: 50px;
	cursor: pointer;
`;

export { StyledNav, StyledSearchContainer, StyledSearch, StyledButton };
