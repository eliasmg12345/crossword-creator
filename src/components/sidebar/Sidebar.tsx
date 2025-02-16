'use client'

import { useUIStore } from "@/store"
import clsx from "clsx"
import Link from "next/link"

export const Sidebar = () => {

    const isSideMenuOpen = useUIStore(state=>state.isSideMenuOpen)
    //const closeMenu = useUIStore(state=>state.closeSideMenu)

    return(
        <div className="">
        

        {
            isSideMenuOpen &&(
                <div
                    className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
                />
            )
        }


        <nav
            className={
                clsx(
                    "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                    {
                        "translate-x-full": !isSideMenuOpen
                    }
                )
            }
        >
            <button
                className="absolute top-5 right-5 cursor-pointer"
            >
                Salir
            </button>

            <Link
                href="/maker"
            >
            <span>Do Crossword</span>
            </Link>

        </nav>

        </div>
    )
}