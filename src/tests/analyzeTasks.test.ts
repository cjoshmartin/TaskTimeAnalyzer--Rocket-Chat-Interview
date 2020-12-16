import { expect } from 'chai';


import { analyzeTasks } from '..';

describe('Analye Tasks', () =>{
    it('it should work lmao', () => {
        const input: string = `
        2
        1 PT
        2 US
        3
        1 1 10
        2 1 5
        3 2 10 `

        const expected: string = `
        1 7.50
        2 10.00
        PT 7.50
        US 10.00`

        const actual: string = analyzeTasks(input)

        expect(actual).to.be.equal(expected)
    })
})