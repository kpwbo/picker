const express = require('express');

const songs = [{
  title: 'Music S.T.A.R.T!!',
  type: 'all'
}, {
  title: 'LOVELESS WORLD',
  type: 'all'
}, {
  title: 'Takaramonozu',
  type: 'all'
}, {
  title: 'Paradise Live',
  type: 'all'
}, {
  title: 'Sore wa Bokutachi no Kiseki',
  type: 'all'
}, {
  title: 'Datte Datte Aa Mujou',
  type: 'all'
}, {
  title: 'Donna Toki mo Zutto',
  type: 'all'
}, {
  title: 'COLORFUL VOICE',
  type: 'all'
}, {
  title: 'Yume no Tobira',
  type: 'all'
}, {
  title: 'SENTIMENTAL StepS',
  type: 'all'
}, {
  title: 'Dancing stars on me!',
  type: 'all'
}, {
  title: 'KiRa-KiRa Sensation!',
  type: 'all'
}, {
  title: 'Happy maker!',
  type: 'all'
}, {
  title: 'Shangri-La Shower',
  type: 'all'
}, {
  title: 'Ruteshi Kisuki Shiteru',
  type: 'all'
}, {
  title: 'Mi wa µ\'sic no Mi',
  type: 'all'
}, {
  title: 'Super LOVE=Super LIVE!',
  type: 'all'
}, {
  title: 'Angelic Angel',
  type: 'all'
}, {
  title: 'SUNNY DAY SONG',
  type: 'all'
}, {
  title: 'Bokutachi wa Hitotsu no Hikari',
  type: 'all'
}, {
  title: 'Future style',
  type: 'secondyears'
}, {
  title: 'Pure girls project',
  type: 'printemps'
}, {
  title: 'UNBALANCED LOVE',
  type: 'printemps'
}, {
  title: 'Eein Friends',
  type: 'printemps'
}, {
  title: 'Nightingale Love Song',
  type: 'printemps'
}, {
  title: 'WAO-WAO Powerful day!',
  type: 'printemps'
}, {
  title: 'NO EXIT ORION',
  type: 'printemps'
}, {
  title: 'HEART to HEART!',
  type: 'all'
}, {
  title: 'Arashi no Naka no Koi dakara',
  type: 'all'
}, {
  title: 'MOMENT RING',
  type: 'all'
}, {
  title: 'Sayounara e Sayonara!',
  type: 'all'
}, {
  title: 'Love wing bell',
  type: 'six'
}, {
  title: '？←HEARTBEAT',
  type: 'thirdyears'
}, {
  title: 'Cutie Panther',
  type: 'bibi'
}, {
  title: 'Natsu, Owaranai de.',
  type: 'bibi'
}, {
  title: 'Fuyu ga Kureta Yokan',
  type: 'bibi'
}, {
  title: 'Trouble Busters',
  type: 'bibi'
}, {
  title: 'Sakkaku CROSSROADS',
  type: 'bibi'
}, {
  title: 'PSYCHIC FIRE',
  type: 'bibi'
}, {
  title: 'Binetsu Kara Mystery',
  type: 'lilywhite'
}, {
  title: 'Kimi no Kuse ni!',
  type: 'lilywhite'
}, {
  title: 'Aki no Anata no Sora Tooku',
  type: 'lilywhite'
}, {
  title: 'Futari Happiness',
  type: 'lilywhite'
}, {
  title: 'Omoide Ijou ni Naritakute',
  type: 'lilywhite'
}, {
  title: 'Shunjou Romantic',
  type: 'lilywhite'
}, {
  title: 'Hello, Hoshi o Kazoete',
  type: 'firstyears'
}];

const types = {
  all: ['Honoka', 'Eli', 'Kotori', 'Umi', 'Rin', 'Maki', 'Nozomi', 'Hanayo', 'Nico'],
  firstyears: ['Rin', 'Maki', 'Hanayo'],
  secondyears: ['Honoka', 'Kotori', 'Umi'],
  thirdyears: ['Eli', 'Nozomi', 'Nico'],
  printemps: ['Honoka', 'Kotori', 'Hanayo'],
  bibi: ['Eli', 'Maki', 'Nico'],
  lilywhite: ['Umi', 'Rin', 'Nozomi'],
  six: ['Eli', 'Rin', 'Maki', 'Nozomi', 'Hanayo', 'Nico']
};

const combinations = songs.map((song) => {
  return types[song.type].map((singer) => {
    return {
      singer,
      song: song.title
    };
  });
}).reduce((arr, val) => arr.concat(val), []);

function shuffle(a) {
  for (let i = a.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

shuffle(combinations);

const app = express();

let currentSongIndex = 0;

app.get('/', (req, res) => {
  const song = combinations[currentSongIndex];
  currentSongIndex = (currentSongIndex + 1) % combinations.length;
  res.send(song);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
