import { initClock } from './clock.js';
import { initDate } from './date.js';
import { calculateAgeOf } from './calculateAgeOf.js';
import { getDaysUntilEvent } from './daysTillEvent.js';
import { getDayStreak } from './streakOfDays.js';

// Clock
initClock();

// Date
initDate();

// Anniversary
const ageOfAnniversary = calculateAgeOf("2000-01-01");
const elemAge = document.querySelector('.ageOfPerson');
elemAge.textContent = ageOfAnniversary;
elemAge.setAttribute("datetime", ageOfAnniversary);

// Days Until Event
const daysUntil = getDaysUntilEvent("2026-06-15");
const elemEvent = document.querySelector('.daysUntilEvent');
elemEvent.textContent = daysUntil;

// Streak of Days
const streak = getDayStreak("2026-01-01");
const elemStreak = document.querySelector('.streakOfDays');
elemStreak.textContent = streak;
