export const datetimeToEpochTime = (datetimeInput: string): number => {
  const epochTime = new Date(datetimeInput).getTime() / 1000;
  console.log(epochTime);
  return epochTime;
};
