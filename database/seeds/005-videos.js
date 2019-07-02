exports.seed = function(knex, Promise) {
  return knex('videos')
    .truncate()
    .then(function() {
      return knex('videos').insert([
        { videoName: 'Test', videoURL: 'Testing', lessonID: 1 }
      ]);
    });
};
