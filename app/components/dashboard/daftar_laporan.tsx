export interface DaftarLaporanProps {
  id: string;
  nama: string;
  status: string;
  prioritas: number;
  gambar: string;
  children: React.ReactNode;
}

export function DaftarLaporan({ nama, status, prioritas, gambar, children }:DaftarLaporanProps) {
    return (
        <div className="shadow flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
            <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={gambar} alt="" />
            <div className="space-y-2 text-center sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg font-semibold text-black">{nama}</p>
                    <p className="font-medium text-gray-500">STATUS : {status}</p>
                    <p className="font-medium text-gray-500">PRIORITAS : {prioritas}</p>
                </div>
            </div>
        </div>
    );
}