import { useState } from 'react';
import Nav from '../Nav/Nav';
import UsersList from '../UsersList/UsersList';
import { SytledMainContainer } from './main-container.styles';
import NewUserForm from '../NewUserForm/NewUserForm';
import EditUserForm from '../EditUserForm/EditUserForm';

const MainContainer = () => {
	const [users, setUsers] = useState([]);
	const [newUserMenu, setNewUserMenu] = useState(false);
	const [editUserMenu, setEditUserMenu] = useState(false);
	const [editUser, setEditUser] = useState();
	const [newUser, setNewUser] = useState({ name: '', nick: '', gender: 'men' });

	return (
		<SytledMainContainer>
			<Nav newUserMenu={newUserMenu} setNewUserMenu={setNewUserMenu} />
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
				users={users}
				setUsers={setUsers}
				editUserMenu={editUserMenu}
				setEditUserMenu={setEditUserMenu}
				setEditUser={setEditUser}
			/>
		</SytledMainContainer>
	);
};

export default MainContainer;
