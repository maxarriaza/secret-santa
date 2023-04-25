import { SecretSanta } from './secret-santa';

describe('Secret Santa', () => {

    test('when two people and no couples should throw an error', () => {
        const test = SecretSanta.Build(["Max", "Alex"], []);
        expect(() => test.execute()).toThrow();
    });

    test('when three people and one couple should return a distribution', () => {
        const test = SecretSanta.Build(["Max", "Alex", "Zina"], [["Max", "Zina"]]);
        expect(() => test.execute()).toThrow();
    });

    test('when three people and no couple should return a distribution', () => {
        const test = SecretSanta.Build(["Max", "Alex", "Zina"], []);
        expect(test.execute()).toEqual(["Max", "Alex", "Zina"]);
    });

    test('when four people and no couple should return a distribution', () => {
        const test = SecretSanta.Build(["Max", "Alex", "Zina", "Julie"], []);
        expect(test.execute()).toEqual(["Max", "Alex", "Zina", "Julie"]);
    });

    test('when four people and one couple should return a distribution', () => {
        const test = SecretSanta.Build(["Alex", "Max", "Zina", "Julie"], [["Max", "Zina"]]);
        expect(test.execute()).toEqual(["Alex", "Max", "Julie", "Zina"]);
    });

    test('when four people and two couples should return a distribution', () => {
        const test = SecretSanta.Build(["Alex", "Julie", "Max", "Zina"], [["Max", "Zina"], ["Alex", "Julie"]]);
        expect(test.execute()).toEqual(["Alex", "Max", "Julie", "Zina"]);
    });

    test('when six people and two couples should return a distribution', () => {
        const test = SecretSanta.Build(["Florent", "Jessica", "Coline", "Emilien", "Ambroise", "Bastien"], [["Florent", "Jessica"], ["Coline", "Emilien"]]);
        expect(test.execute()).toEqual(["Florent", "Coline", "Jessica", "Emilien", "Ambroise", "Bastien"]);
    });
});