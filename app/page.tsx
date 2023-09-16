import { ContentTanggal } from "@/components/contentTanggal";
import Link from "next/link";

export default function Home() {
    const todayDate = new Date();
    const dateOptions = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    const todayIDString = todayDate.toLocaleDateString("id-ID", dateOptions);

    return (
        <>
            <div className="h-screen flex flex-col items-center justify-between py-4">
                <p className="text-sm font-bold leading-7 [&:not(:first-child)]:mt-6 text-foreground">
                    Hari ini: <span className="font-normal">{todayIDString}</span>
                </p>
                <ContentTanggal />
                <p className="text-xs leading-7 [&:not(:first-child)]:mt-6 text-foreground">
                    Inspired by{" "}
                    <Link className="font-bold hover:underline" href={"https://github.com/raihanizar"}>
                        @raihanizar
                    </Link>{" "}
                    / Cek Dokumentasi API{" "}
                    <Link className="font-bold hover:underline" href={"/docs/api"}>
                        Disini
                    </Link>
                </p>
            </div>
        </>
    );
}












