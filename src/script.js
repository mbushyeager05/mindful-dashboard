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
const ageOfAnniversary = calculateAgeOf("2019-01-01");
const elemAge = document.querySelector('.ageOfPerson');
elemAge.textContent = ageOfAnniversary;
elemAge.setAttribute("datetime", ageOfAnniversary);

// Days Until Event
const daysUntil = getDaysUntilEvent("2026-06-15");
const elemEvent = document.querySelector('.daysUntilEvent');
elemEvent.textContent = daysUntil;

// Streak of Days
const streak = getDayStreak("2026-02-11");
const elemStreak = document.querySelector('.streakOfDays');
elemStreak.textContent = streak;


// Coffee of the Day

const coffeeOrders = [
  // ── Cortados ──
  { drink: "Cortado", temp: "Hot", emoji: "☕" },
  { drink: "Pistachio Cortado", temp: "Hot", emoji: "🍵" },
  { drink: "Brown Sugar Oatmilk Cortado", temp: "Hot", emoji: "🤎" },

  // ── Macchiatos ──
  { drink: "Espresso Macchiato", temp: "Hot", emoji: "☕" },
  { drink: "Caramel Macchiato", temp: "Hot", emoji: "🍮" },
  { drink: "Caramel Macchiato", temp: "Iced", emoji: "🍮" },

  // ── Lattes ──
  { drink: "Caffè Latte", temp: "Hot", emoji: "☕" },
  { drink: "Pistachio Latte", temp: "Hot", emoji: "🍵" },
  { drink: "Blonde Vanilla Latte", temp: "Hot", emoji: "☕" },
  { drink: "Cinnamon Dolce Latte", temp: "Hot", emoji: "🍂" },
  { drink: "Caffè Latte", temp: "Iced", emoji: "🧊" },
  { drink: "Pistachio Latte", temp: "Iced", emoji: "🍵" },
  { drink: "Cinnamon Dolce Latte", temp: "Iced", emoji: "🍂" },

  // ── Mochas ──
  { drink: "White Chocolate Mocha", temp: "Hot", emoji: "🍫" },
  { drink: "White Chocolate Mocha", temp: "Iced", emoji: "🍫" },

  // ── Shaken Espresso ──
  { drink: "Shaken Espresso", temp: "Iced", emoji: "🧊" },
  { drink: "Brown Sugar Oatmilk Shaken Espresso", temp: "Iced", emoji: "🤎" },
  { drink: "Hazelnut Oatmilk Shaken Espresso", temp: "Iced", emoji: "🌰" },

  // ── Cold Brew ──
  { drink: "Cold Brew", temp: "Cold", emoji: "🖤" },
  { drink: "Nitro Cold Brew", temp: "Cold", emoji: "🫧" },
  { drink: "Vanilla Sweet Cream Cold Brew", temp: "Cold", emoji: "🥛" },
  { drink: "Vanilla Sweet Cream Nitro Cold Brew", temp: "Cold", emoji: "🥛" },
  { drink: "Pistachio Cream Cold Brew", temp: "Cold", emoji: "🍵" },
  { drink: "Salted Caramel Cream Cold Brew", temp: "Cold", emoji: "🍮" },

  // ── Iced Coffee ──
  { drink: "Coffee", temp: "Iced", emoji: "🧊" },

  // ── Brewed Coffee ──
  { drink: "Blonde Roast", temp: "Hot", emoji: "☀️" },
  { drink: "Pike Place Roast", temp: "Hot", emoji: "☕" },
  { drink: "Starbucks 1971 Dark Roast", temp: "Hot", emoji: "🖤" },
];

function getDailyCoffee() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return coffeeOrders[seed % coffeeOrders.length];
}

const coffee = getDailyCoffee();
document.getElementById("coffee-drink").textContent = `${coffee.emoji} ${coffee.drink}`;
document.getElementById("coffee-details").textContent = coffee.temp;



// Quote of the Day
const dailyQuotes = [
  { quote: "Design is thinking made visual.", author: "Saul Bass" },
  { quote: "The details are not the details. They make the design.", author: "Charles Eames" },
  { quote: "Good design is obvious. Great design is transparent.", author: "Joe Sparano" },
  { quote: "Design everything on purpose.", author: "Unknown" },
  { quote: "Design is not just what it looks like. Design is how it works.", author: "Steve Jobs" },
  { quote: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { quote: "Make it simple, but significant.", author: "Don Draper" },
  { quote: "Every great design begins with an even better story.", author: "Lorinda Mamo" },
  { quote: "The best design is the one you don't notice.", author: "Unknown" },
  { quote: "You can't use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
  { quote: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  { quote: "Everything is designed. Few things are designed well.", author: "Brian Reed" },
  { quote: "A designer knows perfection is achieved not when there is nothing left to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
  { quote: "Design creates culture. Culture shapes values. Values determine the future.", author: "Robert L. Peters" },
  { quote: "The purpose of design is to solve problems.", author: "Unknown" },
  { quote: "Make it work. Make it right. Make it beautiful.", author: "Unknown" },
  { quote: "Good design is good business.", author: "Thomas Watson Jr." },
  { quote: "Design is where science and art break even.", author: "Robin Mathew" },
  { quote: "Create with intention.", author: "Unknown" },
  { quote: "The life of a designer is a life of fight — fight against the ugliness.", author: "Massimo Vignelli" },
];

function getDailyQuote() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return dailyQuotes[seed % dailyQuotes.length];
}

const quote = getDailyQuote();
document.getElementById("daily-quote").textContent = `"${quote.quote}"`;
document.getElementById("quote-author").textContent = `— ${quote.author}`;