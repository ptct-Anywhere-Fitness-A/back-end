
exports.up = function(knex) {
    return knex.schema
    .createTable('classes', (tbl) =>{
        tbl.increments('id');        
        tbl.string('class_name', 128).notNullable();
        tbl.string('class_type', 128).notNullable()
        tbl.string('intensity_level', 128).notNullable();
        tbl.string('duration', 128).notNullable();
        tbl.string('start_time', 128).notNullable();
        tbl.string('location', 128).notNullable();
        tbl.integer('number_of_attendees');
        tbl.integer('max_class_size');
    })
    .createTable('users', (tbl) =>{
        tbl.increments();
        tbl.string('username', 128).unique().notNullable();
        tbl.string('password', 128).notNullable();
        tbl.string('role').notNullable();
        tbl.integer('class_id').references('id').inTable('classes');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('classes')
};
