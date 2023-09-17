import { dateOptions, todayDate } from "@/utils/date";
import { BASE_URL } from "@/utils/env";

type Holiday = {
  HOLIDAY_NAME: string;
  HOLIDAY_DATE: string;
  DAYS_TO_HOLIDAY: number;
};

async function getTanggalMerah() {
  try {
    const res = await fetch(`${BASE_URL}/api/nearest`);
    const data = await res.json();
    const getObject = data[0];

    let holidayDateString = getObject.date; // get Holiday Date

    const holidayDate = new Date(holidayDateString);
    const holidayIDString = holidayDate.toLocaleDateString(
      "id-ID",
      dateOptions
    );

    let holidayName = getObject.name;
    let nearestTimeToHoliday = holidayDate.valueOf() - todayDate.valueOf();

    const daysToHoliday = Math.ceil(
      nearestTimeToHoliday / (1000 * 60 * 60 * 24)
    );

    const nearestHoliday: Promise<any> = {
      HOLIDAY_NAME: holidayName,
      HOLIDAY_DATE: holidayIDString,
      DAYS_TO_HOLIDAY: daysToHoliday,
    };
    return nearestHoliday;
  } catch (error) {
    return console.log(error);
  }
}

function holidayDateCountdown(days: number) {
  if (days > 5) {
    return `Kalem, liburnya masih ${days} hari lagi..`;
  } else if (days > 1) {
    return `Get Ready! ${days} hari lagi liburan..`;
  } else {
    return `Horeeee, besok libur!`;
  }
}

function holidayAlert(holidayDateString: any) {
  const dayString = holidayDateString.split(", ")[0];
  if (dayString === "Selasa" || dayString === "Kamis") {
    return "Tanggal merah kejepit tuh, siapkan libur tambahan 😎";
  }
  if (dayString === "Jumat" || dayString === "Senin") {
    return "Asik long weekend nich 😏";
  } else if (dayString === "rabu") {
    return "Semangat ya liburnya ditengah-tengah";
  }
}

export async function ContentTanggal() {
  const holiday = await getTanggalMerah();
  return (
    <div className="flex flex-col justify-between gap-3 items-center font-bold text-foreground">
      <h1 className="text-md">Kapan Tanggal Merah Terdekat?</h1>
      <div className="flex flex-col items-center text-primary">
        <p className="text-4xl">{holiday.HOLIDAY_NAME}</p>
        <p className="text-2xl">{holiday.HOLIDAY_DATE}</p>
      </div>
      <p className="text-md">{holidayDateCountdown(holiday.DAYS_TO_HOLIDAY)}</p>
      <div className="bg-primary/60 text-primary-foreground mt-6 inline-flex items-center rounded-md border px-3 py-1 text-sm font-semibold">
        {holidayAlert(holiday.HOLIDAY_DATE)}
      </div>
    </div>
  );
}
