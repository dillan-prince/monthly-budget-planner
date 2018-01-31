export default (account, endDate) => {
  const { dateCreated, events } = account;

  const accountCreatedOn = new Date(Date.parse(dateCreated));
  const datesToShow = getDatesToShow(endDate);

  // Discard time on date account was created
  const startDate = new Date(
    accountCreatedOn.getFullYear(),
    accountCreatedOn.getMonth(),
    accountCreatedOn.getDate()
  );

  const actualEndDate = datesToShow[datesToShow.length - 1].date;

  const datesBetween = getDatesBetween(startDate, actualEndDate);
  const eventDictionary = getEventDictionary(events);

  const history = {};
  let accountValue = account.initialValue;

  for (let i = 0; i < datesBetween.length; i++) {
    const currentDate = datesBetween[i];
    let value = 0;

    const currentDateEvents = eventDictionary[currentDate.getDate()];
    if (currentDateEvents) {
      value = currentDateEvents.reduce((total, current) => {
        return total + current;
      });
    }

    accountValue += value;
    history[currentDate] = { date: currentDate, value: accountValue, events: currentDateEvents };
  }

  return datesToShow.map((dateToShow) => {
    return {
      date: dateToShow.date,
      isThisMonth: dateToShow.isThisMonth,
      isToday: dateToShow.isToday,
      value: history[dateToShow.date] ? history[dateToShow.date].value : null,
      events: history[dateToShow.date] ? history[dateToShow.date].events : null
    };
  });
};

function getDatesToShow(lastDayOfThisMonth) {
  const today = new Date();
  const lastDayOfLastMonth = new Date(
    lastDayOfThisMonth.getFullYear(),
    lastDayOfThisMonth.getMonth(),
    0
  );
  const firstDayOfThisMonth = new Date(
    lastDayOfThisMonth.getFullYear(),
    lastDayOfThisMonth.getMonth(),
    1
  );

  let days = [];

  for (let i = firstDayOfThisMonth.getDay() - 1; i >= 0; i--) {
    days.push({
      //date: lastDayOfLastMonth.getDate() - i,
      date: new Date(
        lastDayOfLastMonth.getFullYear(),
        lastDayOfLastMonth.getMonth(),
        lastDayOfLastMonth.getDate() - i
      ),
      isThisMonth: false,
      isToday: false
    });
  }

  for (let i = 1; i <= lastDayOfThisMonth.getDate(); i++) {
    days.push({
      date: new Date(firstDayOfThisMonth.getFullYear(), firstDayOfThisMonth.getMonth(), i),
      isThisMonth: true,
      isToday: i === today.getDate()
    });
  }

  for (let i = 1; i < 7 - lastDayOfThisMonth.getDay(); i++) {
    days.push({
      date: new Date(lastDayOfThisMonth.getFullYear(), lastDayOfThisMonth.getMonth() + 1, i),
      isThisMonth: false,
      isToday: false
    });
  }

  return days;
}

function getDatesBetween(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

function getEventDictionary(events) {
  const eventDictionary = {};

  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const multiplier = event.type === 'income' ? 1 : -1;

    if (eventDictionary[events[i].date]) {
      eventDictionary[event.date].push(multiplier * event.value);
    } else {
      eventDictionary[event.date] = [multiplier * event.value];
    }
  }

  return eventDictionary;
}
