const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findById,
  insert,
  remove,
  update
};

function find() {
  return db('users as u')
    .join('accountType as a', 'u.accountType', 'a.id')
    .join('cohorts as c', 'u.cohortID', 'c.id')
    .select(
      'u.id',
      'u.firstName',
      'u.lastName',
      'u.accountType as accountTypeID',
      'a.accountType',
      'u.cohortID',
      'c.cohortName'
    );
}

function findById(id) {
  return db('users as u')
    .join('accountType as a', 'u.accountType', 'a.id')
    .join('cohorts as c', 'u.cohortID', 'c.id')
    .select(
      'u.id',
      'u.firstName',
      'u.lastName',
      'u.accountType as accountTypeID',
      'a.accountType',
      'u.cohortID',
      'c.cohortName'
    )
    .where(`u.id`, id)
    .first();
}

function insert(creds) {
  return db('users')
    .insert(creds)
    .then(ids => ids);
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('users')
    .where({ id })
    .del();
}
