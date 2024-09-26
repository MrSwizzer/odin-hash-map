import HashMap from './hashMap.js';

function testHashMap() {
	console.log("Testing 'set' and 'get' methods");

	const hashMap = new HashMap(16);

	//Add test data
	hashMap.set('apple', 'red');
	hashMap.set('banana', 'yellow');
	hashMap.set('carrot', 'orange');

	//Check if the data was correctly added
	console.log('\nCheck if the data was correctly added');
	console.log('Expecting "apple" to be red:', hashMap.get('apple') === 'red');
	console.log('Expecting "banana" to be yellow:', hashMap.get('banana') === 'yellow');
	console.log('Expecting "carrot" to be orange:', hashMap.get('carrot') === 'orange');

	//Test if overwrite works correctly
	console.log('\nTest if overwrite works correctly');
	hashMap.set('apple', 'green');
	console.log('Expecting "apple" to now be green:', hashMap.get('apple') === 'green');

	// Test retrieving a non-existing key
	console.log('\nTest retrieving a non-existing key');
	console.log('Testing retrieval of a non-existent key:');
	console.log('Expecting a non-existent key to return null:', hashMap.get('grape') === null);
}

// Call the tests
testHashMap();
