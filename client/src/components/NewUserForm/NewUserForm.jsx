import { URLS } from '../../constants/urls';
import { postData } from '../../utils/api';
import {
	StyledCharacteristicButton,
	StyledCharacteristicsContainer,
	StyledForm,
	StyledFormInput,
	StyledFormSubmit,
	StyledInputRadio
} from './new-user-form.styles';

const NewUserForm = ({ setUsers, newUser, setNewUser, setNewUserMenu }) => {
	return (
		<StyledForm
			onSubmit={e => handleSubmit(e, setUsers, newUser, setNewUserMenu)}
		>
			<StyledFormInput
				onChange={e => setNewUser({ ...newUser, name: e.target.value })}
				type='text'
				placeholder='Name'
			/>
			<StyledFormInput
				onChange={e => setNewUser({ ...newUser, nick: e.target.value })}
				type='text'
				placeholder='Username'
			/>
			<div>
				<StyledInputRadio
					onChange={() => setNewUser({ ...newUser, gender: 'men' })}
					type='radio'
					name='gender'
				/>
				<label>Man</label>
				<StyledInputRadio
					onChange={() => setNewUser({ ...newUser, gender: 'women' })}
					type='radio'
					name='gender'
				/>
				<label>Woman</label>
			</div>
			<StyledCharacteristicsContainer>
        {characteristics.map(characteristic => (
          <StyledCharacteristicButton
            key={characteristic}
            isSelected={selectedCharacteristics.includes(characteristic)}
            onClick={() => handleCharacteristicChange(characteristic)}
            type="button"
          >
            {characteristic}
          </StyledCharacteristicButton>
        ))}
      </StyledCharacteristicsContainer>

			<StyledFormSubmit type='submit' value='CREATE USER' />
		</StyledForm>
	);
};

const handleSubmit = async (event, setUsers, newUser, setNewUserMenu) => {
	event.preventDefault();
	try {
		const data = await postData(URLS.USER_API, newUser);
		setUsers(data);
	} catch (err) {
		console.error(err);
	}
	setNewUserMenu(false);
};



export default NewUserForm;
