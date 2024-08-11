import React from 'react'

export default function Contact() {
    return (
        <>
            <nav id="navbar-example2" className="navbar navbar-light bg-light px-3 btn btn-outline-secondary">
                <a className="navbar-brand" href="/">
                    Navbar
                </a>
                <ul className="pagination my-4">
                    <li className="page-item">
                        <a className="page-link" href="#scrollspyHeading1">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#scrollspyHeading2">
                            2
                        </a>
                    </li>
                    <li className="page-item dropdown">
                        <a
                            className="page-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-expanded="false"
                        >
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#scrollspyHeading3">
                                    3
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#scrollspyHeading4">
                                    4
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#scrollspyHeading5">
                                    5
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-offset={0}
                className="scrollspy-example"
                tabIndex={0}
            >
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima sint veritatis exercitationem rem itaque ullam quas quia saepe minus soluta aliquam aut maxime id deserunt ab, accusamus neque? Ipsum.</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima sint veritatis exercitationem rem itaque ullam quas quia saepe minus soluta aliquam aut maxime id deserunt ab, accusamus neque? Ipsum.</p>
                <h4 id="scrollspyHeading3">Third heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima sint veritatis exercitationem rem itaque ullam quas quia saepe minus soluta aliquam aut maxime id deserunt ab, accusamus neque? Ipsum.</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima sint veritatis exercitationem rem itaque ullam quas quia saepe minus soluta aliquam aut maxime id deserunt ab, accusamus neque? Ipsum.</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima sint veritatis exercitationem rem itaque ullam quas quia saepe minus soluta aliquam aut maxime id deserunt ab, accusamus neque? Ipsum.</p>
            </div>
        </>

    )
}
