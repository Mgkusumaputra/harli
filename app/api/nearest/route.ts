import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

const __dirname = path.join(process.cwd(), "/data/");

export async function GET() {
  try {
    let result: any[] = [];
    let currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    let data = await fs.readFile(
      path.join(__dirname, `${currentYear}.json`),
      "utf-8"
    );

    let parseResult = JSON.parse(data);

    result = parseResult.filter((item: { date: string | number | Date }) => {
      if ((new Date(item.date).getMonth() + 1) === currentMonth) {
        return item;
      }
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
