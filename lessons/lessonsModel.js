const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findById,
  findBySprintId,
  findByCohortId,
  insert,
  update,
  remove
};

function find() {
  return db('lessons');
}

function findById(id) {
  return db('lessons')
    .where({ id })
    .first();
}

function findBySprintId(sprintID) {
  return db('lessons').where({ sprintID });
}
function findByCohortId(cohortID) {
  console.log('Working');
  return db('lessons').where({ lessonsCohortID: cohortID });
}

function insert(lesson) {
  return db('lessons')
    .insert(lesson)
    .then(lessonID => lessonID);
}

function update(changes, id) {
  return db('lessons')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('lessons')
    .where({ id })
    .del();
}
