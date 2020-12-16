import { expect } from 'chai';


import { analyzeTasks, toArray, parseUsers, parseExecutionTimes, UserTasksInterface} from '..';

describe('toArray', () =>{
    it('should parse newlines', () => {
        // arrange 
        const input = `
        2
        1 UA
        2 US
        `
        const expected = ['2', '1 UA', `2 US`]
        
        // act
        const actual = toArray(input, '\n')

        //assert
        expect(actual).to.be.deep.equal(expected)
    })

    it('should parse spaces', () => {
        // arrange 
        const input = `1 UA`
        const expected = ['1', 'UA']
        
        // act
        const actual = toArray(input, ' ')

        //assert
        expect(actual).to.be.deep.equal(expected)
    })

})


describe('parseUsers', () => {
    it('should return the users as string array', () => {
        // arrange 
        const input = ['1 UA', `2 US`] 
        const expected = ['UA', 'US']

        // act
        const actual = parseUsers(input)

        //assert
        expect(expected).to.be.deep.equal(actual)
    }),

    it('should order contries correctly', () => {
        // arrange 
        const input = [`2 US`,'1 UA'] 
        const expected = ['UA', 'US']

        // act
        const actual = parseUsers(input)

        //assert
        expect(expected).to.be.deep.equal(actual)
    })
})

describe('parseExecutionTimes', () =>{
    it('should return object of exec times', () => {
        const input: string[] = ['1 1 10', '2 1 5', '3 2 10']
        const expected: UserTasksInterface[] = [
            {
              userId: 1,
              tasks: [
                {
                  taskId: 1,
                  timeSpent: 10,
                },
                {
                  taskId: 2,
                  timeSpent: 5,
                },
              ],
              average: 7.5
            },
            {
              userId: 2,
              tasks: [
                {
                  taskId: 3,
                  timeSpent: 10,
                },
              ],
              average: 10
            },
          ]

        const actual = parseExecutionTimes(input) 
        
        expect(expected).to.be.deep.equal(actual)
        
    })
})

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