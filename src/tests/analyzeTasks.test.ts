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

    it('should average time spent by users', ()=> {

        const actual: string = analyzeTasks("")

        expect(actual).to.be.equal(false)
    })

    it('should average time spent by country', ()=> {

        const actual: string = analyzeTasks("")

        expect(actual).to.be.equal(false)
    })

    it('should each output should be sorted ascending', ()=> {

        const actual: string = analyzeTasks("")

        expect(actual).to.be.equal(false)
    })

    it('should Users and countries without any mention should be included in the output', ()=> {

        const actual: string = analyzeTasks("")

        expect(actual).to.be.equal(false)
    })

    it('should the average output should be rounded to the second decimal place', ()=> {

        const actual: string = analyzeTasks("")

        expect(actual).to.be.equal(false)
    })
})