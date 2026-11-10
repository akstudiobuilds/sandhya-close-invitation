// EDIT THIS FILE. Every name, date, place and line of copy on the invitation lives here.

window.INVITE = {
  groom: 'Sravan Kumar',
  bride: 'Sandhya',
  shortNames: 'Sravan Kumar & Sandhya', // used in the sign-off
  city: 'Hyderabad',
  muhurtham: '2026-11-26T09:28:00+05:30', // drives the countdown

  // The couple's photo at the top of the letter, e.g. 'images/couple-photo.webp' (portrait, 2:3).
  // Blank shows an empty frame in its place.
  photo: '',

  // Optional background song. Put the file in this folder, e.g. './song.mp3'. Blank hides the music button.
  music: 'song.mp3',
  musicStart: 44, // seconds into the song where it begins, and where it loops back to
  // After the letter opens, the page drifts down by itself at this many pixels a second. 0 turns it off.
  // It stops for good the moment a guest touches, scrolls or taps.
  autoScroll: 40,

  places: {
    aarwa: { name: 'Aarwa Retreat Farm Stays', detail: 'Koyalagudem, Choutuppal', map: 'https://maps.app.goo.gl/Xo3HqKFcCWT9Ur7F6' },
    pellikuthuru: { name: 'Bride’s Home', detail: '', map: 'https://www.google.com/maps?q=17.425251007080078,78.57561492919922&z=17&hl=en' },
    hall: { name: 'ME Reddy Function Hall', detail: 'Sahara Road, Opp. Sushma Theatre, Vanasthalipuram', map: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x3bcba1fdfc5623bf:0x96d49e22e71cbe09?hl=en' },
    vratham: { name: 'Vratham Venue', detail: '', map: 'https://www.google.com/maps?q=17.334638595581055,78.59403228759766&z=17&hl=en' },
  },

  // In date order. Time is 24-hour, India time; `end` is optional, and `times` lists several parts of one day on a single card. Each event shows the map for its own place.
  events: [
    { date: '2026-11-22', time: '15:00', title: 'Haldi & Sangeeth', telugu: 'హల్దీ & సంగీత్', place: 'aarwa', note: '', times: [['Haldi', '15:00', '18:00'], ['Sangeeth', '20:00', '23:00']] },
    { date: '2026-11-25', time: '00:00', title: 'Pellikuthuru', telugu: 'పెళ్లికూతురు', place: 'pellikuthuru', note: '' },
    { date: '2026-11-26', time: '09:28', title: 'The Marriage', telugu: 'సుముహూర్తం', place: 'hall', main: true, note: 'Lunch from 12:00 noon onwards', line: 'Dhanassu Lagnam.' },
    { date: '2026-11-27', time: '07:00', title: 'Satyanarayana Vratham', telugu: 'సత్యనారాయణ వ్రతం', place: 'vratham', note: '' },
  ],

  text: {
    whisper: '',
    addressTo: 'To Dearest Family',
    hint: 'Tap the seal',
    salutation: 'With love, we invite you to the wedding celebrations of',
    letterHello: 'With love,', // on the letter as it slides out of the envelope
    letter: 'You already knew. You probably helped. The big invitation went out to everyone, but this one is just for the people we want beside us from the first pinch of turmeric to the prasadam.',
    scheduleTitle: 'Mark your calendars',
    closingTitle: 'See you on the 22nd.',
    signoff: 'With all our love,',
  },
};
