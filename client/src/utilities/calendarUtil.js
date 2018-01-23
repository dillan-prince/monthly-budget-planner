const today = new Date();

const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
const firstDayOfThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
const lastDayOfThisMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

let days = [];

for (let i = firstDayOfThisMonth.getDay() - 1; i >= 0; i--) {
  days.push({
    date: lastDayOfLastMonth.getDate() - i,
    isThisMonth: false,
    isToday: false
  });
}

for (let i = 1; i <= lastDayOfThisMonth.getDate(); i++) {
  days.push({
    date: i,
    isThisMonth: true,
    isToday: i === today.getDate()
  });
}

for (let i = 1; i < 7 - lastDayOfThisMonth.getDay(); i++) {
  days.push({
    date: i,
    isThisMonth: false,
    isToday: false
  });
}

export default days;
