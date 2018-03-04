const { createStore } = require('redux');
const initialState = {
	gender: 'female',
	name: {
		title: 'mrs',
		first: 'dânia',
		last: 'da mota',
	},
	location: {
		street: '2591 rua pará ',
		city: 'teixeira de freitas',
		state: 'mato grosso',
		postcode: 31682,
	},
	email: 'dânia.damota@example.com',
	login: {
		username: 'bluebutterfly642',
		password: 'microsoft',
		salt: 'H4gYT9On',
		md5: 'fbeb20f0cd9ba5b85ca48640182cf580',
		sha1: '438236dbf3b903b616aae976e43ff9551598c139',
		sha256: 'ce402cb776be294abd1ab44a0f158cb1ce9ca9cbbda4f0e879d8b785a7ef4ebc',
	},
	dob: '1967-08-28 11:33:41',
	registered: '2016-05-07 20:16:19',
	phone: '(12) 1726-2212',
	cell: '(07) 2214-1440',
	id: {
		name: '',
		value: null,
	},
	picture: {
		large: 'https://randomuser.me/api/portraits/women/81.jpg',
		medium: 'https://randomuser.me/api/portraits/med/women/81.jpg',
		thumbnail: 'https://randomuser.me/api/portraits/thumb/women/81.jpg',
	},
	nat: 'BR',
	currentPlan: 'free',
};

const UPDATE = 'UPDATE';
const NAME_UPDATE = 'NAME_UPDATE';
const NAME_GENDER = 'NAME_GENDER';
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_NAME = 'UPDATE_NAME';

function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE:
			return {
				...state,
				currentPlan: action.payload,
			};
		case NAME_UPDATE:
			return {
				...state,
				name: {
					...state.name,
					first: action.payload,
				},
			};
		case NAME_GENDER:
			return {
				...state,
				gender: action.payload,
			};
		case UPDATE_NAME:
			return {
				...state,
				name: action.payload,
			};
		default:
			return state;
	}
}

const store = createStore(reducer);

const updatePlan = () => {
	return {
		type: UPDATE,
		payload: 'gold',
	};
};
const updateName1 = () => {
	return {
		type: NAME_UPDATE,
		payload: 'Munna',
	};
};

const updateGender = () => {
	return {
		type: NAME_GENDER,
		payload: 'male',
	};
};

const updateName = newName => {
	return {
		type: UPDATE_NAME,
		payload: newName,
	};
};

console.log(store.getState());
console.log('===============================');
store.dispatch(updatePlan());
store.dispatch(updateName1());
store.dispatch(updateGender());
store.dispatch(
	updateName({
		title: 'mrs',
		first: 'Munna',
		last: 'da mota',
	})
);

console.log(store.getState());
