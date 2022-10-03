// sleep function stop flow of code for given time period
export const sleep = (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
