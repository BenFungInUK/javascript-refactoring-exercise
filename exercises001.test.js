const { sum, logPerson, sayHello, greetings, countSheep, pigLatinTranslator, animal, allTrees, inOrder, introduction } = require('./exercises001');

describe("sum", () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});


describe("logPerson", () => {

    const people = ["Heather", "Barry", "John", "Maria"];

    test('returns a list of people', () => {
        expect(logPerson(people)).toBe("Heather", "Barry", "John", "Maria");
    });
});

describe("sayHello", () => {

    test('returns "Hello you!" if name is undefined"', () => {
        expect(sayHello()).toBe("Hello you!");
    });

    const name = "Kim"

    test('returns "Hello" + the name if name is defined"', () => {
        expect(sayHello(name)).toBe("Hello Kim");
    });
});

describe("greetings", () => {

    test('returns greeting plus subject concatenated with an exclamation mark', () => {
        expect(greetings("Hello", "World")).toBe("Hello World!");
    });

    test('returns greeting plus subject concatenated with an exclamation mark', () => {
        expect(greetings("Greetings", "Earthling")).toBe("Greetings Earthling!");
    });

});

describe("greetings", () => {

    test('returns greeting plus subject concatenated with an exclamation mark', () => {
        expect(greetings("Hello", "World")).toBe("Hello World!");
    });

    test('returns greeting plus subject concatenated with an exclamation mark', () => {
        expect(greetings("Greetings", "Earthling")).toBe("Greetings Earthling!");
    });

});

describe('countSheep', () => {
    test('returns the number of sheep', () => {

        let sheep = ['sheep', 'sheep', 'sheep', 'donkey',
            'sheep', 'sheep', 'sheep', 'sheep',
            'sheep', 'melon', 'sheep', 'doughnut?!',
            'sheep', 'cow', 'crocodile', 'sheep',
            'sheep', 'sheep', 'sheep', 'sheep',
            'ship', 'shop', 'sheep', 'sheep'];

        expect(countSheep(sheep)).toBe(17);
    });
});

describe('pigLatinTranslator', () => {

    test('moves the first letter of each word to the end of it, and adds "ay" to the end of the word', () => {
        expect(pigLatinTranslator('Pig latin is cool')).toBe('igPay atinlay siay oolcay');
    });

    test('leaves punctuation marks untouched', () => {
        expect(pigLatinTranslator('Hello world !')).toBe('elloHay orldway !');
    });
});

describe('animal', () => {

    test('returns information about the animal', () => {

        expect(animal({ name: "dog", legs: 4, color: "white" })).toBe("This white dog has 4 legs.");
    });

    test('leaves punctuation marks untouched', () => {
        expect(animal({ name: "cock", legs: 2, color: "red" })).toBe("This red cock has 2 legs.");
    });

    test('leaves punctuation marks untouched', () => {
        expect(animal({ name: "whale", legs: 0, color: "blue" })).toBe("This blue whale has 0 legs.");
    });
});

describe('allTrees', () => {

    test('returns all trees in one array', () => {
        expect(allTrees()).toEqual([
            'Birch',
            'Oak',
            'Pink Perfection',
            'Apple',
            'Lemon',
            'Eucalyptus',
            'Guava'
        ]);
    });
});

// describe('inOrder', () => {

//     test('returns elements in order', () => {
//         expect(inOrder(['first', 'second', 'third'])).toBe('first second third');
//     });
// });


describe('introduction', () => {

    const person = {
        name: 'Heather',
        city: 'Manchester',
        pet: 'Eddie'
    }

    test('returns an introduction with information about person', () => {
        expect(introduction(person)).toBe('Hello my name is Heather, and I live in Manchester with Eddie');
    });
});