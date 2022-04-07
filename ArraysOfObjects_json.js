const todos =[
{

    id : 1,
    text : 'Hello vro',
    isCompleted : true,

},
{

    id : 2,
    text : 'Nice to meet you',
    isCompleted : false,

},
{

    id : 3,
    text : 'Wassup!!',
    isCompleted : true,

}

];

console.log(todos[1].text);

/* json- it's a data format which is use in
web d , api, server etc.*/

/*Converting code into json format */

const todoJSON = JSON.stringify(todos);
console.log(todos)

