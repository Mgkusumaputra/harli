export function ContentTanggal() {
    return (
        <>
            <div className="flex flex-col justify-between gap-3 items-center font-bold text-foreground">
                <h1 className="text-md">Kapan Tanggal Merah Terdekat?</h1>
                <div className="flex flex-col items-center text-primary">
                    <p className="text-4xl">Senin, 28 September 2070</p>
                    <p className="text-2xl">Maulid Nabi Muhammad SAW</p>
                </div>
                <p className="text-md">Kalem, liburnya masih 20 hari lagi..</p>
                <div className="bg-primary/60 text-primary-foreground mt-6 inline-flex items-center rounded-md border px-3 py-1 text-sm font-semibold">
                    {/* <p>Tanggal merah kejepit tuh, siapkan libur tambahan 😎</p> */}
                    <p>Asik long weekend nich 😏</p>
                    {/* <p>Semangat ya liburnya ditengah-tengah</p> */}
                </div>
            </div>
        </>
    );
}
