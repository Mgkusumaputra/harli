import { ContentTanggal } from "@/components/contentTanggal";
import { dateToday } from "@/utils/date";
import Link from "next/link";

export default function Home() {
    return (
            <div className="h-screen flex flex-col items-center justify-between py-4">
                <p className="text-sm font-bold leading-7 [&:not(:first-child)]:mt-6 text-foreground">
                    Hari ini: <span className="font-normal">{dateToday}</span>
                </p>
                <ContentTanggal />
                <p className="text-xs leading-7 [&:not(:first-child)]:mt-6 text-foreground">
                    Inspired by{" "}
                    <Link className="font-bold hover:underline" href={"https://github.com/raihanizar"}>
                        @raihanizar
                    </Link>{" "}
                    / Cek Dokumentasi API{" "}
                    <Link className="font-bold hover:underline" href={"/api-docs"}>
                        Disini
                    </Link>
                </p>
            </div>
    );
}












