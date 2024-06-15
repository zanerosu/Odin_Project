import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./testing-prac";

it('works', () =>{
    expect(1).toBe(1);
})

it('capitalize Test 1', () =>{
    expect(
        capitalize("zane")
    ).toBe("Zane")
})

it('capitalize Test 2', () =>{
    expect(
        capitalize("bob")
    ).toBe("Bob")
})

it('capitalize Test 3', () =>{
    expect(
        capitalize("billy bob")
    ).toBe("Billy bob")
})

it('reverseString Test 1', () =>{
    expect(
        reverseString("zane")
    ).toBe("enaz")
})

it('reverseString Test 2', () =>{
    expect(
        reverseString("lando")
    ).toBe("odnal")
})

it('reverseString Test 2', () =>{
    expect(
        reverseString("A quick brown fox jumps over the moon")
    ).toBe("noom eht revo spmuj xof nworb kciuq A")
})

it('calculator add Test 1', () =>{
    expect(
        calculator.add(1,2)
    ).toBe(3);
})

it('calculator add Test 2', () =>{
    expect(
        calculator.add(10,21)
    ).toBe(31);
})

it('calculator subtract Test 1', () =>{
    expect(
        calculator.subtract(20,2)
    ).toBe(18);
})

it('calculator subtract Test 2', () =>{
    expect(
        calculator.subtract(100,200)
    ).toBe(-100);
})

it('calculator divide Test 1', () =>{
    expect(
        calculator.divide(10,2)
    ).toBe(5);
})

it('calculator divide Test 2', () =>{
    expect(
        calculator.divide(20,2)
    ).toBe(10);
})

it('calculator multiply Test 1', () =>{
    expect(
        calculator.multiply(5,10)
    ).toBe(50);
})

it('calculator multiply Test 2', () =>{
    expect(
        calculator.multiply(100,10)
    ).toBe(1000);
})

it('caesarCipher Test 1', () => {
    expect(
        caesarCipher("word", 2)
    ).toBe("yqtf")
})

it('caesarCipher Test 1', () => {
    expect(
        caesarCipher("secret", 5)
    ).toBe("xjhwjy")
})

it('analyzeArray Test 1', () =>{
    expect(
        analyzeArray([1,8,3,4,2,6])
    ).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    )
})