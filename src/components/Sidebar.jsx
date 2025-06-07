import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import '../css/index.CvYLoe5e.css';


function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        const menuButton = menuButtonRef.current;

        if (menuButton) {
            menuButton.addEventListener("click", toggleMenu);
        }

        return () => {
            if (menuButton) {
                menuButton.removeEventListener("click", toggleMenu);
            }
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        try {
            if (!window.matchMedia("(min-width: 50em)").matches) return;
            const target = document.querySelector("sl-sidebar-state-persist");
            const state = JSON.parse(sessionStorage.getItem("sl-sidebar-state") || "0");
            if (!target || !state || target.dataset.hash !== state.hash) return;
            window._starlightScrollRestore = state.scroll;
            customElements.define(
                "sl-sidebar-restore",
                class SidebarRestore extends HTMLElement {
                    connectedCallback() {
                        try {
                            const idx = parseInt(this.dataset.index || "");
                            const details = this.closest("details");
                            if (details && typeof state.open[idx] === "boolean") details.open = state.open[idx];
                        } catch { }
                    }
                }
            );
        } catch (error) {
            console.error("Sidebar error:", error);
        }
    }, []);

    useEffect(() => {
        const scroller = document.getElementById("starlight__sidebar");

        if (!window._starlightScrollRestore || !scroller) return;

        scroller.scrollTop = window._starlightScrollRestore;
        delete window._starlightScrollRestore;
    }, []); // Empty dependency array means it runs once when the component mounts


    return (
        <>
            <Header />
            <nav className='sidebar astro-vrdttmbt'>
                <starlight-menu-button ref={menuButtonRef} className="astro-jif73yzw">
                    <button
                        aria-expanded={isOpen}
                        aria-label="Menu"
                        aria-controls="starlight__sidebar"
                        className="sl-flex md:sl-hidden astro-jif73yzw"
                        onClick={toggleMenu}
                    >
                        <svg
                            aria-hidden="true"
                            className="astro-jif73yzw astro-c6vsoqas"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={{ "--sl-icon-size": "1em" }}
                        >
                            <path d="M3 8h18a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"></path>
                        </svg>
                    </button>
                </starlight-menu-button>

                <div id="starlight__sidebar" className='sidebar-pane astro-vrdttmbt'>
                    <sl-sidebar-state-persist data-hash="19t19tc" className="astro-kku4brbg">
                        <ul className="top-level astro-3ii7xxms">
                            <li className="astro-3ii7xxms">
                                <a href="/" aria-current="page" className="large astro-3ii7xxms">
                                    <span className="astro-3ii7xxms">Home</span>
                                </a>
                            </li>
                            <li className="astro-3ii7xxms">
                                <details className="astro-3ii7xxms" open="">
                                    <sl-sidebar-restore data-index="0"></sl-sidebar-restore>
                                    <summary className="astro-3ii7xxms">
                                        <div className="group-label astro-3ii7xxms">
                                            <span className="large astro-3ii7xxms">HTML</span>
                                        </div>
                                        <svg aria-hidden="true" className="caret astro-3ii7xxms astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ "--sl-icon-size": "1.25rem" }}>
                                            <path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"></path>
                                        </svg>
                                    </summary>
                                    <ul className="astro-3ii7xxms">
                                        <li className="astro-3ii7xxms">
                                            <a href="#!" className="astro-3ii7xxms">
                                                <span className="astro-3ii7xxms">Getting started with HTML</span>
                                            </a>
                                        </li>
                                        <li className="astro-3ii7xxms">
                                            <a href="#!" className="astro-3ii7xxms">
                                                <span className="astro-3ii7xxms">Emmit crash course</span>
                                            </a>
                                        </li>
                                        <li className="astro-3ii7xxms">
                                            <a href="#!" className="astro-3ii7xxms">
                                                <span className="astro-3ii7xxms">Common HTML tags</span>
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li className="astro-3ii7xxms">
                                <details className="astro-3ii7xxms">
                                    <sl-sidebar-restore data-index="1"></sl-sidebar-restore>
                                    <summary className="astro-3ii7xxms">
                                        <div className="group-label astro-3ii7xxms">
                                            <span className="large astro-3ii7xxms">Django</span>
                                        </div>
                                        <svg aria-hidden="true" className="caret astro-3ii7xxms astro-c6vsoqas" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ "--sl-icon-size": "1.25rem" }}>
                                            <path d="m14.83 11.29-4.24-4.24a1 1 0 1 0-1.42 1.41L12.71 12l-3.54 3.54a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29l4.24-4.24a1.002 1.002 0 0 0 0-1.42Z"></path>
                                        </svg>
                                    </summary>
                                    <ul className="astro-3ii7xxms">
                                        <li className="astro-3ii7xxms">
                                            <a href="#!" className="astro-3ii7xxms">
                                                <span className="astro-3ii7xxms">Getting Started with Django</span>
                                            </a>
                                        </li>
                                        <li className="astro-3ii7xxms">
                                            <a href="#!" className="astro-3ii7xxms">
                                                <span className="astro-3ii7xxms">Jinja Templates App in Django</span>
                                            </a>
                                        </li>
                                        <li className="astro-3ii7xxms">
                                            <a href="#!" className="astro-3ii7xxms">
                                                <span className="astro-3ii7xxms">Tailwind to Django</span>
                                            </a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </sl-sidebar-state-persist>
                    
                </div>
            </nav>
        </>
    )
}

export default Sidebar