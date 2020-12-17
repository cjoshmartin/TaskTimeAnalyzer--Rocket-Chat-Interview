import { expect } from 'chai';

import { toArray } from '..';

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
