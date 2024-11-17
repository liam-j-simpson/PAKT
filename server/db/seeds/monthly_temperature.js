export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('monthly_temperature').del()
  await knex('monthly_temperature').insert(
    [
    {
      id: 1,
      location_id: 1,
      month: "JAN",
      average_temp: 19.2
    },
    {
      id: 2,
      location_id: 1,
      month: "FEB",
      average_temp: 20.0
    },
    {
      id: 3,
      location_id: 1,
      month: "MAR",
      average_temp: 18.6
    },
    {
      id: 4,
      location_id: 1,
      month: "APR",
      average_temp: 16.9
    },
    {
      id: 5,
      location_id: 1,
      month: "MAY",
      average_temp: 14.8
    },
    {
      id: 6,
      location_id: 1,
      month: "JUN",
      average_temp: 12.8
    },
    {
      id: 7,
      location_id: 1,
      month: "JUL",
      average_temp: 12.0
    },
    {
      id: 8,
      location_id: 1,
      month: "AUG",
      average_temp: 12.2
    },
    {
      id: 9,
      location_id: 1,
      month: "SEP",
      average_temp: 13.1
    },
    {
      id: 10,
      location_id: 1,
      month: "OCT",
      average_temp: 14.2
    },
    {
      id: 11,
      location_id: 1,
      month: "NOV",
      average_temp: 15.6
    },
    {
      id: 12,
      location_id: 1,
      month: "DEC",
      average_temp: 17.7
    },
    {
      id: 13,
      location_id: 2,
      month: "JAN",
      average_temp: 20.2
    },
    {
      id: 14,
      location_id: 2,
      month: "FEB",
      average_temp: 20.6
    },
    {
      id: 15,
      location_id: 2,
      month: "MAR",
      average_temp: 19.0
    },
    {
      id: 16,
      location_id: 2,
      month: "APR",
      average_temp: 17.0
    },
    {
      id: 17,
      location_id: 2,
      month: "MAY",
      average_temp: 14.8
    },
    {
      id: 18,
      location_id: 2,
      month: "JUN",
      average_temp: 12.7
    },
    {
      id: 19,
      location_id: 2,
      month: "JUL",
      average_temp: 11.8
    },
    {
      id: 20,
      location_id: 2,
      month: "AUG",
      average_temp: 12.2
    },
    {
      id: 21,
      location_id: 2,
      month: "SEP",
      average_temp: 13.5
    },
    {
      id: 22,
      location_id: 2,
      month: "OCT",
      average_temp: 15.0
    },
    {
      id: 23,
      location_id: 2,
      month: "NOV",
      average_temp: 16.6
    },
    {
      id: 24,
      location_id: 2,
      month: "DEC",
      average_temp: 18.8
    },
    {
      id: 25,
      location_id: 3,
      month: "JAN",
      average_temp: 20.0
    },
    {
      id: 26,
      location_id: 3,
      month: "FEB",
      average_temp: 20.5
    },
    {
      id: 27,
      location_id: 3,
      month: "MAR",
      average_temp: 18.9
    },
    {
      id: 28,
      location_id: 3,
      month: "APR",
      average_temp: 16.6
    },
    {
      id: 29,
      location_id: 3,
      month: "MAY",
      average_temp: 14.2
    },
    {
      id: 30,
      location_id: 3,
      month: "JUN",
      average_temp: 12.1
    },
    {
      id: 31,
      location_id: 3,
      month: "JUL",
      average_temp: 11.2
    },
    {
      id: 32,
      location_id: 3,
      month: "AUG",
      average_temp: 11.7
    },
    {
      id: 33,
      location_id: 3,
      month: "SEP",
      average_temp: 13.1
    },
    {
      id: 34,
      location_id: 3,
      month: "OCT",
      average_temp: 14.6
    },
    {
      id: 35,
      location_id: 3,
      month: "NOV",
      average_temp: 16.2
    },
    {
      id: 36,
      location_id: 3,
      month: "DEC",
      average_temp: 18.5
    },
    {
      id: 37,
      location_id: 4,
      month: "JAN",
      average_temp: 19.8
    },
    {
      id: 38,
      location_id: 4,
      month: "FEB",
      average_temp: 20.1
    },
    {
      id: 39,
      location_id: 4,
      month: "MAR",
      average_temp: 18.4
    },
    {
      id: 40,
      location_id: 4,
      month: "APR",
      average_temp: 15.9
    },
    {
      id: 41,
      location_id: 4,
      month: "MAY",
      average_temp: 13.6
    },
    {
      id: 42,
      location_id: 4,
      month: "JUN",
      average_temp: 11.2
    },
    {
      id: 43,
      location_id: 4,
      month: "JUL",
      average_temp: 10.5
    },
    {
      id: 44,
      location_id: 4,
      month: "AUG",
      average_temp: 11.0
    },
    {
      id: 45,
      location_id: 4,
      month: "SEP",
      average_temp: 12.5
    },
    {
      id: 46,
      location_id: 4,
      month: "OCT",
      average_temp: 14.3
    },
    {
      id: 47,
      location_id: 4,
      month: "NOV",
      average_temp: 16.1
    },
    {
      id: 48,
      location_id: 4,
      month: "DEC",
      average_temp: 18.3
    },
    {
      id: 49,
      location_id: 5,
      month: "JAN",
      average_temp: 18.7
    },
    {
      id: 50,
      location_id: 5,
      month: "FEB",
      average_temp: 19.1
    },
    {
      id: 51,
      location_id: 5,
      month: "MAR",
      average_temp: 17.4
    },
    {
      id: 52,
      location_id: 5,
      month: "APR",
      average_temp: 14.7
    },
    {
      id: 53,
      location_id: 5,
      month: "MAY",
      average_temp: 12.0
    },
    {
      id: 54,
      location_id: 5,
      month: "JUN",
      average_temp: 9.7
    },
    {
      id: 55,
      location_id: 5,
      month: "JUL",
      average_temp: 9.0
    },
    {
      id: 56,
      location_id: 5,
      month: "AUG",
      average_temp: 9.8
    },
    {
      id: 57,
      location_id: 5,
      month: "SEP",
      average_temp: 11.6
    },
    {
      id: 58,
      location_id: 5,
      month: "OCT",
      average_temp: 13.1
    },
    {
      id: 59,
      location_id: 5,
      month: "NOV",
      average_temp: 14.8
    },
    {
      id: 60,
      location_id: 5,
      month: "DEC",
      average_temp: 17.2
    },
    {
      id: 61,
      location_id: 6,
      month: "JAN",
      average_temp: 17.7
    },
    {
      id: 62,
      location_id: 6,
      month: "FEB",
      average_temp: 18.1
    },
    {
      id: 63,
      location_id: 6,
      month: "MAR",
      average_temp: 16.1
    },
    {
      id: 64,
      location_id: 6,
      month: "APR",
      average_temp: 13.4
    },
    {
      id: 65,
      location_id: 6,
      month: "MAY",
      average_temp: 10.9
    },
    {
      id: 66,
      location_id: 6,
      month: "JUN",
      average_temp: 8.6
    },
    {
      id: 67,
      location_id: 6,
      month: "JUL",
      average_temp: 7.8
    },
    {
      id: 68,
      location_id: 6,
      month: "AUG",
      average_temp: 8.4
    },
    {
      id: 69,
      location_id: 6,
      month: "SEP",
      average_temp: 10.1
    },
    {
      id: 70,
      location_id: 6,
      month: "OCT",
      average_temp: 11.9
    },
    {
      id: 71,
      location_id: 6,
      month: "NOV",
      average_temp: 13.8
    },
    {
      id: 72,
      location_id: 6,
      month: "DEC",
      average_temp: 16.2
    },
    {
      id: 73,
      location_id: 7,
      month: "JAN",
      average_temp: 20.1
    },
    {
      id: 74,
      location_id: 7,
      month: "FEB",
      average_temp: 20.2
    },
    {
      id: 75,
      location_id: 7,
      month: "MAR",
      average_temp: 18.3
    },
    {
      id: 76,
      location_id: 7,
      month: "APR",
      average_temp: 15.6
    },
    {
      id: 77,
      location_id: 7,
      month: "MAY",
      average_temp: 13.2
    },
    {
      id: 78,
      location_id: 7,
      month: "JUN",
      average_temp: 10.8
    },
    {
      id: 79,
      location_id: 7,
      month: "JUL",
      average_temp: 10.1
    },
    {
      id: 80,
      location_id: 7,
      month: "AUG",
      average_temp: 10.7
    },
    {
      id: 81,
      location_id: 7,
      month: "SEP",
      average_temp: 12.6
    },
    {
      id: 82,
      location_id: 7,
      month: "OCT",
      average_temp: 14.7
    },
    {
      id: 83,
      location_id: 7,
      month: "NOV",
      average_temp: 16.3
    },
    {
      id: 84,
      location_id: 7,
      month: "DEC",
      average_temp: 18.5
    },
    {
      id: 85,
      location_id: 8,
      month: "JAN",
      average_temp: 17.3
    },
    {
      id: 86,
      location_id: 8,
      month: "FEB",
      average_temp: 17.4
    },
    {
      id: 87,
      location_id: 8,
      month: "MAR",
      average_temp: 15.2
    },
    {
      id: 88,
      location_id: 8,
      month: "APR",
      average_temp: 12.3
    },
    {
      id: 89,
      location_id: 8,
      month: "MAY",
      average_temp: 9.8
    },
    {
      id: 90,
      location_id: 8,
      month: "JUN",
      average_temp: 7.6
    },
      {
        id: 91,
        location_id: 8,
        month: "JUL",
        average_temp: 6.8
      },
      {
        id: 92,
        location_id: 8,
        month: "AUG",
        average_temp: 7.5
      },
      {
        id: 93,
        location_id: 8,
        month: "SEP",
        average_temp: 9.2
      },
      {
        id: 94,
        location_id: 8,
        month: "OCT",
        average_temp: 11.2
      },
      {
        id: 95,
        location_id: 8,
        month: "NOV",
        average_temp: 13.1
      },
      {
        id: 96,
        location_id: 8,
        month: "DEC",
        average_temp: 15.7
      },
      {
        id: 97,
        location_id: 9,
        month: "JAN",
        average_temp: 17.6
      },
      {
        id: 98,
        location_id: 9,
        month: "FEB",
        average_temp: 18.2
      },
      {
        id: 99,
        location_id: 9,
        month: "MAR",
        average_temp: 16.8
      },
      {
        id: 100,
        location_id: 9,
        month: "APR",
        average_temp: 14.8
      },
      {
        id: 101,
        location_id: 9,
        month: "MAY",
        average_temp: 12.7
      },
      {
        id: 102,
        location_id: 9,
        month: "JUN",
        average_temp: 10.7
      },
      {
        id: 103,
        location_id: 9,
        month: "JUL",
        average_temp: 9.7
      },
      {
        id: 104,
        location_id: 9,
        month: "AUG",
        average_temp: 10.3
      },
      {
        id: 105,
        location_id: 9,
        month: "SEP",
        average_temp: 11.6
      },
      {
        id: 106,
        location_id: 9,
        month: "OCT",
        average_temp: 12.8
      },
      {
        id: 107,
        location_id: 9,
        month: "NOV",
        average_temp: 14.0
      },
      {
        id: 108,
        location_id: 9,
        month: "DEC",
        average_temp: 16.3
      },
      {
        id: 109,
        location_id: 10,
        month: "JAN",
        average_temp: 19.7
      },
      {
        id: 110,
        location_id: 10,
        month: "FEB",
        average_temp: 19.6
      },
      {
        id: 111,
        location_id: 10,
        month: "MAR",
        average_temp: 17.7
      },
      {
        id: 112,
        location_id: 10,
        month: "APR",
        average_temp: 15.1
      },
      {
        id: 113,
        location_id: 10,
        month: "MAY",
        average_temp: 12.6
      },
      {
        id: 114,
        location_id: 10,
        month: "JUN",
        average_temp: 10.2
      },
      {
        id: 115,
        location_id: 10,
        month: "JUL",
        average_temp: 9.6
      },
      {
        id: 116,
        location_id: 10,
        month: "AUG",
        average_temp: 10.4
      },
      {
        id: 117,
        location_id: 10,
        month: "SEP",
        average_temp: 12.4
      },
      {
        id: 118,
        location_id: 10,
        month: "OCT",
        average_temp: 14.5
      },
      {
        id: 119,
        location_id: 10,
        month: "NOV",
        average_temp: 16.1
      },
      {
        id: 120,
        location_id: 10,
        month: "DEC",
        average_temp: 18.4
      },
      {
        id: 121,
        location_id: 11,
        month: "JAN",
        average_temp: 18.3
      },
      {
        id: 122,
        location_id: 11,
        month: "FEB",
        average_temp: 18.6
      },
      {
        id: 123,
        location_id: 11,
        month: "MAR",
        average_temp: 17.1
      },
      {
        id: 124,
        location_id: 11,
        month: "APR",
        average_temp: 14.9
      },
      {
        id: 125,
        location_id: 11,
        month: "MAY",
        average_temp: 12.8
      },
      {
        id: 126,
        location_id: 11,
        month: "JUN",
        average_temp: 10.6
      },
      {
        id: 127,
        location_id: 11,
        month: "JUL",
        average_temp: 9.7
      },
      {
        id: 128,
        location_id: 11,
        month: "AUG",
        average_temp: 10.4
      },
      {
        id: 129,
        location_id: 11,
        month: "SEP",
        average_temp: 11.9
      },
      {
        id: 130,
        location_id: 11,
        month: "OCT",
        average_temp: 13.4
      },
      {
        id: 131,
        location_id: 11,
        month: "NOV",
        average_temp: 14.8
      },
      {
        id: 132,
        location_id: 11,
        month: "DEC",
        average_temp: 17.0
      },
      {
        id: 133,
        location_id: 12,
        month: "JAN",
        average_temp: 17.9
      },
      {
        id: 134,
        location_id: 12,
        month: "FEB",
        average_temp: 18.4
      },
      {
        id: 135,
        location_id: 12,
        month: "MAR",
        average_temp: 16.7
      },
      {
        id: 136,
        location_id: 12,
        month: "APR",
        average_temp: 14.0
      },
      {
        id: 137,
        location_id: 12,
        month: "MAY",
        average_temp: 11.7
      },
      {
        id: 138,
        location_id: 12,
        month: "JUN",
        average_temp: 9.4
      },
      {
        id: 139,
        location_id: 12,
        month: "JUL",
        average_temp: 8.8
      },
      {
        id: 140,
        location_id: 12,
        month: "AUG",
        average_temp: 9.5
      },
      {
        id: 141,
        location_id: 12,
        month: "SEP",
        average_temp: 11.0
      },
      {
        id: 142,
        location_id: 12,
        month: "OCT",
        average_temp: 12.5
      },
      {
        id: 143,
        location_id: 12,
        month: "NOV",
        average_temp: 14.0
      },
      {
        id: 144,
        location_id: 12,
        month: "DEC",
        average_temp: 16.5
      },
      {
        id: 145,
        location_id: 13,
        month: "JAN",
        average_temp: 18.7
      },
      {
        id: 146,
        location_id: 13,
        month: "FEB",
        average_temp: 18.5
      },
      {
        id: 147,
        location_id: 13,
        month: "MAR",
        average_temp: 16.5
      },
      {
        id: 148,
        location_id: 13,
        month: "APR",
        average_temp: 13.5
      },
      {
        id: 149,
        location_id: 13,
        month: "MAY",
        average_temp: 11.1
      },
      {
        id: 150,
        location_id: 13,
        month: "JUN",
        average_temp: 8.5
      },
      {
        id: 151,
        location_id: 13,
        month: "JUL",
        average_temp: 8.0
      },
      {
        id: 152,
        location_id: 13,
        month: "AUG",
        average_temp: 9.1
      },
      {
        id: 153,
        location_id: 13,
        month: "SEP",
        average_temp: 10.9
      },
      {
        id: 154,
        location_id: 13,
        month: "OCT",
        average_temp: 12.7
      },
      {
        id: 155,
        location_id: 13,
        month: "NOV",
        average_temp: 14.5
      },
      {
        id: 156,
        location_id: 13,
        month: "DEC",
        average_temp: 16.9
      },
      {
        id: 157,
        location_id: 14,
        month: "JAN",
        average_temp: 17.0
      },
      {
        id: 158,
        location_id: 14,
        month: "FEB",
        average_temp: 17.3
      },
      {
        id: 159,
        location_id: 14,
        month: "MAR",
        average_temp: 15.9
      },
      {
        id: 160,
        location_id: 14,
        month: "APR",
        average_temp: 13.8
      },
      {
        id: 161,
        location_id: 14,
        month: "MAY",
        average_temp: 12.0
      },
      {
        id: 162,
        location_id: 14,
        month: "JUN",
        average_temp: 9.9
      },
      {
        id: 163,
        location_id: 14,
        month: "JUL",
        average_temp: 9.2
      },
      {
        id: 164,
        location_id: 14,
        month: "AUG",
        average_temp: 9.7
      },
      {
        id: 165,
        location_id: 14,
        month: "SEP",
        average_temp: 10.9
      },
      {
        id: 166,
        location_id: 14,
        month: "OCT",
        average_temp: 12.1
      },
      {
        id: 167,
        location_id: 14,
        month: "NOV",
        average_temp: 13.5
      },
      {
        id: 168,
        location_id: 14,
        month: "DEC",
        average_temp: 15.6
      },
      {
        id: 169,
        location_id: 15,
        month: "JAN",
        average_temp: 18.1
      },
      {
        id: 170,
        location_id: 15,
        month: "FEB",
        average_temp: 18.2
      },
      {
        id: 171,
        location_id: 15,
        month: "MAR",
        average_temp: 16.4
      },
      {
        id: 172,
        location_id: 15,
        month: "APR",
        average_temp: 13.7
      },
      {
        id: 173,
        location_id: 15,
        month: "MAY",
        average_temp: 11.2
      },
      {
        id: 174,
        location_id: 15,
        month: "JUN",
        average_temp: 8.5
      },
      {
        id: 175,
        location_id: 15,
        month: "JUL",
        average_temp: 7.6
      },
      {
        id: 176,
        location_id: 15,
        month: "AUG",
        average_temp: 8.8
      },
      {
        id: 177,
        location_id: 15,
        month: "SEP",
        average_temp: 10.7
      },
      {
        id: 178,
        location_id: 15,
        month: "OCT",
        average_temp: 12.7
      },
      {
        id: 179,
        location_id: 15,
        month: "NOV",
        average_temp: 14.5
      },
      {
        id: 180,
        location_id: 15,
        month: "DEC",
        average_temp: 16.7
      },
        {
          id: 181,
          location_id: 16,
          month: "JAN",
          average_temp: 18.1
        },
        {
          id: 182,
          location_id: 16,
          month: "FEB",
          average_temp: 17.9
        },
        {
          id: 183,
          location_id: 16,
          month: "MAR",
          average_temp: 16.1
        },
        {
          id: 184,
          location_id: 16,
          month: "APR",
          average_temp: 13.5
        },
        {
          id: 185,
          location_id: 16,
          month: "MAY",
          average_temp: 11.2
        },
        {
          id: 186,
          location_id: 16,
          month: "JUN",
          average_temp: 8.8
        },
        {
          id: 187,
          location_id: 16,
          month: "JUL",
          average_temp: 8.1
        },
        {
          id: 188,
          location_id: 16,
          month: "AUG",
          average_temp: 9.2
        },
        {
          id: 189,
          location_id: 16,
          month: "SEP",
          average_temp: 11.2
        },
        {
          id: 190,
          location_id: 16,
          month: "OCT",
          average_temp: 13.1
        },
        {
          id: 191,
          location_id: 16,
          month: "NOV",
          average_temp: 14.7
        },
        {
          id: 192,
          location_id: 16,
          month: "DEC",
          average_temp: 16.8
        },
        {
          id: 193,
          location_id: 17,
          month: "JAN",
          average_temp: 16.4
        },
        {
          id: 194,
          location_id: 17,
          month: "FEB",
          average_temp: 16.8
        },
        {
          id: 195,
          location_id: 17,
          month: "MAR",
          average_temp: 15.8
        },
        {
          id: 196,
          location_id: 17,
          month: "APR",
          average_temp: 13.6
        },
        {
          id: 197,
          location_id: 17,
          month: "MAY",
          average_temp: 11.7
        },
        {
          id: 198,
          location_id: 17,
          month: "JUN",
          average_temp: 9.8
        },
        {
          id: 199,
          location_id: 17,
          month: "JUL",
          average_temp: 8.9
        },
        {
          id: 200,
          location_id: 17,
          month: "AUG",
          average_temp: 9.5
        },
        {
          id: 201,
          location_id: 17,
          month: "SEP",
          average_temp: 10.7
        },
        {
          id: 202,
          location_id: 17,
          month: "OCT",
          average_temp: 11.8
        },
        {
          id: 203,
          location_id: 17,
          month: "NOV",
          average_temp: 13.1
        },
        {
          id: 204,
          location_id: 17,
          month: "DEC",
          average_temp: 15.2
        },
        {
          id: 205,
          location_id: 18,
          month: "JAN",
          average_temp: 16.6
        },
        {
          id: 206,
          location_id: 18,
          month: "FEB",
          average_temp: 16.7
        },
        {
          id: 207,
          location_id: 18,
          month: "MAR",
          average_temp: 15.3
        },
        {
          id: 208,
          location_id: 18,
          month: "APR",
          average_temp: 13.1
        },
        {
          id: 209,
          location_id: 18,
          month: "MAY",
          average_temp: 11.4
        },
        {
          id: 210,
          location_id: 18,
          month: "JUN",
          average_temp: 9.2
        },
        {
          id: 211,
          location_id: 18,
          month: "JUL",
          average_temp: 8.4
        },
        {
          id: 212,
          location_id: 18,
          month: "AUG",
          average_temp: 9.0
        },
        {
          id: 213,
          location_id: 18,
          month: "SEP",
          average_temp: 10.5
        },
        {
          id: 214,
          location_id: 18,
          month: "OCT",
          average_temp: 11.9
        },
        {
          id: 215,
          location_id: 18,
          month: "NOV",
          average_temp: 13.4
        },
        {
          id: 216,
          location_id: 18,
          month: "DEC",
          average_temp: 15.4
        },
        {
          id: 217,
          location_id: 19,
          month: "JAN",
          average_temp: 15.8
        },
        {
          id: 218,
          location_id: 19,
          month: "FEB",
          average_temp: 16.0
        },
        {
          id: 219,
          location_id: 19,
          month: "MAR",
          average_temp: 14.7
        },
        {
          id: 220,
          location_id: 19,
          month: "APR",
          average_temp: 12.6
        },
        {
          id: 221,
          location_id: 19,
          month: "MAY",
          average_temp: 10.6
        },
        {
          id: 222,
          location_id: 19,
          month: "JUN",
          average_temp: 8.4
        },
        {
          id: 223,
          location_id: 19,
          month: "JUL",
          average_temp: 7.6
        },
        {
          id: 224,
          location_id: 19,
          month: "AUG",
          average_temp: 8.4
        },
        {
          id: 225,
          location_id: 19,
          month: "SEP",
          average_temp: 9.9
        },
        {
          id: 226,
          location_id: 19,
          month: "OCT",
          average_temp: 11.2
        },
        {
          id: 227,
          location_id: 19,
          month: "NOV",
          average_temp: 12.6
        },
        {
          id: 228,
          location_id: 19,
          month: "DEC",
          average_temp: 14.5
        },
        {
          id: 229,
          location_id: 20,
          month: "JAN",
          average_temp: 17.1
        },
        {
          id: 230,
          location_id: 20,
          month: "FEB",
          average_temp: 16.9
        },
        {
          id: 231,
          location_id: 20,
          month: "MAR",
          average_temp: 14.9
        },
        {
          id: 232,
          location_id: 20,
          month: "APR",
          average_temp: 11.9
        },
        {
          id: 233,
          location_id: 20,
          month: "MAY",
          average_temp: 9.3
        },
        {
          id: 234,
          location_id: 20,
          month: "JUN",
          average_temp: 6.4
        },
        {
          id: 235,
          location_id: 20,
          month: "JUL",
          average_temp: 6.0
        },
        {
          id: 236,
          location_id: 20,
          month: "AUG",
          average_temp: 7.3
        },
        {
          id: 237,
          location_id: 20,
          month: "SEP",
          average_temp: 9.3
        },
        {
          id: 238,
          location_id: 20,
          month: "OCT",
          average_temp: 11.3
        },
        {
          id: 239,
          location_id: 20,
          month: "NOV",
          average_temp: 13.2
        },
        {
          id: 240,
          location_id: 20,
          month: "DEC",
          average_temp: 15.7
        },
        {
          id: 241,
          location_id: 21,
          month: "JAN",
          average_temp: 14.6
        },
        {
          id: 242,
          location_id: 21,
          month: "FEB",
          average_temp: 14.7
        },
        {
          id: 243,
          location_id: 21,
          month: "MAR",
          average_temp: 12.4
        },
        {
          id: 244,
          location_id: 21,
          month: "APR",
          average_temp: 9.4
        },
        {
          id: 245,
          location_id: 21,
          month: "MAY",
          average_temp: 6.2
        },
        {
          id: 246,
          location_id: 21,
          month: "JUN",
          average_temp: 3.2
        },
        {
          id: 247,
          location_id: 21,
          month: "JUL",
          average_temp: 2.5
        },
        {
          id: 248,
          location_id: 21,
          month: "AUG",
          average_temp: 4.1
        },
        {
          id: 249,
          location_id: 21,
          month: "SEP",
          average_temp: 6.6
        },
        {
          id: 250,
          location_id: 21,
          month: "OCT",
          average_temp: 8.6
        },
        {
          id: 251,
          location_id: 21,
          month: "NOV",
          average_temp: 10.6
        },
        {
          id: 252,
          location_id: 21,
          month: "DEC",
          average_temp: 12.8
        },
        {
          id: 253,
          location_id: 22,
          month: "JAN",
          average_temp: 15.4
        },
        {
          id: 254,
          location_id: 22,
          month: "FEB",
          average_temp: 15.2
        },
        {
          id: 255,
          location_id: 22,
          month: "MAR",
          average_temp: 12.7
        },
        {
          id: 256,
          location_id: 22,
          month: "APR",
          average_temp: 9.4
        },
        {
          id: 257,
          location_id: 22,
          month: "MAY",
          average_temp: 6.4
        },
        {
          id: 258,
          location_id: 22,
          month: "JUN",
          average_temp: 2.7
        },
        {
          id: 259,
          location_id: 22,
          month: "JUL",
          average_temp: 1.9
        },
        {
          id: 260,
          location_id: 22,
          month: "AUG",
          average_temp: 3.8
        },
        {
          id: 261,
          location_id: 22,
          month: "SEP",
          average_temp: 6.7
        },
        {
          id: 262,
          location_id: 22,
          month: "OCT",
          average_temp: 9.0
        },
        {
          id: 263,
          location_id: 22,
          month: "NOV",
          average_temp: 10.9
        },
        {
          id: 264,
          location_id: 22,
          month: "DEC",
          average_temp: 13.4
        },
        {
          id: 265,
          location_id: 23,
          month: "JAN",
          average_temp: 15.8
        },
        {
          id: 266,
          location_id: 23,
          month: "FEB",
          average_temp: 15.5
        },
        {
          id: 267,
          location_id: 23,
          month: "MAR",
          average_temp: 13.8
        },
        {
          id: 268,
          location_id: 23,
          month: "APR",
          average_temp: 11.1
        },
        {
          id: 269,
          location_id: 23,
          month: "MAY",
          average_temp: 8.7
        },
        {
          id: 270,
          location_id: 23,
          month: "JUN",
          average_temp: 5.9
        },
      
          {
            id: 271,
            location_id: 23,
            month: "JUL",
            average_temp: 5.4
          },
          {
            id: 272,
            location_id: 23,
            month: "AUG",
            average_temp: 6.7
          },
          {
            id: 273,
            location_id: 23,
            month: "SEP",
            average_temp: 9.1
          },
          {
            id: 274,
            location_id: 23,
            month: "OCT",
            average_temp: 10.8
          },
          {
            id: 275,
            location_id: 23,
            month: "NOV",
            average_temp: 12.4
          },
          {
            id: 276,
            location_id: 23,
            month: "DEC",
            average_temp: 14.3
          },
          {
            id: 277,
            location_id: 24,
            month: "JAN",
            average_temp: 15.1
          },
          {
            id: 278,
            location_id: 24,
            month: "FEB",
            average_temp: 15.4
          },
          {
            id: 279,
            location_id: 24,
            month: "MAR",
            average_temp: 13.8
          },
          {
            id: 280,
            location_id: 24,
            month: "APR",
            average_temp: 11.4
          },
          {
            id: 281,
            location_id: 24,
            month: "MAY",
            average_temp: 8.7
          },
          {
            id: 282,
            location_id: 24,
            month: "JUN",
            average_temp: 5.8
          },
          {
            id: 283,
            location_id: 24,
            month: "JUL",
            average_temp: 5.4
          },
          {
            id: 284,
            location_id: 24,
            month: "AUG",
            average_temp: 6.9
          },
          {
            id: 285,
            location_id: 24,
            month: "SEP",
            average_temp: 8.7
          },
          {
            id: 286,
            location_id: 24,
            month: "OCT",
            average_temp: 10.4
          },
          {
            id: 287,
            location_id: 24,
            month: "NOV",
            average_temp: 12.0
          },
          {
            id: 288,
            location_id: 24,
            month: "DEC",
            average_temp: 14.1
          },
          {
            id: 289,
            location_id: 25,
            month: "JAN",
            average_temp: 15.9
          },
          {
            id: 290,
            location_id: 25,
            month: "FEB",
            average_temp: 15.6
          },
          {
            id: 291,
            location_id: 25,
            month: "MAR",
            average_temp: 13.2
          },
          {
            id: 292,
            location_id: 25,
            month: "APR",
            average_temp: 9.8
          },
          {
            id: 293,
            location_id: 25,
            month: "MAY",
            average_temp: 7.1
          },
          {
            id: 294,
            location_id: 25,
            month: "JUN",
            average_temp: 4.1
          },
          {
            id: 295,
            location_id: 25,
            month: "JUL",
            average_temp: 3.4
          },
          {
            id: 296,
            location_id: 25,
            month: "AUG",
            average_temp: 5.2
          },
          {
            id: 297,
            location_id: 25,
            month: "SEP",
            average_temp: 7.7
          },
          {
            id: 298,
            location_id: 25,
            month: "OCT",
            average_temp: 9.9
          },
          {
            id: 299,
            location_id: 25,
            month: "NOV",
            average_temp: 11.9
          },
          {
            id: 300,
            location_id: 25,
            month: "DEC",
            average_temp: 14.3
          },
          {
            id: 301,
            location_id: 26,
            month: "JAN",
            average_temp: 17.0
          },
          {
            id: 302,
            location_id: 26,
            month: "FEB",
            average_temp: 16.5
          },
          {
            id: 303,
            location_id: 26,
            month: "MAR",
            average_temp: 13.9
          },
          {
            id: 304,
            location_id: 26,
            month: "APR",
            average_temp: 10.4
          },
          {
            id: 305,
            location_id: 26,
            month: "MAY",
            average_temp: 6.7
          },
          {
            id: 306,
            location_id: 26,
            month: "JUN",
            average_temp: 3.1
          },
          {
            id: 307,
            location_id: 26,
            month: "JUL",
            average_temp: 3.1
          },
          {
            id: 308,
            location_id: 26,
            month: "AUG",
            average_temp: 5.4
          },
          {
            id: 309,
            location_id: 26,
            month: "SEP",
            average_temp: 8.2
          },
          {
            id: 310,
            location_id: 26,
            month: "OCT",
            average_temp: 10.7
          },
          {
            id: 311,
            location_id: 26,
            month: "NOV",
            average_temp: 12.9
          },
          {
            id: 312,
            location_id: 26,
            month: "DEC",
            average_temp: 15.5
          },
          {
            id: 313,
            location_id: 27,
            month: "JAN",
            average_temp: 14.7
          },
          {
            id: 314,
            location_id: 27,
            month: "FEB",
            average_temp: 14.4
          },
          {
            id: 315,
            location_id: 27,
            month: "MAR",
            average_temp: 12.3
          },
          {
            id: 316,
            location_id: 27,
            month: "APR",
            average_temp: 9.6
          },
          {
            id: 317,
            location_id: 27,
            month: "MAY",
            average_temp: 7.2
          },
          {
            id: 318,
            location_id: 27,
            month: "JUN",
            average_temp: 4.5
          },
          {
            id: 319,
            location_id: 27,
            month: "JUL",
            average_temp: 4.0
          },
          {
            id: 320,
            location_id: 27,
            month: "AUG",
            average_temp: 5.3
          },
          {
            id: 321,
            location_id: 27,
            month: "SEP",
            average_temp: 7.5
          },
          {
            id: 322,
            location_id: 27,
            month: "OCT",
            average_temp: 9.3
          },
          {
            id: 323,
            location_id: 27,
            month: "NOV",
            average_temp: 10.9
          },
          {
            id: 324,
            location_id: 27,
            month: "DEC",
            average_temp: 13.3
          },
          {
            id: 325,
            location_id: 28,
            month: "JAN",
            average_temp: 15.2
          },
          {
            id: 326,
            location_id: 28,
            month: "FEB",
            average_temp: 15.1
          },
          {
            id: 327,
            location_id: 28,
            month: "MAR",
            average_temp: 13.9
          },
          {
            id: 328,
            location_id: 28,
            month: "APR",
            average_temp: 11.8
          },
          {
            id: 329,
            location_id: 28,
            month: "MAY",
            average_temp: 9.6
          },
          {
            id: 330,
            location_id: 28,
            month: "JUN",
            average_temp: 7.4
          },
          {
            id: 331,
            location_id: 28,
            month: "JUL",
            average_temp: 6.7
          },
          {
            id: 332,
            location_id: 28,
            month: "AUG",
            average_temp: 7.8
          },
          {
            id: 333,
            location_id: 28,
            month: "SEP",
            average_temp: 9.5
          },
          {
            id: 334,
            location_id: 28,
            month: "OCT",
            average_temp: 11.0
          },
          {
            id: 335,
            location_id: 28,
            month: "NOV",
            average_temp: 12.3
          },
          {
            id: 336,
            location_id: 28,
            month: "DEC",
            average_temp: 14.0
          },
          {
            id: 337,
            location_id: 29,
            month: "JAN",
            average_temp: 14.2
          },
          {
            id: 338,
            location_id: 29,
            month: "FEB",
            average_temp: 14.1
          },
          {
            id: 339,
            location_id: 29,
            month: "MAR",
            average_temp: 12.7
          },
          {
            id: 340,
            location_id: 29,
            month: "APR",
            average_temp: 10.5
          },
          {
            id: 341,
            location_id: 29,
            month: "MAY",
            average_temp: 8.3
          },
          {
            id: 342,
            location_id: 29,
            month: "JUN",
            average_temp: 6.0
          },
          {
            id: 343,
            location_id: 29,
            month: "JUL",
            average_temp: 5.4
          },
          {
            id: 344,
            location_id: 29,
            month: "AUG",
            average_temp: 6.6
          },
          {
            id: 345,
            location_id: 29,
            month: "SEP",
            average_temp: 8.5
          },
          {
            id: 346,
            location_id: 29,
            month: "OCT",
            average_temp: 10.0
          },
          {
            id: 347,
            location_id: 29,
            month: "NOV",
            average_temp: 11.3
          },
          {
            id: 348,
            location_id: 29,
            month: "DEC",
            average_temp: 13.3
          },
          {
            id: 349,
            location_id: 30,
            month: "JAN",
            average_temp: 15.7
          },
          {
            id: 350,
            location_id: 30,
            month: "FEB",
            average_temp: 16.1
          },
          {
            id: 351,
            location_id: 30,
            month: "MAR",
            average_temp: 15.0
          },
          {
            id: 352,
            location_id: 30,
            month: "APR",
            average_temp: 13.1
          },
          {
            id: 353,
            location_id: 30,
            month: "MAY",
            average_temp: 11.1
          },
          {
            id: 354,
            location_id: 30,
            month: "JUN",
            average_temp: 9.3
          },
          {
            id: 355,
            location_id: 30,
            month: "JUL",
            average_temp: 8.4
          },
          {
            id: 356,
            location_id: 30,
            month: "AUG",
            average_temp: 9.0
          },
          {
            id: 357,
            location_id: 30,
            month: "SEP",
            average_temp: 10.1
          },
          {
            id: 358,
            location_id: 30,
            month: "OCT",
            average_temp: 11.1
          },
          {
            id: 359,
            location_id: 30,
            month: "NOV",
            average_temp: 12.5
          },
          {
            id: 360,
            location_id: 30,
            month: "DEC",
            average_temp: 14.4
          }
        
      ])
}
