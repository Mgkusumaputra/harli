// import { dateOptions, todayDate } from "@/utils/date";
// import { BASE_URL } from "@/utils/env";

// interface Holiday {
//   HOLIDAY_NAME: string;
//   HOLIDAY_DATE: string;
//   DAYS_TO_HOLIDAY: number;
// }

// export default async function getTanggalMerah() {
//   const res = await fetch(`${BASE_URL}/api/nearest`, {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//     },
//     next: {
//       revalidate: 20,
//     },
//   });

//   if (!res.ok) throw new Error("Failed to fetching data");

//   let resData = await res.json();
//   resData = resData[0];

//   let holidayDateString = resData.date; // get Holiday Date

//   const holidayDate = new Date(holidayDateString);
//   const holidayIDString: string = holidayDate.toLocaleDateString(
//     "id-ID",
//     dateOptions
//   );

//   let holidayName: string = resData.name;
//   let nearestTimeToHoliday = holidayDate.valueOf() - todayDate.valueOf();

//   const daysToHoliday = Math.ceil(nearestTimeToHoliday / (1000 * 60 * 60 * 24));

//   const nearestHoliday: Holiday = {
//     HOLIDAY_NAME: holidayName,
//     HOLIDAY_DATE: holidayIDString,
//     DAYS_TO_HOLIDAY: daysToHoliday,
//   };
//   return nearestHoliday;
// }

// // async function getTanggalMerah(): Promise<Holiday> {}
