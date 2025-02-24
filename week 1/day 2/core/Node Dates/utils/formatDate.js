import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';

// Extend Day.js with the relativeTime plugin
dayjs.extend(relativeTime);

// Function to format ISO date into "dddd MMMM D, YYYY" (e.g., "Tuesday September 25, 1990")
export function formatLongDate(isoDate) {
  return dayjs(isoDate).format('dddd MMMM D, YYYY');
}

// Function to format ISO date into "MM/DD/YYYY" (e.g., "09/25/1990")
export function formatShortDate(isoDate) {
  return dayjs(isoDate).format('MM/DD/YYYY');
}

// Function to format ISO date into relative time (e.g., "33 years ago")
export function formatRelativeDate(isoDate) {
  return dayjs(isoDate).fromNow();
}