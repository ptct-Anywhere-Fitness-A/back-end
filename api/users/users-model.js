const db = require('../../data/dbConfig.js')

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

function findBy(username){
    return db('users')
    .select('id','username','role').where('username', username).first()
}