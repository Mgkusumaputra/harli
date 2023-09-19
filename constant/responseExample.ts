const codeString1 = `[
    {
      "date": "2023-01-01",
      "name": "Tahun Baru 2023",
      "include_cuti": false
    },
    {
      "date": "2023-01-22",
      "name": "Tahun Baru Imlek 2575 Kongzili",
      "include_cuti": true
    },
    {
      "date": "2023-02-18",
      "name": "Isra Mikraj Nabi Muhammad SAW",
      "include_cuti": false
    },
    {
      "date": "2023-03-22",
      "name": "Hari Suci Nyepi Tahun Baru Saka 1945",
      "include_cuti": true
    },
    {
      "date": "2023-04-07",
      "name": "Wafat Isa Almasih",
      "include_cuti": false
    },
    {
      "date": "2023-04-22",
      "name": "Hari Raya Idul Fitri 1444 Hijriyah",
      "include_cuti": true
    },
    {
      "date": "2023-05-01",
      "name": "Hari Buruh Internasional",
      "include_cuti": false
    },
    {
      "date": "2023-05-18",
      "name": "Kenaikan Isa Almasih",
      "include_cuti": false
    },
    {
      "date": "2023-06-01",
      "name": "Hari Lahir Pancasila",
      "include_cuti": false
    },
    {
      "date": "2023-06-04",
      "name": "Hari Raya Waisak 2566",
      "include_cuti": true
    },
    {
      "date": "2023-06-29",
      "name": "Hari Raya Idul Adha 1444 Hijriyah",
      "include_cuti": false
    },
    {
      "date": "2023-07-19",
      "name": "Tahun Baru Islam 1445 Hijriyah",
      "include_cuti": false
    },
    {
      "date": "2023-08-17",
      "name": "Hari Kemerdekaan Republik Indonesia",
      "include_cuti": false
    },
    {
      "date": "2023-09-28",
      "name": "Maulid Nabi Muhammad SAW",
      "include_cuti": false
    },
    {
      "date": "2023-12-25",
      "name": "Hari Raya Natal",
      "include_cuti": true
    }
  ]`;

const codeString2 = `[
    {
      "date": "2024-01-01",
      "name": "Tahun Baru 2024",
      "include_cuti": false
    },
    {
      "date": "2024-02-08",
      "name": "Isra Mikraj Nabi Muhammad SAW",
      "include_cuti": false
    },
    {
      "date": "2024-02-10",
      "name": "Tahun Baru Imlek 2575 Kongzili",
      "include_cuti": true
    },
    {
      "date": "2024-03-11",
      "name": "Hari Suci Nyepi Tahun Baru Saka 1946",
      "include_cuti": true
    },
    {
      "date": "2024-03-29",
      "name": "Wafat Isa Al Masih",
      "include_cuti": false
    },
    {
      "date": "2024-03-31",
      "name": "Hari Paskah",
      "include_cuti": false
    },
    {
      "date": "2024-04-10",
      "name": "Hari Raya Idul Fitri 1445 Hijriah",
      "include_cuti": true
    },
    {
      "date": "2024-04-11",
      "name": "Hari Raya Idul Fitri 1445 Hijriah",
      "include_cuti": true
    },
    {
      "date": "2024-05-01",
      "name": "Hari Buruh Internasional",
      "include_cuti": false
    },
    {
      "date": "2024-05-09",
      "name": "Kenaikan Isa Al Masih",
      "include_cuti": true
    },
    {
      "date": "2024-05-23",
      "name": "Hari Raya Waisak 2568 BE",
      "include_cuti": true
    },
    {
      "date": "2024-06-01",
      "name": "Hari Lahir Pancasila",
      "include_cuti": false
    },
    {
      "date": "2024-06-17",
      "name": "Hari Raya Iduladha 1445 Hijriah",
      "include_cuti": true
    },
    {
      "date": "2024-07-07",
      "name": "Tahun Baru Islam 1446 Hijriah",
      "include_cuti": false
    },
    {
      "date": "2024-08-17",
      "name": "Hari Kemerdekaan Republik Indonesia",
      "include_cuti": false
    },
    {
      "date": "2024-09-16",
      "name": "Maulid Nabi Muhammad SAW",
      "include_cuti": false
    },
    {
      "date": "2024-12-25",
      "name": "Hari Raya Natal",
      "include_cuti": true
    }
  ]`;

const codeString3 = `[
    {
      "date": "2023-01-01",
      "name": "Tahun Baru 2023",
      "include_cuti": false
    },
    {
      "date": "2023-01-22",
      "name": "Tahun Baru Imlek 2575 Kongzili",
      "include_cuti": true
    }
  ]`;

const codeString4 = `[
    {
      "date": "2024-02-10",
      "name": "Tahun Baru Imlek 2575 Kongzili",
      "include_cuti": true
    },
    {
      "date": "2024-03-11",
      "name": "Hari Suci Nyepi Tahun Baru Saka 1946",
      "include_cuti": true
    },
    {
      "date": "2024-04-10",
      "name": "Hari Raya Idul Fitri 1445 Hijriah",
      "include_cuti": true
    },
    {
      "date": "2024-04-11",
      "name": "Hari Raya Idul Fitri 1445 Hijriah",
      "include_cuti": true
    },
    {
      "date": "2024-05-09",
      "name": "Kenaikan Isa Al Masih",
      "include_cuti": true
    },
    {
      "date": "2024-05-23",
      "name": "Hari Raya Waisak 2568 BE",
      "include_cuti": true
    },
    {
      "date": "2024-06-17",
      "name": "Hari Raya Iduladha 1445 Hijriah",
      "include_cuti": true
    },
    {
      "date": "2024-12-25",
      "name": "Hari Raya Natal",
      "include_cuti": true
    }
  ]`;

const codeString5 = `[
    {
      "date": "2023-09-28",
      "name": "Maulid Nabi Muhammad SAW",
      "include_cuti": false
    }
  ]`;

export { codeString1, codeString2, codeString3, codeString4, codeString5 };
