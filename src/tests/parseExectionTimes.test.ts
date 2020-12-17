import { expect } from "chai"
import { parseExecutionTimes, UserTasksInterface } from ".."

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