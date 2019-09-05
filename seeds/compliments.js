
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('compliments').del()
    .then(function () {
      // Inserts seed entries
      return knex('compliments').insert([
        {id: 1, compliment: 'You are awesome'}
        {id: 2, compliment: 'You are fabulous' },
        {id: 3, compliment: 'You are marvelous'},
        {id: 4, compliment: 'You are amazing'},
        {id: 5, compliment: 'You are astonishing'},
        {id: 6, compliment: 'You are phenomenal'},
        {id: 7, compliment: 'You are unique'},
        {id: 8, compliment: 'You are fucking deadly'}
        {id: 9, compliment: 'You are amazeballs'},
        {id: 10, compliment: 'You are cool'},
        {id: 11, compliment: 'You are courageous'},
        {id: 12, compliment: 'You are bold'},
        {id: 13, compliment: 'You are generous'},
        {id: 14, compliment: 'You are magnanimous'},
        {id: 15, compliment: 'You are brilliant'}

      ]);
    });
};
