//Object Destructuring
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

//Array Destructuring

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , price] = item;
console.log(`A medium ${itemName} costs ${price}`);