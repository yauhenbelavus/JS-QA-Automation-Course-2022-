/*Exercise:

    Given the data, define the type "User" and use it accordingly.
    
*/

export type User = { 
        name: string, 
        age: number, 
        occupation: string 
    };                                      /* [Declare type "User" here.] */

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);