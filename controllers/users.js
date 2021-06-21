import { v4 as uuidv4 } from 'uuid';

let users = [ ]

export const getUsers = (req, res) => {
    res.send(users) }

export const createUser = ( (req, res) => {
    const user = req.body

    const userID = uuidv4(); 

    const userWithID = { ...user, id:userID }

    users.push(userWithID)

    res.send(`User with the name ${user.firstName} added to Database`)
})

export const getUser = ((req, res)=> {
    const id = req.params.id

    const foundUserID = users.find((user)=>user.id === id)

    res.send(foundUserID)

})

export const deleteUser = ((req, res)=>{
    const id = req.params.id

    users = users.filter((user)=> user.id !== id)

    res.send(`User with the id ${id} deleted from the database`)
})

export const updateUser = ((req, res) => {
    const id = req.params.id
    
    const userToBeUpdated = users.find(user => user.id === id)
    
    const {firstName, lastName, age} =  req.body
    

    if(firstName) {
        userToBeUpdated.firstName = firstName;
    }

    if(lastName) {
        userToBeUpdated.lastName = lastName;
    }

    if(age) {
        userToBeUpdated.age = age;
    }

    res.send(`user with the id ${id} has been updated`)

})