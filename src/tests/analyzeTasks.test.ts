import { expect } from 'chai';


import { analyzeTasks} from '..';

describe('Analye Tasks', () =>{

    it('it should produce the correct output', () => {
        const input: string = `
        2
        1 PT
        2 US
        3
        1 1 10
        2 1 5
        3 2 10 `

        const expected: string = `1 7.50
2 10.00
PT 7.50
US 10.00`

        const actual: string = analyzeTasks(input)

        expect(actual).to.be.deep.equal(expected)
    })

    it('each output should be sorted ascending', ()=> {

        const input: string = `
        2
        2 US
        1 PT
        3
        1 1 10
        3 2 10
        2 1 5`

        const expected: string = `1 7.50
2 10.00
PT 7.50
US 10.00`

        const actual: string = analyzeTasks(input)

        expect(actual).to.be.deep.equal(expected)
    })
    it('should ignore additional input', ()=> {

        const input: string = `
        2
        2 US
        1 PT
        3
        1 1 10
        3 2 10
        2 1 5
        d 2 d
        s s
        a
        `

        const expected: string = `1 7.50
2 10.00
PT 7.50
US 10.00`

        const actual: string = analyzeTasks(input)

        expect(actual).to.be.deep.equal(expected)
    })

    // it('should Users and countries without any mention should be included in the output', ()=> {

    //     const actual: string = analyzeTasks("")

    //     expect(actual).to.be.equal(false)
    // })

    // it('should the average output should be rounded to the second decimal place', ()=> {

    //     const actual: string = analyzeTasks("")

    //     expect(actual).to.be.equal(false)
    // })
})