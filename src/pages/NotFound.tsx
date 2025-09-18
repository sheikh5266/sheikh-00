import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

declare global {
  interface Window {
    Parallax: any;
  }
}

const NotFound = () => {
  const location = useLocation();
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Load Parallax.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/wagerfield/parallax@master/dist/parallax.min.js';
    script.onload = () => {
      if (sceneRef.current && window.Parallax) {
        new window.Parallax(sceneRef.current);
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Sheikh Momin</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Sheikh Momin's portfolio homepage." />
        <link rel="canonical" href={`https://www.sheikhmomin.site${location.pathname}`} />
      </Helmet>

      {/* About Section with Social Links */}
      <div className="about-404">
        <a className="bg_links social portfolio" href="https://www.sheikhmomin.site" target="_blank" rel="noopener noreferrer">
          <span className="icon"></span>
        </a>
        <a className="bg_links social dribbble" href="https://dribbble.com/sheikhmomin" target="_blank" rel="noopener noreferrer">
          <span className="icon"></span>
        </a>
        <a className="bg_links social linkedin" href="https://www.linkedin.com/in/sheikh-momin/" target="_blank" rel="noopener noreferrer">
          <span className="icon"></span>
        </a>
        <a className="bg_links logo-404"></a>
      </div>

      {/* Navigation */}
      <nav className="nav-404">
        <div className="menu-404">
          <p className="website_name">SHEIKH MOMIN</p>
          <div className="menu_links">
            <a href="/" className="link">home</a>
            <a href="/portfolio" className="link">portfolio</a>
            <a href="/services" className="link">services</a>
            <a href="/resume" className="link">resume</a>
          </div>
          <div className="menu_icon">
            <span className="icon"></span>
          </div>
        </div>
      </nav>

      <section className="wrapper-404">
        <div className="container-404">
          <div ref={sceneRef} className="scene" data-hover-only="false">
            <div className="circle" data-depth="1.2"></div>

            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <p className="p404" data-depth="0.50">404</p>
            <p className="p404" data-depth="0.10">404</p>
          </div>

          <div className="text-404">
            <article>
              <p>Uh oh! Looks like you got lost. <br />Go back to the homepage if you dare!</p>
              <button onClick={() => window.location.href = '/'}>i dare!</button>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
