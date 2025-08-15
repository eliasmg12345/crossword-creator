'use client'

import { useUIStore } from "@/store"
import clsx from "clsx"
import Link from "next/link"

export const Sidebar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen)
    const closeMenu = useUIStore(state => state.closeSideMenu)

    return (
        <div className="">


            {
                isSideMenuOpen && (
                    <div
                        className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
                    />
                )
            }
            {
                isSideMenuOpen && (
                    <div
                        onClick={closeMenu}
                        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
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
                    onClick={() => closeMenu()}
                >
                    Salir
                </button>
                <div className="relative mt-14">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                        name=""
                        id=""
                    />
                </div>
                <Link
                    href="/"
                    className="flex mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                    onClick={() => closeMenu()}
                >
                    <span>Pefil</span>
                </Link>
                <Link
                    href="/maker"
                    className="flex mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                    onClick={() => closeMenu()}
                    
                >
                    <span>Do Crossword</span>
                </Link>

            </nav>

        </div>
    )
}