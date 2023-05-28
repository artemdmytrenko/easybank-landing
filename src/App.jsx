import { useState } from "react";
import { createPortal } from "react-dom";
import logo from "./assets/logo.svg";
import logolight from "./assets/logo-light.svg";
import iconOnline from "./assets/icon-online.svg";
import iconBudgeting from "./assets/icon-budgeting.svg";
import iconOnboarding from "./assets/icon-onboarding.svg";
import iconAPI from "./assets/icon-api.svg";
import facebook from "./assets/icon-facebook.svg";
import youtube from "./assets/icon-youtube.svg";
import twitter from "./assets/icon-twitter.svg";
import pinterest from "./assets/icon-pinterest.svg";
import instagram from "./assets/icon-instagram.svg";
import hamburger from "./assets/icon-hamburger.svg";
import close from "./assets/icon-close.svg";
import useMediaQuery from "./hooks/useMediaQuery";
import img1 from "./assets/image-currency.jpg";
import img2 from "./assets/image-restaurant.jpg";
import img3 from "./assets/image-plane.jpg";
import img4 from "./assets/image-confetti.jpg";
import "./App.scss";

function App() {
  const matches = useMediaQuery("(min-width: 800px)");
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      onPointerDown={() => {
        showModal && setShowModal(!showModal);
      }}
    >
      <nav>
        <img src={logo} alt="Easybank Logo" />
        {matches ? (
          <>
            <div>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            <button>Request Invite</button>
          </>
        ) : (
          <>
            {showModal ? (
              <img
                src={close}
                alt="close modal menu button"
                onClick={() => setShowModal(!showModal)}
              />
            ) : (
              <img
                src={hamburger}
                alt="open modal menu button"
                className="nav"
                onClick={() => setShowModal(!showModal)}
              />
            )}
          </>
        )}
        {showModal &&
          createPortal(
            <div
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
              className="modal"
            >
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>,
            document.body
          )}
      </nav>
      <header>
        <div>
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more
          </p>
          <button>Request Invite</button>
        </div>
      </header>
      <main>
        <section className="values-section">
          <div>
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your account into your financial
              hub. Control your finances like never before
            </p>
          </div>
          <ul>
            <li>
              <img
                src={iconOnline}
                alt="online banking"
                width={70}
                loading="lazy"
              />
              <strong>
                <p>Online Banking</p>
              </strong>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world
              </p>
            </li>
            <li>
              <img
                src={iconBudgeting}
                alt="simple budgeting"
                width={70}
                loading="lazy"
              />
              <strong>
                <p>Simple Budgeting</p>
              </strong>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you're close to hitting your limits.
              </p>
            </li>
            <li>
              <img
                src={iconOnboarding}
                alt="fast onboarding"
                width={70}
                loading="lazy"
              />
              <strong>
                <p>Fast Onboarding</p>
              </strong>
              <p>
                We don't do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </li>
            <li>
              <img src={iconAPI} alt="open API" width={70} loading="lazy" />
              <strong>
                <p>Open API</p>
              </strong>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </li>
          </ul>
        </section>
        <section className="articles">
          <h3>Latest Articles</h3>
          <div>
            <article>
              <img
                src={img1}
                alt="Receive money in any currency with no fees"
                height={200}
                loading="lazy"
              />
              <div>
                <small>By Claire Robinson</small>
                <strong>
                  <p>Receive money in any currency with no fees</p>
                </strong>
                <p>
                  The world is getting smaller and we're becoming more mobile.
                  So why should you be forced to only receive money in a
                  single...
                </p>
              </div>
            </article>
            <article>
              <img
                src={img2}
                alt="Treat yourself without worrying about money"
                height={200}
                loading="lazy"
              />
              <div>
                <small>By Wilson Hutton</small>
                <strong>
                  <p>Treat yourself without worrying about money</p>
                </strong>
                <p>
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means
                  you...
                </p>
              </div>
            </article>
            <article>
              <img
                src={img3}
                alt="Take your Easybank card wherever you go"
                height={200}
                loading="lazy"
              />
              <div>
                <small>By Wilson Hutton</small>
                <strong>
                  <p>Take your Easybank card wherever you go</p>
                </strong>
                <p>
                  We want you to enjoy your travels. This is why we don't charge
                  any fees on purchases while you're abroad. We'll even show
                  you...
                </p>
              </div>
            </article>
            <article>
              <img
                src={img4}
                alt="Our invite-only Beta accounts are now live!"
                height={200}
                loading="lazy"
              />
              <div>
                <small>By Claire Robinson</small>
                <strong>
                  <p>Our invite-only Beta accounts are now live!</p>
                </strong>
                <p>
                  After a lot of hard work by the whole team, we're excited to
                  launch our closed beta. It's easy to request an invite through
                  the site...
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-contents">
          <div className="socials">
            <img src={logolight} alt="Easybank logo" />
            <div>
              <a href="#">
                <img src={facebook} alt="Easybank on Facebook" />
              </a>
              <a href="#">
                <img src={youtube} alt="Easybank on Youtube" />
              </a>
              <a href="#">
                <img src={twitter} alt="Easybank on Twitter" />
              </a>
              <a href="#">
                <img src={pinterest} alt="Easybank on Pinterest" />
              </a>
              <a href="#">
                <img src={instagram} alt="Easybank on Instagram" />
              </a>
            </div>
          </div>
          <div className="links_1">
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>
          <div className="links_2">
            <a href="#">Careers</a>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="invite">
          <button>Request Invite</button>
          <small>&copy; Easybank. All Rights Reserved</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
