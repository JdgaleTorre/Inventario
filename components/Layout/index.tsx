import Head from "next/head";
import Link from "next/link";
import NavBar from "./component/nav-bar";


export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
    return (
        <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
            />
            <meta
                property="og:image"
                content={`https://og-image.now.sh/${encodeURI(
                siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        </Head>

        <header>
            <NavBar/>
        </header>
        
        <div className="workingArea">
            
                <div className="columns">
                    {/* navbar */}
                    <div className="column is-one-fifth is-hidden-mobile is-light">
                        <section className="section">
                            <div className="container">
                                <aside className="menu">
                                    <ul className="menu-list">
                                        <li><Link href="/index"><a><span className="icon"><i className="fas fa-home"></i></span>Inicio</a></Link></li>
                                    </ul>
                                    <p className="menu-label">
                                        <span className="icon"><i className="fas fa-archive"></i></span>Productos
                                    </p>
                                    <ul className="menu-list">
                                        <li><Link href="/productos/nuevo"><a>Todos los productos</a></Link></li>
                                    </ul>
                                </aside>
                            </div>
                        </section>
                        
                    </div>
                    <div className="column">
                    <section className="section">
                        <div className= 'container is-fullheight'>
                            <div className="hero">
                                {children}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        
    
        
        
        <footer className="footer">
            <div className="content has-text-centered is-primary">
                <p>
                    <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </footer>
        </>
    );
}
