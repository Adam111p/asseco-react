export const playList = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  const secondsToDisplay = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${secondsToDisplay}`;
}
