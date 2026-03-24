import { useEffect, useRef, useState } from "react"
import { ChevronDown, ArrowUpRight, X } from "lucide-react"
import { projects } from "../data/projects"

export default function Header() {
    const [desktopOpen, setDesktopOpen] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const desktopRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                desktopRef.current &&
                !desktopRef.current.contains(event.target as Node)
            ) {
                setDesktopOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [mobileOpen])

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
                    <div className="flex items-center gap-3">
                        <div className="h-14 w-14 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200">
                            <img
                                src="/avatar.png"
                                alt="Logo avatar"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-base font-semibold tracking-tight text-slate-900">
                                Chen Li
                            </span>
                            <span className="text-xs text-slate-500">
                                .NET Engineer
                            </span>
                        </div>
                    </div>

                    <nav className="flex items-center">
                        <div
                            ref={desktopRef}
                            className="relative hidden md:block"
                            onMouseEnter={() => setDesktopOpen(true)}
                            onMouseLeave={() => setDesktopOpen(false)}
                        >
                            <button
                                type="button"
                                onClick={() => setDesktopOpen((prev) => !prev)}
                                className="flex items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-indigo-600"
                                aria-expanded={desktopOpen}
                                aria-haspopup="true"
                            >
                                <span>Explore Projects</span>
                                <ChevronDown
                                    className={`h-4 w-4 transition duration-150 ${desktopOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`absolute right-0 top-full z-50 pt-2 transition-all duration-150 ${desktopOpen ? "visible opacity-100" : "invisible opacity-0"
                                    }`}
                            >
                                <div className="w-[960px] rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/15">
                                    <div className="grid grid-cols-3 divide-x divide-slate-200">
                                        {projects.slice(0, 3).map((project, index) => (
                                            <div key={index} className="px-6 py-5">
                                                <div className="text-sm font-semibold text-slate-900">
                                                    {project.name}
                                                </div>

                                                <div className="mt-1 text-xs leading-5 text-slate-500">
                                                    {project.subtitle}
                                                </div>

                                                {project.modules && project.modules.length > 0 && (
                                                    <div className="mt-4 space-y-3">
                                                        {project.modules.map((module, moduleIndex) => (
                                                            <div key={moduleIndex}>
                                                                {module.href ? (
                                                                    <a
                                                                        href={module.href}
                                                                        target="_blank"
                                                                        rel="noreferrer"
                                                                        className="text-xs font-medium text-slate-800 transition hover:text-indigo-600"
                                                                    >
                                                                        {module.name}
                                                                        <ArrowUpRight className="ml-1 inline-block h-3 w-3" />
                                                                    </a>
                                                                ) : (
                                                                    <div className="text-xs font-medium text-slate-800">
                                                                        {module.name}
                                                                    </div>
                                                                )}

                                                                <div className="mt-1 text-xs leading-5 text-slate-500">
                                                                    {module.description}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {project.links.map((link, linkIndex) => (
                                                        <a
                                                            key={linkIndex}
                                                            href={link.href}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-200 hover:text-indigo-600"
                                                        >
                                                            {link.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setMobileOpen(true)}
                            className="flex items-center gap-2 text-sm font-bold text-slate-700 transition hover:text-indigo-600 md:hidden"
                        >
                            <span>Explore Projects</span>
                            <ChevronDown className="h-4 w-4" />
                        </button>
                    </nav>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-[60] md:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"
                    }`}
            >
                <div
                    className={`absolute inset-0 bg-slate-900/30 transition-opacity duration-200 ${mobileOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setMobileOpen(false)}
                />

                <div
                    className={`absolute inset-x-0 top-0 h-[100dvh] overflow-y-auto bg-white transition-transform duration-300 ${mobileOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
                        <div>
                            <div className="text-sm font-semibold text-slate-900">
                                Explore Projects
                            </div>
                            <div className="text-xs text-slate-500">
                                Selected work and system highlights
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setMobileOpen(false)}
                            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                            aria-label="Close project drawer"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="divide-y divide-slate-200 px-5 pb-8">
                        {projects.slice(0, 3).map((project, index) => (
                            <div key={index} className="py-5">
                                <div className="text-sm font-semibold text-slate-900">
                                    {project.name}
                                </div>

                                <div className="mt-1 text-xs leading-5 text-slate-500">
                                    {project.subtitle}
                                </div>

                                {project.modules && project.modules.length > 0 && (
                                    <div className="mt-4 space-y-3">
                                        {project.modules.map((module, moduleIndex) => (
                                            <div key={moduleIndex}>
                                                {module.href ? (
                                                    <a
                                                        href={module.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-xs font-medium text-slate-800 transition hover:text-indigo-600"
                                                    >
                                                        {module.name}
                                                        <ArrowUpRight className="ml-1 inline-block h-3 w-3" />
                                                    </a>
                                                ) : (
                                                    <div className="text-xs font-medium text-slate-800">
                                                        {module.name}
                                                    </div>
                                                )}

                                                <div className="mt-1 text-xs leading-5 text-slate-500">
                                                    {module.description}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.links.map((link, linkIndex) => (
                                        <a
                                            key={linkIndex}
                                            href={link.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-200 hover:text-indigo-600"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}