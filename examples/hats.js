'use strict';

const scribble = require('../');
let clip = scribble.clip({
  notes: 'c4',
  pattern: '[xxxx]'.repeat(4),
  accent: 'x--x',
  sizzle: true,
});

scribble.midi(clip);
// This will create a file called music.mid in the same location as you run this script
// Import this file in a music production software and play it with a high hats sample
