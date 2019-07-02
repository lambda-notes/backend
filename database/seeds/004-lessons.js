exports.seed = function(knex, Promise) {
  return knex('lessons')
    .truncate()
    .then(function() {
      return knex('lessons').insert([
        {
          lessonName: 'User Interface I',
          lessonsTrackID: 1
        },
        {
          lessonName: 'User Interface II',
          lessonsTrackID: 1
        },
        {
          lessonName: 'User Interface III',
          lessonsTrackID: 1
        },
        {
          lessonName: 'Git for Web Development',
          lessonsTrackID: 1
        },
        {
          lessonName: 'JavaScript I',
          lessonsTrackID: 1
        },
        {
          lessonName: 'JavaScript II',
          lessonsTrackID: 1
        },
        {
          lessonsName: 'JavaScript III',
          lessonsTrackID: 1
        },
        {
          lessonName: 'JavaScript IV',
          lessonsTrackID: 1
        }
      ]);
    });
};
