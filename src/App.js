// import './App.css';
import styles from './App.module.scss';
// import contentImg1 from './images/contentImg1.png';
import { ReactComponent as Logo } from './images/Logo.svg';

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Logo className={styles.logo} />
          <ul>
            <li>
              <a href="/#">FEATURES</a>
            </li>
            <li>
              <a href="/#">ENTERPRISE</a>
            </li>
            <li>
              <a href="/#">PRICING</a>
            </li>
            <li>
              <a href="/#">BLOG</a>
            </li>
          </ul>
          <div>
            <div className={styles.headerButtonContainer}>
              <a href="/#">LOGIN</a>
              <a className={styles.aWired} href="/#">
                BOOK A DEMO
              </a>
              <a className={styles.aSolid} href="/#">
                SIGN UP FOR FREE
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={`${styles.herosection} ${styles.container}`}>
          <div>
            <h1>Track search rankings from any location on Earth</h1>
            <h3>
              Understand what drives your search engine traffic and sales on all
              leading searching engines down to ZIP code level.
            </h3>
            <button className={styles.heroBtn}>Sign up for 14 days free</button>
          </div>
        </section>
        <section>
          <div className={styles.logos}>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/5cf10538b2a81971489a882a/610811e485bb5a86844eb7d4_5ede5323745e6f238e31d599_Group%201%201.png"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://uploads-ssl.webflow.com/5cf10538b2a81971489a882a/610811e485bb5af4e34eb7cd_5f28242bfab7c2341530ef24_shopify_monotone_white%201.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/5cf10538b2a81971489a882a/610811e485bb5a21854eb7c9_5ef6337ca589e2769b5212c8_Bank%20Logo-p-500%201.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/5cf10538b2a81971489a882a/610811e485bb5af7074eb7c7_5f28210c4e0af7a4b71b705b_Coinbase%20White%20Logo%201.png"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://uploads-ssl.webflow.com/5cf10538b2a81971489a882a/610811e485bb5a18b84eb7cf_5f2821570311fce96e063285_Rollbar%20Logo%201.png"
                alt=""
              />
            </div>
            <div />
            <div>
              <img
                src="https://uploads-ssl.webflow.com/5cf10538b2a81971489a882a/63610e6a737a7b2cb6096e66_sony.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/5cf10538b2a81971489a882a/63610e7716676e04c6864695_chartmogul.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/5cf10538b2a81971489a882a/63610e8117f6ce2a116f4d1b_samsung.svg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className={`${styles.container}`}>
          <div>
            <h2 style={{ fontSize: '4rem', color: '#fff' }}>
              Tools to dominate your competitors
            </h2>
          </div>
        </section>

        <section className={`${styles.container} ${styles.body2}`}>
          <div>
            <img
              src="https://uploads-ssl.webflow.com/5cf10538b2a81971489a882a/62ab2bb3d01d5a587c0be123_rank-tracker.svg"
              alt=""
            />
            <br />
            <span style={{ fontSize: '1.5rem' }}>Rank tracker</span>

            <span>Analyse your ranking</span>
            <br />
            <a href="/#">Learn More</a>
          </div>
          <div>
            <img
              src="https://uploads-ssl.webflow.com/5cf10538b2a81971489a882a/62ab2c26f63b193e2b37363b_reporting.svg"
              alt=""
            />
            <br />
            <span style={{ fontSize: '1.5rem' }}>Reporting</span>

            <span>Analyse your ranking</span>
            <br />
            <a href="/#">Learn More</a>
          </div>
          <div>
            <img
              src="https://uploads-ssl.webflow.com/5cf10538b2a81971489a882a/62ab2b28d87f86732a952212_site-audit.svg"
              alt=""
            />
            <br />
            <span style={{ fontSize: '1.5rem' }}>Rank tracker</span>

            <span>Analyse your ranking</span>
            <br />
            <a href="/#">Site Audit</a>
          </div>
        </section>
      </main>
      <footer>
        <div style={{ justifyContent: 'center' }}>
          <Logo className={styles.logo} />
        </div>
        <div>
          <span>MAIN FEATURES</span>
          <a href="/$">Rank Tracker</a>
          <a href="/$">Reporting</a>
          <a href="/$">Site Audit</a>
          <a href="/$">Agency Rank Tracker</a>
          <a href="/$">Daily Rank Tracking</a>
          <a href="/$">Enterprise Rank Tracker</a>
        </div>

        <div>
          <span>OTHER TOOLS</span>
          <a href="/$">Search Engine Simulator</a>
          <a href="/$">Mobile Rank Tracker</a>
          <a href="/$">YouTube Rank Tracker</a>
          <a href="/$">Local SERP Tracking</a>
          <a href="/$">Bing Rank Tracker</a>
          <a href="/$">Large-Scale Rank Tracking</a>
        </div>
        <div>
          <span>RESOURCES</span>
          <a href="/$">Affiliate Program</a>
          <a href="/$">Member Perks</a>
          <a href="/$">Help Docs</a>
          <a href="/$">API Docs</a>
          <a href="/$">Blog</a>
          <a href="/$">Product Roadmap</a>
        </div>
        <div />
        <div>
          <span>COMPARE</span>
          <a href="/$">Ahrefs Rank Tracker</a>
          <a href="/$">ERPRobot/SERPLab</a>
          <a href="/$">SAdvanced Web Ranking</a>
          <a href="/$">GetStat</a>
        </div>
        <div>
          <span>COMPANY</span>
          <a href="/$">Contact us</a>
          <a href="/$">Jobs</a>
          <a href="/$">Policy </a>
          <a href="/$">Terms of Service</a>
        </div>
        <div>
          <span>AWARDS</span>
        </div>
      </footer>
      ;
    </>
  );
}
