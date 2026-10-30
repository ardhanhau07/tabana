"use client"

import { DaftarLaporan, DaftarLaporanProps } from '@/app/components/dashboard/daftar_laporan'
import React from 'react'
import { SidebarMenu, SidebarProps, Sidebar } from '@/app/components/common/sidebar'

interface Tab {
  title: string
  link: string,
  index: number
}

export default function Dashboard() {
    const tabs: Tab[] = [
        {
            title: 'Baru',
            link: '#0',
            index : 1
        },
        {
            title: 'Ditangani',
            link: '#0',
            index : 2
        },
        {
            title: 'Selesai',
            link: '#0',
            index : 3
        },
        {
            title: 'Ditolak',
            link: '#0',
            index : 4
        },
    ]
    const laporan_baru: DaftarLaporanProps[] = [
        {
            id:"12",
            nama:"Nama Laporan1",
            status:'Bahaya',
            prioritas:1,
            gambar:"AAAA",
            children: <div></div>
        },
        {
            id:"12",
            nama:"Nama Laporan2",
            status:'Bahaya',
            prioritas:1,
            gambar:"AAAA",
            children: <div></div>
        }
    ]
    const side_menus : SidebarMenu[] = [
        {
            menu: "Daftar Laporan",
            link: "#"
        },
        {
            menu: "Prioritas",
            link: "#"
        },
        {
            menu: "Penugasan",
            link: "#"
        },
        {
            menu: "Eskalasi",
            link: "#"
        },
        {
            menu: "Tempat Evakuasi",
            link: "#"
        },
    ]
    const [openTab, setOpenTab] = React.useState(1);
    
    return (
        <div>
            <Sidebar id="aaaa" menus={side_menus}>
            </Sidebar>
            <div className="text-sm font-medium text-center text-body ">
                <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
                    {tabs.map((tab, index) => (
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center" key={tab.title}>
                        <a href={tab.link} className={"text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                            (openTab === tab.index
                                ? "text-white bg-foreground"
                                : "text-black bg-background")
                            } onClick={e => {
                                e.preventDefault();
                                setOpenTab(tab.index);
                            }}
                            >{tab.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {laporan_baru.map((lap, index) => (
                <DaftarLaporan id={lap.id} nama={lap.nama} status={lap.status} prioritas={lap.prioritas} gambar={lap.gambar}>
                    <div></div>
                </DaftarLaporan>
                ))}
            </div>
        </div>
    );
}