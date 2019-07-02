exports.seed = function(knex, Promise) {
  return knex('track')
    .track()
    .then(function() {
      return knex('track').insert([
        { trackName: 'Full Stack Web' },
        { trackName: 'User Experience' },
        { trackName: 'Data Science' },
        { trackName: 'iOS' },
        { trackName: 'Android' },
        { trakcName: 'Java' }
      ]);
    });
};
