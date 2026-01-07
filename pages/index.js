import Head from "next/head";
import styles from "../styles/Home.module.css";

const products = [
  {
    id: "p1",
    name: "Silk Sleep Set",
    tagline: "Pillowcase + scrunchie bundle",
    price: "$29",
    badge: "Best Seller",
    img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: "p2",
    name: "Minimal Gold Hoops",
    tagline: "Everyday, lightweight",
    price: "$18",
    badge: "New",
    img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: "p3",
    name: "Glow Body Oil",
    tagline: "Non-greasy, soft shimmer",
    price: "$24",
    badge: "Trending",
    img: "https://images.unsplash.com/photo-1629198735660-e39ea4a03b24?auto=format&fit=crop&w=1600&q=70",
  },
];

const collections = [
  {
    title: "Self-care staples",
    desc: "Simple, repeat-buy items with high margin and low returns.",
    img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "Quiet luxury accessories",
    desc: "Minimal pieces that look expensive without the price tag.",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=70",
  },
];

const faqs = [
  {
    q: "Do you ship nationwide?",
    a: "Yes — standard shipping is available across the U.S. Expedited options can be added later.",
  },
  {
    q: "What’s your return policy?",
    a: "30 days for unused items in original packaging. Final sale items are excluded (if listed).",
  },
  {
    q: "How do I track my order?",
    a: "After checkout you’ll get an email with a tracking link as soon as your order ships.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Glow & Co | Boutique Finds</title>
        <meta
          name="description"
          content="Aesthetic boutique finds for women — self-care, accessories, and everyday favorites."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.page}>
        <header className={styles.nav}>
          <div className={styles.brand}>
            <div className={styles.logoMark} aria-hidden="true">
              G
            </div>
            <div>
              <div className={styles.brandName}>Glow & Co</div>
              <div className={styles.brandSub}>Boutique Finds</div>
            </div>
          </div>

          <nav className={styles.navLinks}>
            <a href="#shop">Shop</a>
            <a href="#collections">Collections</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className={styles.navCtas}>
            <a className={styles.ghostBtn} href="#shop">
              Browse
            </a>
            <a className={styles.primaryBtn} href="#shop">
              Shop now
            </a>
          </div>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <div className={styles.kicker}>Soft • Clean • Feminine</div>
            <h1 className={styles.h1}>
              Boutique essentials that feel
              <span className={styles.h1Accent}> expensive</span> (without being expensive).
            </h1>
            <p className={styles.lead}>
              A curated shop of repeat-buy favorites: self-care staples, minimal accessories,
              and cozy lifestyle picks.
            </p>

            <div className={styles.heroCtas}>
              <a className={styles.primaryBtnLg} href="#shop">
                Shop best sellers
              </a>
              <a className={styles.ghostBtnLg} href="#collections">
                Explore collections
              </a>
            </div>

            <div className={styles.trustRow}>
              <div className={styles.trustItem}>
                <div className={styles.trustTitle}>Fast shipping</div>
                <div className={styles.trustSub}>2–5 business days</div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustTitle}>Easy returns</div>
                <div className={styles.trustSub}>30-day window</div>
              </div>
              <div className={styles.trustItem}>
                <div className={styles.trustTitle}>Curated</div>
                <div className={styles.trustSub}>Only top sellers</div>
              </div>
            </div>
          </div>

          <div className={styles.heroRight} aria-hidden="true">
            <div className={styles.collage}>
              <div className={styles.collageCard}>
                <img
                  src="https://images.unsplash.com/photo-1520975968161-7c3d9b3bb6d0?auto=format&fit=crop&w=1600&q=70"
                  alt=""
                />
              </div>
              <div className={styles.collageCardTall}>
                <img
                  src="https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1600&q=70"
                  alt=""
                />
              </div>
              <div className={styles.collageCardSmall}>
                <img
                  src="https://images.unsplash.com/photo-1520975682031-a6ad0f3b9fd9?auto=format&fit=crop&w=1600&q=70"
                  alt=""
                />
              </div>
              <div className={styles.floatingTag}>New drops weekly</div>
              <div className={styles.floatingTag2}>Best sellers • In stock</div>
            </div>
          </div>
        </section>

        <section id="shop" className={styles.section}>
          <div className={styles.sectionTop}>
            <h2 className={styles.h2}>Best sellers</h2>
            <p className={styles.subtext}>The “easy yes” items customers re-order.</p>
          </div>

          <div className={styles.productRow}>
            {products.map((p) => (
              <article key={p.id} className={styles.productCard}>
                <div className={styles.productImageWrap}>
                  <img className={styles.productImage} src={p.img} alt={p.name} />
                  <div className={styles.badge}>{p.badge}</div>
                </div>

                <div className={styles.productMeta}>
                  <div className={styles.productTitle}>{p.name}</div>
                  <div className={styles.productTagline}>{p.tagline}</div>

                  <div className={styles.productBottom}>
                    <div className={styles.price}>{p.price}</div>
                    <button
                      className={styles.addBtn}
                      onClick={() => alert("Hook this to checkout later (Stripe/Shopify).")}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.centerCta}>
            <a className={styles.primaryBtn} href="#collections">
              View collections
            </a>
          </div>
        </section>

        <section id="collections" className={styles.sectionAlt}>
          <div className={styles.sectionTop}>
            <h2 className={styles.h2}>Shop by vibe</h2>
            <p className={styles.subtext}>Editorial-style collections (not a wall of products).</p>
          </div>

          <div className={styles.storyGrid}>
            {collections.map((c) => (
              <div key={c.title} className={styles.storyCard}>
                <div className={styles.storyImage}>
                  <img src={c.img} alt={c.title} />
                </div>
                <div className={styles.storyBody}>
                  <div className={styles.storyTitle}>{c.title}</div>
                  <div className={styles.storyDesc}>{c.desc}</div>
                  <a className={styles.storyLink} href="#shop">
                    Shop this collection →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.quoteBlock}>
            <div className={styles.quoteMark}>“</div>
            <div className={styles.quoteText}>
              The goal is effortless: fewer choices, better picks, faster checkout.
            </div>
            <div className={styles.quoteBy}>— Glow & Co</div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.newsletter}>
            <div>
              <div className={styles.newsKicker}>Get 10% off your first order</div>
              <div className={styles.newsTitle}>Join the list for new drops.</div>
              <div className={styles.newsSub}>No spam. Just best sellers and restocks.</div>
            </div>

            <form
              className={styles.newsForm}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Connect to Mailchimp/Klaviyo later.");
              }}
            >
              <input className={styles.newsInput} type="email" placeholder="you@example.com" required />
              <button className={styles.primaryBtn} type="submit">
                Get code
              </button>
            </form>
          </div>
        </section>

        <section id="faq" className={styles.sectionAlt}>
          <div className={styles.sectionTop}>
            <h2 className={styles.h2}>FAQ</h2>
            <p className={styles.subtext}>Quick answers reduce drop-offs.</p>
          </div>

          <div className={styles.faq}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.details}>
                <summary className={styles.summary}>{f.q}</summary>
                <p className={styles.answer}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerRow}>
            <div className={styles.footerBrand}>
              <div className={styles.logoMark} aria-hidden="true">
                G
              </div>
              <div>
                <div className={styles.brandName}>Glow & Co</div>
                <div className={styles.brandSub}>Boutique Finds</div>
              </div>
            </div>

            <div className={styles.footerLinks}>
              <a href="#shop">Shop</a>
              <a href="#collections">Collections</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>© {new Date().getFullYear()} Glow & Co</span>
            <span className={styles.dot}>•</span>
            <span>Designed for conversion + aesthetic</span>
          </div>
        </footer>
      </div>
    </>
  );
}
