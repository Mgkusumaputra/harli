"use client";

import EndpointCard from "@/components/docs/endpointCard";
import {
  codeString1,
  codeString2,
  codeString3,
  codeString4,
  codeString5,
} from "@/constant/responseExample";
import { BASE_URL } from "@/utils/env";

export default function page() {
  return (
    <div className="h-screen max-w-2xl flex flex-col gap-6 items-center mx-auto py-4">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          API Documentation
        </h1>
        <div className="flex flex-col gap-2 text-base text-center leading-7 text-foreground">
          <p>Halo para pengoding 🎉</p>
          <p>
            Yuk, kenalan sama API Tanggal Merah dari Harli! Buat kamu yang
            pengen tau kapan waktu yang pas buat liburan atau cuma mau nandain
            kalender, kita punya jawabannya!
          </p>
        </div>
        <div className="bg-primary text-primary-foreground rounded-md py-2 px-4 w-full">
          <p className="font-semibold">
            API Base URL: <span className="font-normal">{BASE_URL}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center w-full">
        <EndpointCard
          title={"Seluruh Hari Libur"}
          method={"GET"}
          endpoint={"api"}
          reqExample={"api"}
          responseEx={codeString1}
        />
        <EndpointCard
          title={"Hari Libur Terdekat"}
          method={"GET"}
          endpoint={"api/nearest"}
          reqExample={"api/nearest"}
          responseEx={codeString5}
        />
        <EndpointCard
          title={"Filter Tahun"}
          method={"GET"}
          endpoint={`api?year="yyyy"`}
          reqExample={`api?year="2024"`}
          responseEx={codeString2}
        />
        <EndpointCard
          title={"Filter Bulan"}
          method={"GET"}
          endpoint={`api?month="mm"`}
          reqExample={`api?month="01"`}
          responseEx={codeString3}
        />
        <EndpointCard
          title={"Filter Cuti Bersama"}
          method={"GET"}
          endpoint={`api?includeCuti=true`}
          reqExample={`api?month="2024"&includeCuti=true`}
          responseEx={codeString4}
        />
      </div>
    </div>
  );
}
