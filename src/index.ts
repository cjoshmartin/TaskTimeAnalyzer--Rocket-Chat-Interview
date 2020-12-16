
/*
in the first line of the input you can find the number of users in the platform (N).
 The following N lines contain the ID and country code for each user.
  Please note that the id of the user is numerical.
  The line after the ID and the country code of all users contains the number of tasks executed in the platform (T);
  followed by T lines containing the ID of the task, the ID of the user that executed it and the time spent in the task, in seconds.

*/

/*
  1) find the number of users (N), in the first line of the input
  2) parse the N number of lines, which has an ID followed by country code
  3) after gathering the users, a newline will contain the number of task executed(T)
  4) lines after T go as follows
    - Task ID
    - User ID
    - Time spent (in seconds) executing that task
*/

export function toArray(input: string, delimiter: string): string[]{

    return input
    .split(delimiter)
    .map(value => value.trim())
    .filter(value => value.length > 0)
}

export function parseUsers(rawInput: string[]){
   const output: string[] = []

   for (const unparseUser of rawInput){
        const [id, country ] = toArray(unparseUser, ' ')

        output.splice(parseInt(id)-1, 0, country) // insert country into correct index
   }

   return output
}

export interface TaskInterface {
    taskId: number,
    timeSpent: number
}

export interface UserTasksInterface {
    userId: number,
    tasks: TaskInterface[]
    average: number
}

export function parseExecutionTimes(rawInput: string[]): UserTasksInterface[]{
    let output: UserTasksInterface[] = []

    for (const unparsedTimes of rawInput){
        const [taskId, userId, timeSpent]= toArray(unparsedTimes, ' ')

        const task: TaskInterface = {
            taskId: parseInt(taskId),
            timeSpent: parseInt(timeSpent)
        }

        const userIdIndex: number = output
        .findIndex(userTask => userTask.userId === parseInt(userId))

        if (userIdIndex > -1){
            output[userIdIndex].tasks.push(task)

            // calculating rolling average, based on this stackoverflow answer
            //https://stackoverflow.com/questions/12636613/how-to-calculate-moving-average-without-keeping-the-count-and-data-total#:~:text=new%20average%20%3D%20((old%20count,%2D%20old%20average)%20%2F%20next%20count

            let average: number = output[userIdIndex].average
            const newSample: number = parseInt(timeSpent)
            const N: number = output[userIdIndex].tasks.length

            average -= average / N
            average += newSample / N

            output[userIdIndex].average = average
        }
        else {
            output.push({
                userId: parseInt(userId),
                tasks: [task],
                average: parseInt(timeSpent),
            })
        }
    }


    return output
}

export function analyzeTasks(tasks: string) : string {
    const lines: string[] = toArray(tasks, '\n')

    const numberOfUsers: number = parseInt(lines[0]) + 1
    const unparsedUsers: string[]  = lines.slice(1, numberOfUsers)

    const users = parseUsers(unparsedUsers)

    const numberOfExecutionTimes: number = parseInt(lines[numberOfUsers])
    const unparsedExecutionTimes: string[] = lines.splice(numberOfUsers+1, numberOfExecutionTimes)

    const executionTimes: UserTasksInterface[] = parseExecutionTimes(unparsedExecutionTimes)
    .sort(
        (a: UserTasksInterface, b: UserTasksInterface) => 
        a.userId - b.userId
        )

    const executionTimesAverages: string = executionTimes.map(({userId, average}) => `${userId} ${average.toFixed(2)}`).join('\n')
    const countryAverages: string = executionTimes.map(({userId, average}) => `${users[userId -1]} ${average.toFixed(2)}`).join('\n')

    const output:string = `${executionTimesAverages}\n${countryAverages}`

    return output
}
