import styled from 'styled-components';

const StyledUserList = styled.section`
	width: 100%;
	display: grid;
	align-self: center;
	grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
	gap: 25px;
`;

const StyledRow = styled.div`
	display: flex;
	flex-direction: row;
	gap: 38px;
	align-items: flex-start;
`;

const StyledUser = styled.article`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	background-color: white;
	width: 100%;
	height: 200px;
	border-radius: 18px;
	text-align: center;
	padding: 20px;
	box-shadow: 1px 1px 5px 1px #f3f3f3;
	transition: all 0.4s;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			outline: 1px solid #d3dbee;
		}
	}
`;

const StyledUserImg = styled.div`
	width: 35%;
	border-radius: 50%;
	border: 1px solid lightgray;
	overflow: hidden;
`;

const StyledUserNameContainer = styled.div`
	width: 65%;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const StyledUserName = styled.p`
	font-size: 18px;
	font-weight: 800;
	margin: 0;
	text-align: left;
`;

const StyledUserNick = styled.p`
	font-size: 13px;
	color: gray;
	margin: 0;
`;

const StyledCharacteristicsContainer = styled.div`
	margin-top: 10px;
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
`;
const StyledCharacteristics = styled.div`
	border: 1px solid #849fff;
	color: #849fff;
	border-radius: 10px;
	padding: 2px 5px;
	font-size: 12px;
`;

const StyledActionContainer = styled.div`
	width: 102px;
	display: flex;
	justify-content: center;
	gap: 0.5rem;
`;

const StyledIcon = styled.img`
	cursor: pointer;
	width: 25%;
`;

export {
	StyledUserList,
	StyledRow,
	StyledUser,
	StyledUserNameContainer,
	StyledUserName,
	StyledUserNick,
	StyledUserImg,
	StyledCharacteristicsContainer,
	StyledCharacteristics,
	StyledActionContainer,
	StyledIcon
};
