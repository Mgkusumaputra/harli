export const todayDate = new Date();
export const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
} as const;

const todayIDString = todayDate.toLocaleDateString("id-ID", dateOptions);

export const dateToday = todayIDString;
