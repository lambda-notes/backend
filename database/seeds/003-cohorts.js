exports.seed = function(knex, Promise) {
  return knex('cohorts')
    .truncate()
    .then(function() {
      return knex('cohorts').insert([
        { cohortName: 'WEB1', cohortTrackID: 1 },
        { cohortName: 'WEB2', cohortTrackID: 1 },
        { cohortName: 'WEB3', cohortTrackID: 1 },
        { cohortName: 'WEB4', cohortTrackID: 1 },
        { cohortName: 'WEB5', cohortTrackID: 1 },
        { cohortName: 'WEB6', cohortTrackID: 1 },
        { cohortName: 'WEB7', cohortTrackID: 1 },
        { cohortName: 'WEB8', cohortTrackID: 1 },
        { cohortName: 'WEB9', cohortTrackID: 1 },
        { cohortName: 'WEB10', cohortTrackID: 1 },
        { cohortName: 'WEB11', cohortTrackID: 1 },
        { cohortName: 'WEB12', cohortTrackID: 1 },
        { cohortName: 'WEB13', cohortTrackID: 1 },
        { cohortName: 'WEB14', cohortTrackID: 1 },
        { cohortName: 'WEB15', cohortTrackID: 1 },
        { cohortName: 'WEB16', cohortTrackID: 1 },
        { cohortName: 'WEB17', cohortTrackID: 1 },
        { cohortName: 'WEB17', cohortTrackID: 1 },
        { cohortName: 'WEB18', cohortTrackID: 1 },
        { cohortName: 'WEB19', cohortTrackID: 1 },
        { cohortName: 'WEB20', cohortTrackID: 1 },
        { cohortName: 'WEB21', cohortTrackID: 1 },
        { cohortName: 'WEB22', cohortTrackID: 1 },
        { cohortName: 'WEB23', cohortTrackID: 1 },
        { cohortName: 'WEB24', cohortTrackID: 1 }
      ]);
    });
};
