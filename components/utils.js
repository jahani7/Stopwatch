const padoTwo = (numbers) => (numbers <= 9 ? `0${numbers} ` : numbers);
export const dispalyTime = (centiseconds) => {
  let minutes = 0;
  let seconds = 0;

  if (centiseconds < 0) {
    centiseconds = 0;
  }
  if (centiseconds < 100) {
    return `00:00:${padoTwo(centiseconds)}`;
  }
  let remaincentiseconds = centiseconds % 100;
  seconds = (centiseconds - remaincentiseconds) / 100;

  if (seconds < 60) {
    return `00:${padoTwo(seconds)}:${padoTwo(remaincentiseconds)}`;
  }
  let remainSeconds = seconds % 60;
  seconds = (seconds - remainSeconds) / 60;

  return `${padoTwo(minutes)}: ${padoTwo(remainSeconds)} :  ${padoTwo(
    remaincentiseconds
  )}`;
};
