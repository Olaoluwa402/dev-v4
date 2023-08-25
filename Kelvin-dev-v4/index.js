const daysOfTheWeek = (days) => {
  if (days == "friday" || days == "saturday" || days == "sunday") {
    return `${days} is the end of the week`;
  } else if (days == "monday" || days == "tuesday" || days == "wednesday" || days == "thursday") {
    return `${days} is a week day`;
  } else {
    return "This is not a day... stoopid";
  }
};

console.log(daysOfTheWeek("tuesday"));
console.log(daysOfTheWeek("saturday"))
