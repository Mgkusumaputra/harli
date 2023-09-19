import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

const __dirname = path.join(process.cwd(), "/data/");

export async function GET(request: Request) {
  try {
    const checkParams = new URL(request.url);
    const yearParams = checkParams.searchParams.get("year");
    const monthParams = checkParams.searchParams.get("month");
    const includeCutiParams = checkParams.searchParams.get("includeCuti");

    let result = [];
    let currentYear = new Date().getFullYear();
    let data = await fs.readFile(
      path.join(__dirname, `${currentYear}.json`),
      "utf-8"
    );

    if (yearParams) {
      currentYear = parseInt(yearParams);
      data = await fs.readFile(
        path.join(__dirname, `${yearParams}.json`),
        "utf-8"
      );
    }

    let parseResult = JSON.parse(data);

    if (monthParams && currentYear) {
      result = parseResult.filter((item: { date: string | number | Date }) => {
        if (new Date(item.date).getMonth() + 1 === parseInt(monthParams)) {
          return item;
        }
      });
    } else if (includeCutiParams) {
      result = parseResult.filter((item: { include_cuti: boolean }) => {
        if (item.include_cuti === true) {
          return item;
        }
      });
    } else if (currentYear) {
      result = parseResult;
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
