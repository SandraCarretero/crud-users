import { useEffect } from 'react';
import { URLS } from '../../constants/urls';
import { deleteData, getData } from '../../utils/api';
import {
	StyledActionContainer,
	StyledCharacteristics,
	StyledCharacteristicsContainer,
	StyledIcon,
	StyledRow,
	StyledUser,
	StyledUserImg,
	StyledUserList,
	StyledUserName,
	StyledUserNameContainer,
	StyledUserNick
} from './users-list.styles';

const UsersList = ({
	users,
	setUsers,
	editUserMenu,
	setEditUserMenu,
	setEditUser
}) => {
	useEffect(() => {
		getUsers(setUsers);
	}, []);

	return (
		<StyledUserList>
			{users.map((user, i) => (
				<StyledUser key={user.userId}>
					<StyledRow>
						<StyledUserImg>
							<img
								src={`https://randomuser.me/api/portraits/${user.gender}/${i % 100}.jpg`}
								alt={user.name}
							/>
						</StyledUserImg>

						<StyledUserNameContainer>
							<StyledUserName>{user.name}</StyledUserName>
							<StyledUserNick>@{user.nick}</StyledUserNick>
							<StyledCharacteristicsContainer>
								{user.characteristics.map((characteristic, index) => (
									<StyledCharacteristics key={index}>
										{characteristic}
									</StyledCharacteristics>
								))}
							</StyledCharacteristicsContainer>
						</StyledUserNameContainer>
					</StyledRow>
					<StyledActionContainer>
						<StyledIcon
							onClick={() => deleteUser(setUsers, user.userId)}
							src='/images/delete-icon.svg'
							alt='Delete'
						/>
						<StyledIcon
							onClick={() =>
								handleEdit(editUserMenu, setEditUserMenu, setEditUser, user)
							}
							src='/images/edit-icon.svg'
							alt='Edit'
						/>
					</StyledActionContainer>
				</StyledUser>
			))}
		</StyledUserList>
	);
};

const getUsers = async setUsers => {
	try {
		const users = await getData(URLS.USER_API);
		setUsers(users);
	} catch (err) {
		console.error(err);
	}
};

const deleteUser = async (setUsers, userId) => {
	try {
		await deleteData(`${URLS.USER_API}${userId}`);
		setUsers(prevUsers => prevUsers.filter(user => user.userId !== userId));
	} catch (err) {
		console.error(err);
	}
};

const handleEdit = (editUserMenu, setEditUserMenu, setEditUser, user) => {
	setEditUserMenu(!editUserMenu);
	setEditUser(user);
};

export default UsersList;
