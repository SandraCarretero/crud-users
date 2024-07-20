import { useState } from 'react';
import Nav from '../Nav/Nav';
import UsersList from '../UsersList/UsersList';
import { SytledMainContainer } from './main-container.styles';
import NewUserForm from '../NewUserForm/NewUserForm';
import EditUserForm from '../EditUserForm/EditUserForm';
import { normalizeString } from '../../utils/normalize-strings';

const MainContainer = () => {
	const [users, setUsers] = useState([]);
	const [newUserMenu, setNewUserMenu] = useState(false);
	const [editUserMenu, setEditUserMenu] = useState(false);
	const [editUser, setEditUser] = useState();
	const [newUser, setNewUser] = useState({ name: '', nick: '', gender: 'men' });
	const [search, setSearch] = useState('');

	const filteredUsers = filterUsers(users, search);

	return (
		<SytledMainContainer>
			<Nav
				newUserMenu={newUserMenu}
				setNewUserMenu={setNewUserMenu}
				setSearch={setSearch}
			/>
			{newUserMenu && (
				<NewUserForm
					setUsers={setUsers}
					newUser={newUser}
					setNewUser={setNewUser}
					setNewUserMenu={setNewUserMenu}
				/>
			)}
			{editUserMenu && (
				<EditUserForm
					setUsers={setUsers}
					newUser={newUser}
					setNewUser={setNewUser}
					setEditUserMenu={setEditUserMenu}
					editUser={editUser}
				/>
			)}
			<UsersList
				users={filteredUsers}
				setUsers={setUsers}
				editUserMenu={editUserMenu}
				setEditUserMenu={setEditUserMenu}
				setEditUser={setEditUser}
			/>
		</SytledMainContainer>
	);
};

const filterUsers = (users, search) => {
	if (!search) return [...users];

	const searchValue = normalizeString(search.toLowerCase());

	const filteredUsers = users.filter(user => {
		const normalizedUserName = normalizeString(user.name);
		return normalizedUserName.toLowerCase().includes(searchValue);
	});

	return filteredUsers;
};

export default MainContainer;
