export default (account, endDate) => {
  const { dateCreated, events } = account;

  const accountCreatedOn = new Date(Date.parse(dateCreated));

  // Discard time on date account was created
  const startDate = new Date(
    accountCreatedOn.getFullYear(),
    accountCreatedOn.getMonth(),
    accountCreatedOn.getDate()
  );

  const datesBetween = getDatesBetween(startDate, endDate);
  const eventDictionary = getEventDictionary(events);

  const history = [];
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
    history.push({ date: currentDate, value: accountValue });
  }

  return history;
};

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
