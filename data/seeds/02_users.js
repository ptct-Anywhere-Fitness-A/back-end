const bcrypt = require('bcrypt');

exports.seed = function(knex) {
      // Inserts seed entries
      return knex('users').insert([
        {username: "Sara", password: bcrypt.hashSync('pass', 14), role: "instructor", class_id: 1 },
        {username: "Bob", password: bcrypt.hashSync('password', 14), role: "student", class_id: 3 },
        {username: "Matt", password: bcrypt.hashSync('password', 14), role: "student", class_id: 3 },
      ]);
};