'use client'
import { useUIStore } from "@/store"
import Link from "next/link"

export const TopMenu = () => {

    const openSideMenu = useUIStore(store=>store.openSideMenu)

    return (
        <nav className="flex px-5 justify-between items-center w-full">
            <div>
                <Link href="/">
                    <span className={`${''} antialiased font-bold`}>Crossword </span>
                    <span>| Creator</span>
                </Link>
            </div>
            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all" href="/maker">Create</Link>
            </div>

            <div className="flex items-center">
                <button
                    onClick={openSideMenu}
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                >
                    Menu
                </button>
            </div>
        </nav>
    )
}