const { createStore } = require('redux');

const initialState = {
	profile: {
		gender: 'female',
		name: {
			title: 'mrs',
			first: 'dânia',
			last: 'da mota',
		},
		phone: '015394 16261',
		cell: '0757-275-048',
		location: {
			street: '2591 rua pará ',
			city: 'teixeira de freitas',
			state: 'mato grosso',
			postcode: 31682,
		},
		currentPlan: 'free',
		upgraded: false,
	},
	plans: [
		{
			id: '33453ttt',
			name: 'gold',
			cost: 3500,
		},
		{
			id: '334545tt',
			name: 'silver',
			cost: 2500,
		},
	],
};

function reducer(state = initialState, action) {
	return state;
}
/* create a store with the initial data above */

const store = createStore(reducer);
/* 
expected output: unmodified intitial data from 
the store via store.getState() 
*/

console.log(store.getState());
