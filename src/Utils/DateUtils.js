function getDate(date) {
  if (typeof date === "string") {
    return new Date(Date.parse(date));
  }
  if (typeof date === "number") {
    return new Date(date);
  }
  if (!date) {
    return new Date(Date.now());
  }
  return;
}

function dateDifference(fromDate, toDate) {
  const from = getDate(fromDate);
  const to = getDate(toDate);
  const diffInMS = to - from;
  return diffInMS;
}

function formatTimeInMS(timeInMs, format) {
  const diffInSeconds = (timeInMs / 1000) | 0;

  const diffInMinutes = (diffInSeconds / 60) | 0;
  const remainingMinutes = diffInMinutes % 60;

  const diffInHours = (diffInMinutes / 60) | 0;
  const remainingHours = diffInHours % 24;

  const diffInDays = (diffInHours / 24) | 0;
  const remainingDays = diffInDays % 365;

  const diffInYears = (diffInDays / 365) | 0;

  let formatedTime = "";

  if (diffInDays > 365) {
    formatedTime = diffInYears + " Years and " + remainingDays + " Days";
  } else {
    formatedTime = diffInDays + " Days and " + remainingHours + " Hours";
  }

  return formatedTime;
}

export function timeElapsed(fromDate, toDate) {
  return formatTimeInMS(dateDifference(fromDate, toDate));
}

// const myAge = formatTimeInMS(dateDifference("1993/07/25"));
// const timeElapsedSinceFasting = formatTimeInMS(dateDifference("2018/12/24"));

// console.log("Age: ", myAge);
// console.log("Fasting for: ", timeElapsedSinceFasting);
