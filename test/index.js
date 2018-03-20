import test from 'ava';
import coins from '../';

test('coins is an array', t => {
	t.true(Array.isArray(coins));
});

test('coins contains more than 0 coins', t => {
	t.true(coins.length > 0);
});

test('coin object has expected properties', t => {
	const expectedKeys = ['id', 'symbol', 'name', 'maxSupply'];
	const actualKeys = Object.keys(coins[0]);
	t.deepEqual(expectedKeys, actualKeys);
});
