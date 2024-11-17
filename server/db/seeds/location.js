export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('location').del()
  await knex('location').insert([
    {
      id: 1,
      location_name: 'Kaitaia',
    },
    {
      id: 2,
      location_name: 'Whangarei',
    },
    {
      id: 3,
      location_name: 'Auckland',
    },
    {
      id: 4,
      location_name: 'Tauranga',
    },
    {
      id: 5,
      location_name: 'Hamilton',
    },
    {
      id: 6,
      location_name: 'Rotorua',
    },
    {
      id: 7,
      location_name: 'Gisborne',
    },
    {
      id: 8,
      location_name: 'Taupo',
    },
    {
      id: 9,
      location_name: 'New Plymouth',
    },
    {
      id: 10,
      location_name: 'Napier',
    },
    {
      id: 11,
      location_name: 'Whanganui',
    },
    {
      id: 12,
      location_name: 'Palmerston North',
    },
    {
      id: 13,
      location_name: 'Masterton',
    },
    {
      id: 14,
      location_name: 'Wellington',
    },
    {
      id: 15,
      location_name: 'Nelson',
    },
    {
      id: 16,
      location_name: 'Blenheim',
    },
    {
      id: 17,
      location_name: 'Westport',
    },
    {
      id: 18,
      location_name: 'Kaikoura',
    },
    {
      id: 19,
      location_name: 'Hokitika',
    },
    {
      id: 20,
      location_name: 'Christchurch',
    },
    {
      id: 21,
      location_name: 'Mt Cook',
    },
    {
      id: 22,
      location_name: 'Lake Tekapo',
    },
    {
      id: 23,
      location_name: 'Timaru',
    },
    {
      id: 24,
      location_name: 'Milford Sound',
    },
    {
      id: 25,
      location_name: 'Queenstown',
    },
    {
      id: 26,
      location_name: 'Alexandra',
    },
    {
      id: 27,
      location_name: 'Manapouri',
    },
    {
      id: 28,
      location_name: 'Dunedin',
    },
    {
      id: 29,
      location_name: 'Invercargill',
    },
    {
      id: 30,
      location_name: 'Chatham Islands',
    },
  ])
}
