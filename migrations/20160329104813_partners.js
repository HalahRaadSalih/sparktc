
exports.up = function(knex, Promise) {
  return knex.schema.createTable('partners', function(table){
    table.increments();
    table.string('name');
    table.string('email');
    table.text('address');
    table.text('companyName');
    table.text('companyDescription');
    table.string('comapanyURL');
    table.string('phoneNumber');
    table.string('imgURL');
    table.string('status');
    table.integer('points');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('partners');
};
