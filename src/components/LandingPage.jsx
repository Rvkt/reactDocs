import React from 'react';
import '../css/index.CvYLoe5e.css';
import { FaArrowRight } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { SiGoogledocs } from 'react-icons/si';

function LandingPage() {
    return (
        <>
            <div className="page sl-flex astro-vrdttmbt">
                <header className="header astro-vrdttmbt">
                    <div className="header sl-flex astro-kmkmnagf">
                        <div className="title-wrapper sl-flex astro-kmkmnagf">
                            <a href="/" className="site-title sl-flex astro-m46x6ez3">
                                <span className="astro-m46x6ez3">Chai Docs</span>
                            </a>
                        </div>
                        {/* <div className="sl-flex astro-kmkmnagf">
                            <div className="astro-v37mnknz">
                                <button
                                    data-open-modal
                                    aria-label="Search"
                                    aria-keyshortcuts="Meta+K"
                                    className="astro-v37mnknz"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="astro-v37mnknz astro-c6vsoqas"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />
                                    </svg>
                                    <span className="sl-hidden md:sl-block astro-v37mnknz" aria-hidden="true">
                                        Search
                                    </span>
                                    <kbd className="sl-hidden md:sl-flex astro-v37mnknz">
                                        <kbd className="astro-v37mnknz">⌘</kbd>
                                        <kbd className="astro-v37mnknz">K</kbd>
                                    </kbd>
                                </button>
                            </div>
                        </div> */}
                    </div>
                </header>

                <main className="main-frame astro-vrdttmbt">
                    <div className="content-panel astro-7nkwcw3z">
                        <div className="sl-container astro-7nkwcw3z">
                            <div className="hero astro-jbfsktt5">
                                <img
                                    src="./images/cup-logo.C75Y675t_Z1XuyPe.svg"
                                    alt="Chai Docs Logo"
                                    width="400"
                                    height="400"
                                    className="astro-jbfsktt5"
                                />
                                <div className="sl-flex stack astro-jbfsktt5">
                                    <h1 className="astro-jbfsktt5">Welcome to Chai Docs</h1>
                                    <p className="tagline astro-jbfsktt5">
                                        Next-gen documentation that builds reading habits into your workflow.
                                    </p>
                                    <div className="sl-flex actions astro-jbfsktt5">
                                        <a
                                            className="sl-link-button not-content primary astro-jbfsktt5 astro-xwgiixxa"
                                            href="/home"
                                        >
                                            Check out the docs <FaArrowRight style={{ background: "none", color: "black" }} />
                                        </a>
                                        <a
                                            className="sl-link-button not-content secondary astro-jbfsktt5 astro-xwgiixxa"
                                            href="#!"
                                        >
                                            Courses <FaArrowRight style={{ background: "none", color: "black" }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <h2 className="astro-zntqmydn">More Stuff to Learn</h2>
                            <div className="card-grid stagger astro-zntqmydn">
                                <div className="card sl-flex astro-v5tidmuc">
                                    <p className="title sl-flex astro-v5tidmuc">
                                        <MdEdit style={{ background: "#ffad0057", padding: "2px", borderRadius: "2px", border: "1px solid #ffff0085" }} /> FreeAPI
                                    </p>
                                    <a href="#!" className='link'>Check out the website</a>
                                </div>
                                <div className="card sl-flex astro-v5tidmuc">
                                    <p className="title sl-flex astro-v5tidmuc">
                                        <SiGoogledocs style={{ background: "#ffad0057", padding: "2px", borderRadius: "2px", border: "1px solid #ffff0085" }} /> Our Courses
                                    </p>
                                    <a href="#!" className='link'>Check out the courses</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div >
        </>
    )
}

export default LandingPage