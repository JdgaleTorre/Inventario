export default function NavBar() {
    const toggleNavBarActivateId = (event) => {
        console.log('Burger Click');
        const burger = document.getElementsByClassName("burger")[0];
        const navbar = document.getElementsByClassName("navbar-menu")[0];

        burger.classList.toggle('is-active');
        navbar.classList.toggle('is-active');
        

        
    };

    return (
        <>
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <p className="is-size-4 is-family-monospace">Inventario</p>
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleNavBarActivateId}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                
                <div className="navbar-start is-hidden-desktop">
                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        Documentation
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        More
                        </a>

                        <div className="navbar-dropdown">
                        <a className="navbar-item">
                            About
                        </a>
                        <a className="navbar-item">
                            Jobs
                        </a>
                        <a className="navbar-item">
                            Contact
                        </a>
                        <hr className="navbar-divider"/>
                        <a className="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    <p>Jose David Gale</p>
                </div>
                </div>
            </div>
            </nav>
        </>
    );
}