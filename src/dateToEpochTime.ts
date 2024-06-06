export const dateToEpochTime = (dateInput: string): number => {
  const epochTime = new Date(`${dateInput}T00:00`).getTime() / 1000;
  return epochTime
}
