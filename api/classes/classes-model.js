const db = require('../../data/dbConfig');

function getClasses(){
    return db('classes').select('*');
}

function getClassById(id){
    return db('classes').where('id', id).first();
}

async function updateClass(changes, id){
    await db('classes').where('id', id).update(changes);
    return getClassById(id);
}

function removeClass(id){
    return db('classes').where('id', id).del();
}

async function addClass(add){
    const [id] = await db('classes').insert(add);
    return getClassById(id)
}

module.exports = {   
    getClasses,
    getClassById,
    updateClass,
    removeClass,
    addClass
}
