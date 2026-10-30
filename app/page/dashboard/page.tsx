"use client"

import React from 'react'

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
    const [openTab, setOpenTab] = React.useState(1);
    
    return (
        <div>
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
        </div>
    );
}