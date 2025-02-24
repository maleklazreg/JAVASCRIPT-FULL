import { formatLongDate, formatShortDate, formatRelativeDate } from './utils/formatDate.js';

// Test dates in ISO 8601 format (midnight UTC for simplicity)
const testDates = [
  '1990-09-25T00:00:00Z',
  '2007-05-27T00:00:00Z',
  '2021-04-21T00:00:00Z',
  '2002-06-03T00:00:00Z',
  '1983-01-20T00:00:00Z'
];

// Log long dates
console.log('Long dates:');
testDates.forEach(date => {
  console.log(formatLongDate(date));
});

// Log short dates
console.log('\nShort dates:');
testDates.forEach(date => {
  console.log(formatShortDate(date));
});

// Log relative dates
console.log('\nRelative dates:');
testDates.forEach(date => {
  console.log(formatRelativeDate(date));
});