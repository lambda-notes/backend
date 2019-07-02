exports.seed = function(knex, Promise) {
  return knex('users')
    .truncate()
    .then(function() {
      return knex('users').insert([
        {
          firstName: 'Michael',
          lastName: 'Landers',
          accountType: 1,
          githubId: 'placeholder',
          cohortID: 15,
          trackID: 2
        },
        {
          firstName: 'Alex',
          lastName: 'King',
          accountType: 1,
          githubId: 'placeholder',
          cohortID: 12,
          trackID: 1
        },
        {
          firstName: 'Nathan',
          lastName: 'Thomas',
          accountType: 1,
          githubId: 'placeholder',
          cohortID: 19,
          trackID: 4
        },
        {
          firstName: 'Henry',
          lastName: 'Neal',
          accountType: 1,
          githubId: 'placeholder',
          cohortId: 3,
          trackID: 1
        },
        {
          firstName: 'Joshua',
          lastName: 'Vandergriff',
          accountType: 1,
          githubId: 'placeholder',
          cohortID: 20,
          trackID: 5
        },
        {
          firstName: 'Elijah',
          lastName: 'McKay',
          accountType: 1,
          githubId: 'placeholder',
          cohortID: 20,
          trackID: 3
        }
      ]);
    });
};
