const db = require('../../data/dbConfig')

module.exports = {
    addUser,
    getUser,
    findBy,
}

async function addUser(user){
    const [id] = await db('users').insert(user);
    return db('users').where({id}).first();
}

function getUser(username){
    return db('users').where({username}).first();
}

function findBy(username)