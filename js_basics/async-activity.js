// create a simple to-do list
//OOP classes and callbacks, promises and async await 

/* step 1 - create a class task and taskManager
   step 2 - Task class will have a properties of: 
        id: number
        title: string 
        decription:  string 
        createdAt: date. ex: new Date()
   step 3 : task manager will responcible for adding, updating and deleting list. Also listing all the lists.

   a: store all the list in an array

   b: crate a function to add a list my array of lists

   c: create a function to list(console) all me lists

   d: create a function to update any list from my array (use an id)

   c: create a function to delete a list from my array of lists
 */

class Todo {
    constructor(id, title, decription) {
        this.id = id;
        this.title = title;
        this.decription = decription;
        this.createAt = new Date();
    }
}

class TodoManager {
    // createAToDo() => asynchronous task
    constructor() {
        this.AllTodos = []
    }
    createATodo(newTodo) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.AllTodos.push(newTodo)
                resolve("Success")
            }, 2000)
        })

    }
    // listTodos() => asynchronous task
    listTodos() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.AllTodos)
            }, 2000)
        })
    }
}
const todoManager = new TodoManager()
todoManager.createATodo(new Todo(1, "Watch TV", "On weekend and this show"))
    .then((messege) => {
        console.log(messege)
        console.log(todoManager)
    })

    todoManager.createATodo(new Todo(2, "Grocery", "On sautday"))
    .then((messege) => {
        console.log(messege)
        console.log(todoManager)
    })

    .catch(err => console.log(err))

    todoManager.listTodos()
    .then(todos =>{
        todos.forEach(todo => {
            console.log(todo)
        });
    })
/*
// Give me a random number between 10-20 by waiting(delay) 
// 5 seconds and using promise 
// Show a message "Number is valid" if its bigger than 15
// else output "Number is invalid"
*/



const createRandom = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * 11 + 10)
            resolve(num)
        }, 5000)
    })
}

createRandom()
    .then(number => {
        console.log(number)
        if (number > 15) console.log("Number is valid")
        else console.log("Number is invalid")
    })
    .catch(err => console.log(err))

// async await
createRandom()
async function resolveRandomNumber() {
    try {
        let number = await createRandom()
        console.log(number)
        if (number > 15) console.log("Number is valid")
        else console.log("Number is invalid")
    }
    catch (err) {
        console.log(err)
    }
}
resolveRandomNumber()
