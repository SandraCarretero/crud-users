import { URLS } from '../../constants/urls';
import { patchData } from '../../utils/api';
import {
	StyledForm,
	StyledFormInput,
	StyledFormSubmit,
	StyledInputRadio
} from './edit-user-form.styles';

const EditUserForm = ({
	setUsers,
	newUser,
	setNewUser,
	setEditUserMenu,
	editUser
}) => {
	if (!newUser.gender) {
		setNewUser({ ...newUser, gender: editUser.gender });
	}

	return (
		<StyledForm
			onSubmit={e =>
				handleSubmit(e, setUsers, newUser, setEditUserMenu, editUser)
			}
		>
			<StyledFormInput
				onChange={e =>
					setNewUser({ ...newUser, name: e.target.value || editUser.name })
				}
				type='text'
				placeholder='Name'
				defaultValue={editUser.name}
			/>
			<StyledFormInput
				onChange={e =>
					setNewUser({ ...newUser, nick: e.target.value || editUser.nick })
				}
				type='text'
				placeholder='Username'
				defaultValue={editUser.nick}
			/>
			<div>
				<StyledInputRadio
					onChange={() => setNewUser({ ...newUser, gender: 'men' })}
					type='radio'
					name='gender'
					checked={newUser.gender === 'men'}
				/>
				<label>Man</label>
				<StyledInputRadio
					onChange={() => setNewUser({ ...newUser, gender: 'women' })}
					type='radio'
					name='gender'
					checked={newUser.gender === 'women'}
				/>
				<label>Woman</label>
			</div>

			<StyledFormSubmit type='submit' value='EDIT USER' />
		</StyledForm>
	);
};

const handleSubmit = async (
	event,
	setUsers,
	newUser,
	setEditUserMenu,
	user
) => {
	event.preventDefault();
	try {
		const data = await patchData(URLS.USER_API + user.userId, newUser);
		setUsers(data);
	} catch (err) {
		console.error(err);
	}
	setEditUserMenu(false);
};

export default EditUserForm;
