import { expect } from "chai"
import { parseUsers } from ".."

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