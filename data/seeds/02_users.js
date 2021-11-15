const bcrypt = require('bcrypt');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "Sara", password: bcrypt.hashSync('pass', 14), role: "instructor", class_id: 1 },
        {username: "Bob", password: bcrypt.hashSync('password', 14), role: "student", class_id: 3 },
      ]);
    });
};