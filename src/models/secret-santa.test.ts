import { SecretSanta } from './secret-santa';

describe('Secret Santa', () => {

    test('when two people and no couples should throw an error', () => {
        const test = SecretSanta.Build(["Max", "Alex"], []);
        expect(() => test.execute()).toThrow();
    });

    test('when three people and one couple should throw an error', () => {
        const test = SecretSanta.Build(["Max", "Alex", "Zina"], [["Max", "Zina"]]);
        expect(() => test.execute()).toThrow();
    });

    test('when three people and no couple should return a distribution', () => {
        const test = SecretSanta.Build(["Max", "Alex", "Zina"], []);
        expect(test.execute()).toEqual(["Max", "Alex", "Zina"]);
    });
});