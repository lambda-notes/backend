exports.seed = function(knex, Promise) {
  return knex('accountType')
    .truncate()
    .then(function() {
      return knex('accountType').insert([
        { accountType: 'Admin' },
        { accountType: 'Instructor' },
        { accountType: 'Section Lead' },
        { accountType: 'Student' }
      ]);
    });
};
