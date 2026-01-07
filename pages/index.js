// pages/index.js
import Head from "next/head";
import { useMemo, useState } from "react";

const BRAND = "Luna & Bloom";
const TAGLINE = "Everyday essentials, curated for calm + confidence.";

const PRODUCTS = [
  {
    id: "p1",
    name: "Silk Sleep Scrunchie Set",
    price: 18,
    badge: "Best seller",
    desc: "Gentle hold. No creases. Hair-friendly shine.",
    color: "Rose / Ivory",
  },
  {
    id: "p2",
    name: "Minimal Gold Initial Necklace",
    price: 29,
    badge: "Most gifted",
    desc: "Simple, personal, and easy to wear every day.",
    color: "14K Gold-Plated",
  },
  {
    id: "p3",
    name: "Self-Care Journal (90 Days)",
    price: 24,
    badge: "New",
    desc: "Short prompts that build clarity and momentum.",
    color: "Soft Linen Cover",
  },
  {
    id: "p4",
    name: "Reusable Makeup Remover Pads",
    price: 14,
    badge: "Eco pick",
    desc: "Soft, washable, and actually removes makeup.",
    color: "8-Pack",
  },
  {
    id: "p5",
    name: "Aromatherapy Shower Steamers",
    price: 22,
    badge: "Relax",
    desc: "Turn showers into spa moments in 60 seconds.",
    color: "Eucalyptus Mix",
  },
  {
    id: "p6",
    name: "Tote Bag: “Doing My Best”",
    price: 19,
    badge: "POD",
    desc: "Cute, durable, and made-to-order. No inventory.",
    color: "Natural Canvas",
  },
];

function formatMoney(n) {
  return `$${n.toFixed(2)}`;
}

export default function Home() {
  const [cart, setCart] = useState({}); // { [id]: qty }
  const [email, setEmail] = useState("");
  const [coupon, setCoupon] = useState("");

  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .map(([id, qty]) => {
        const p = PRODUCTS.find((x) => x.id === id);
        return p ? { ...p, qty } : null;
      })
      .filter(Boolean);
  }, [cart]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, it) => sum + it.price * it.qty, 0);
  }, [cartItems]);

  const discount = useMemo(() => {
    if (coupon.trim().toUpperCase() === "BLOOM10") return subtotal * 0.1;
    return 0;
  }, [coupon, subtotal]);

  const total = Math.max(0, subtotal - discount);

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const next = { ...prev };
      const qty = next[id] || 0;
      if (qty <= 1) delete next[id];
      else next[id] = qty - 1;
      return next;
    });
  };

  const clearCart = () => setCart({});

  const checkout = () => {
    // Placeholder checkout (no payment processor wired yet).
    // Later: swap this with Stripe Checkout link or Shopify buy button.
    const lines = cartItems
      .map((it) => `${it.qty}x ${it.name} (${formatMoney(it.price)})`)
      .join("%0A");
    const note = `Order request:%0A${lines}%0A%0ASubtotal: ${formatMoney(
      subtotal
    )}%0ADiscount: -${formatMoney(discount)}%0ATotal: ${formatMoney(total)}`;

    // Use your email or a form endpoint later; for now we open a mail draft.
    window.location.href = `mailto:YOUR_EMAIL_HERE@example.com?subject=${encodeURIComponent(
      `${BRAND} — Order Request`
    )}&body=${note}`;
  };

  const joinWaitlist = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Simple “mailto” capture; later replace with FormSubmit / Google Form / Mailchimp.
    window.location.href = `mailto:YOUR_EMAIL_HERE@example.com?subject=${encodeURIComponent(
      `${BRAND} — Waitlist`
    )}&body=${encodeURIComponent(`Please add me to the waitlist: ${email}`)}`;
    setEmail("");
  };

  return (
    <>
      <Head>
        <title>{BRAND} | Curated essentials for women</title>
        <meta name="description" content={TAGLINE} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page">
        <header className="header">
          <div className="wrap headerRow">
            <div className="brand">
              <div className="mark" aria-hidden="true" />
              <div>
                <div className="brandName">{BRAND}</div>
                <div className="brandTag">{TAGLINE}</div>
              </div>
            </div>

            <nav className="nav">
              <a href="#shop">Shop</a>
              <a href="#why">Why us</a>
              <a href="#faq">FAQ</a>
            </nav>

            <button className="cartBtn" onClick={() => document.getElementById("cart")?.scrollIntoView({ behavior: "smooth" })}>
              Cart <span className="cartCount">{cartItems.reduce((s, x) => s + x.qty, 0)}</span>
            </button>
          </div>
        </header>

        <main className="wrap">
          <section className="hero">
            <div className="heroLeft">
              <div className="pill">New drop • Made-to-order • No clutter</div>
              <h1>Little upgrades that make your day feel easier.</h1>
              <p className="sub">
                We curate a small collection of women-loved essentials—giftable, practical, and aesthetic—so shopping stays simple.
              </p>

              <div className="heroCtas">
                <a className="btn primary" href="#shop">
                  Shop best sellers
                </a>
                <a className="btn ghost" href="#why">
                  See why it works
                </a>
              </div>

              <div className="trustRow">
                <div className="trustItem">✓ Fast, friendly support</div>
                <div className="trustItem">✓ Simple returns policy</div>
                <div className="trustItem">✓ Limited, curated drops</div>
              </div>
            </div>

            <div className="heroCard">
              <div className="heroCardTop">
                <div className="miniTitle">Featured bundle</div>
                <div className="miniBadge">Save 12%</div>
              </div>
              <div className="heroCardBody">
                <div className="bundleName">“Reset & Glow” Kit</div>
                <div className="bundleDesc">
                  Scrunchies + journal + steamers. A tiny ritual that actually sticks.
                </div>
                <div className="bundleRow">
                  <div className="bundlePrice">
                    <div className="priceNow">{formatMoney(54)}</div>
                    <div className="priceWas">{formatMoney(61)}</div>
                  </div>
                  <button className="btn primary" onClick={() => addToCart("p1")}>
                    Add starter item
                  </button>
                </div>
                <div className="tiny">Tip: Use coupon <b>BLOOM10</b> at checkout (demo).</div>
              </div>
            </div>
          </section>

          <section id="shop" className="section">
            <div className="sectionHead">
              <div>
                <div className="kicker">Shop</div>
                <h2>Best sellers (simple, giftable, reliable)</h2>
              </div>
              <div className="hint">Click “Add” to build a cart</div>
            </div>

            <div className="grid">
              {PRODUCTS.map((p) => (
                <article key={p.id} className="card">
                  <div className="cardTop">
                    <div className="badge">{p.badge}</div>
                    <div className="price">{formatMoney(p.price)}</div>
                  </div>

                  <div className="img" aria-hidden="true">
                    <div className="imgInner" />
                  </div>

                  <div className="cardBody">
                    <div className="name">{p.name}</div>
                    <div className="desc">{p.desc}</div>
                    <div className="meta">{p.color}</div>

                    <div className="actions">
                      <button className="btn primary" onClick={() => addToCart(p.id)}>
                        Add
                      </button>
                      <button className="btn ghost" onClick={() => removeFromCart(p.id)} disabled={!cart[p.id]}>
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="cart" className="section cartSection">
            <div className="sectionHead">
              <div>
                <div className="kicker">Cart</div>
                <h2>Your picks</h2>
              </div>
              <button className="linkBtn" onClick={clearCart} disabled={!cartItems.length}>
                Clear cart
              </button>
            </div>

            <div className="cartGrid">
              <div className="cartPanel">
                {!cartItems.length ? (
                  <div className="empty">
                    Your cart is empty. Add a couple items above and then checkout.
                  </div>
                ) : (
                  <div className="cartList">
                    {cartItems.map((it) => (
                      <div key={it.id} className="cartRow">
                        <div>
                          <div className="cartName">{it.name}</div>
                          <div className="cartMeta">{it.color}</div>
                        </div>
                        <div className="cartQty">
                          <button className="qtyBtn" onClick={() => removeFromCart(it.id)}>
                            −
                          </button>
                          <div className="qty">{it.qty}</div>
                          <button className="qtyBtn" onClick={() => addToCart(it.id)}>
                            +
                          </button>
                        </div>
                        <div className="cartPrice">{formatMoney(it.price * it.qty)}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="summary">
                <div className="summaryBox">
                  <div className="sumRow">
                    <span>Subtotal</span>
                    <span>{formatMoney(subtotal)}</span>
                  </div>

                  <div className="sumRow">
                    <span>Coupon</span>
                    <span className="muted">Optional</span>
                  </div>

                  <input
                    className="coupon"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Try BLOOM10"
                  />

                  <div className="sumRow">
                    <span>Discount</span>
                    <span>-{formatMoney(discount)}</span>
                  </div>

                  <div className="sumTotal">
                    <span>Total</span>
                    <span>{formatMoney(total)}</span>
                  </div>

                  <button className="btn primary full" onClick={checkout} disabled={!cartItems.length}>
                    Checkout (email for now)
                  </button>

                  <div className="tiny muted">
                    Next step: connect Stripe/Shopify so checkout is automatic.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="why" className="section">
            <div className="sectionHead">
              <div>
                <div className="kicker">Why this store works</div>
                <h2>Small catalog, high trust, easy decisions.</h2>
              </div>
            </div>

            <div className="whyGrid">
              <div className="whyCard">
                <h3>Curated only</h3>
                <p>No endless scrolling. We keep 10–20 products max per drop.</p>
              </div>
              <div className="whyCard">
                <h3>Giftable by design</h3>
                <p>Every item should make a great gift—easy to buy, easy to love.</p>
              </div>
              <div className="whyCard">
                <h3>No inventory needed</h3>
                <p>Use print-on-demand + dropship suppliers so you don’t hold stock.</p>
              </div>
            </div>
          </section>

          <section className="section newsletter">
            <div className="newsletterBox">
              <div>
                <div className="kicker">Waitlist</div>
                <h2>Want early access to new drops?</h2>
                <p className="sub">
                  Join the list and get first dibs + a launch coupon.
                </p>
              </div>

              <form className="newsForm" onSubmit={joinWaitlist}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  type="email"
                />
                <button className="btn primary" type="submit">
                  Join
                </button>
              </form>

              <div className="tiny muted">
                Replace the waitlist “mailto” with Mailchimp/FormSubmit later.
              </div>
            </div>
          </section>

          <section id="faq" className="section">
            <div className="sectionHead">
              <div>
                <div className="kicker">FAQ</div>
                <h2>Quick answers</h2>
              </div>
            </div>

            <div className="faq">
              <details>
                <summary>Do I need to hold inventory?</summary>
                <p>
                  No. Start with print-on-demand items (totes, shirts) + dropship suppliers for small goods.
                  You only pay suppliers after you sell.
                </p>
              </details>
              <details>
                <summary>How do I take payments?</summary>
                <p>
                  Easiest: Shopify. Cheapest/fast: Stripe Checkout links. We can wire it in next.
                </p>
              </details>
              <details>
                <summary>What should I sell first?</summary>
                <p>
                  Start with a “giftable essentials” theme: hair + self-care + jewelry + journals. Keep it tight.
                </p>
              </details>
            </div>
          </section>

          <footer className="footer">
            <div>© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
            <div className="footerLinks">
              <a href="#shop">Shop</a>
              <span>•</span>
              <a href="#cart">Cart</a>
              <span>•</span>
              <a href="#faq">FAQ</a>
            </div>
          </footer>
        </main>
      </div>

      <style jsx global>{`
        :root{
          --bg:#0b1220;
          --panel:#111a2e;
          --panel2:#0f1730;
          --text:#eef2ff;
          --muted:#b9c5e6;
          --border: rgba(255,255,255,.12);
          --shadow: 0 18px 55px rgba(0,0,0,.35);
          --radius: 18px;
          --max: 1120px;
          --a: #ff5da2;
          --b: #9b7bff;
          --c: #62e9c6;
          --font: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
        }
        *{box-sizing:border-box}
        html,body{padding:0;margin:0}
        body{
          font-family: var(--font);
          color: var(--text);
          background:
            radial-gradient(1200px 800px at 15% 0%, rgba(255,93,162,.18), transparent 60%),
            radial-gradient(900px 700px at 85% 20%, rgba(155,123,255,.18), transparent 55%),
            radial-gradient(900px 700px at 60% 90%, rgba(98,233,198,.12), transparent 55%),
            var(--bg);
          line-height:1.35;
        }
        a{color:inherit;text-decoration:none}
        .page{min-height:100vh}
        .wrap{max-width:var(--max);margin:0 auto;padding:22px}
        .header{
          position:sticky;top:0;z-index:10;
          backdrop-filter: blur(12px);
          background: rgba(11,18,32,.55);
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .headerRow{
          display:flex;align-items:center;justify-content:space-between;gap:14px;
        }
        .brand{display:flex;align-items:center;gap:12px;min-width:280px}
        .mark{
          width:36px;height:36px;border-radius:12px;
          background: linear-gradient(135deg, rgba(255,93,162,.9), rgba(155,123,255,.9));
          border:1px solid rgba(255,255,255,.22);
          box-shadow: 0 14px 40px rgba(0,0,0,.25);
        }
        .brandName{font-weight:900;letter-spacing:.2px}
        .brandTag{font-size:12px;color:var(--muted);margin-top:2px}
        .nav{display:flex;gap:14px;color:var(--muted)}
        .nav a{padding:8px 10px;border-radius:12px}
        .nav a:hover{background: rgba(255,255,255,.06); color: var(--text)}
        .cartBtn{
          display:inline-flex;align-items:center;gap:10px;
          padding:10px 14px;border-radius:999px;
          background: rgba(255,255,255,.07);
          border:1px solid rgba(255,255,255,.12);
          color: var(--text);
          cursor:pointer;
          font-weight:800;
        }
        .cartCount{
          display:inline-grid;place-items:center;
          min-width:26px;height:26px;border-radius:999px;
          background: rgba(255,93,162,.18);
          border:1px solid rgba(255,93,162,.35);
          font-weight:900;
        }

        .hero{
          display:grid;
          grid-template-columns: 1.25fr .9fr;
          gap:18px;
          margin-top:18px;
        }
        .heroLeft{
          background: rgba(255,255,255,.05);
          border:1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding:26px;
        }
        .pill{
          display:inline-flex;align-items:center;gap:8px;
          padding:8px 12px;border-radius:999px;
          border:1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
          color: var(--muted);
          font-weight:700;
          font-size:12px;
        }
        h1{
          margin:14px 0 10px;
          font-size: clamp(32px, 4vw, 56px);
          line-height:1.05;
          letter-spacing:-.8px;
        }
        .sub{color:var(--muted);margin:0;font-size:16px;max-width:55ch}
        .heroCtas{display:flex;gap:10px;align-items:center;margin-top:18px;flex-wrap:wrap}
        .btn{
          display:inline-flex;align-items:center;justify-content:center;
          padding:12px 16px;border-radius:999px;
          border:1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
          font-weight:900;
          cursor:pointer;
        }
        .btn.primary{
          border-color: rgba(255,93,162,.45);
          background: linear-gradient(135deg, rgba(255,93,162,.95), rgba(155,123,255,.95));
          box-shadow: 0 14px 45px rgba(255,93,162,.18);
        }
        .btn.ghost{
          background: rgba(255,255,255,.04);
          color: var(--text);
        }
        .btn:disabled{opacity:.5;cursor:not-allowed}
        .trustRow{display:flex;gap:12px;flex-wrap:wrap;margin-top:16px;color:var(--muted);font-size:13px}
        .trustItem{
          padding:8px 10px;border-radius:12px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.10);
        }

        .heroCard{
          background: rgba(255,255,255,.05);
          border:1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          overflow:hidden;
        }
        .heroCardTop{
          display:flex;align-items:center;justify-content:space-between;
          padding:14px 16px;
          border-bottom: 1px solid rgba(255,255,255,.10);
          background: rgba(255,255,255,.03);
        }
        .miniTitle{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.18em}
        .miniBadge{
          font-size:12px;font-weight:900;
          padding:6px 10px;border-radius:999px;
          background: rgba(98,233,198,.10);
          border: 1px solid rgba(98,233,198,.26);
          color: #d9fff6;
        }
        .heroCardBody{padding:16px}
        .bundleName{font-weight:950;font-size:20px;margin-bottom:6px}
        .bundleDesc{color:var(--muted);font-size:13px;margin-bottom:14px}
        .bundleRow{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
        .bundlePrice{display:flex;align-items:baseline;gap:10px}
        .priceNow{font-size:22px;font-weight:950}
        .priceWas{color:var(--muted);text-decoration:line-through;font-size:13px}
        .tiny{font-size:12px;margin-top:12px;color:var(--muted)}
        .tiny b{color:var(--text)}

        .section{margin-top:26px}
        .sectionHead{
          display:flex;align-items:flex-end;justify-content:space-between;gap:14px;
          margin-bottom:12px;
        }
        .kicker{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.18em;margin-bottom:6px}
        h2{margin:0;font-size:26px;letter-spacing:-.3px}
        .hint{color:var(--muted);font-size:12px}

        .grid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap:14px;
        }
        .card{
          background: rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.12);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          overflow:hidden;
        }
        .cardTop{
          display:flex;align-items:center;justify-content:space-between;
          padding:12px 14px;
          border-bottom: 1px solid rgba(255,255,255,.10);
        }
        .badge{
          font-size:12px;
          padding:6px 10px;border-radius:999px;
          background: rgba(255,255,255,.06);
          border:1px solid rgba(255,255,255,.12);
          color: var(--muted);
          font-weight:800;
        }
        .price{font-weight:950}
        .img{
          height:150px;
          background:
            radial-gradient(300px 140px at 20% 20%, rgba(255,93,162,.18), transparent 60%),
            radial-gradient(240px 140px at 80% 30%, rgba(155,123,255,.18), transparent 60%),
            radial-gradient(280px 160px at 60% 90%, rgba(98,233,198,.12), transparent 60%),
            rgba(255,255,255,.03);
          display:grid;place-items:center;
        }
        .imgInner{
          width:62%;height:62%;
          border-radius: 22px;
          border:1px solid rgba(255,255,255,.14);
          background: rgba(0,0,0,.14);
        }
        .cardBody{padding:14px}
        .name{font-weight:950;margin-bottom:6px}
        .desc{color:var(--muted);font-size:13px;margin-bottom:10px}
        .meta{color:rgba(255,255,255,.75);font-size:12px;margin-bottom:12px}
        .actions{display:flex;gap:10px}

        .cartSection .cartGrid{
          display:grid;
          grid-template-columns: 1.35fr .65fr;
          gap:14px;
        }
        .cartPanel{
          background: rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.12);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding:14px;
        }
        .empty{color:var(--muted);padding:14px}
        .cartList{display:grid;gap:10px}
        .cartRow{
          display:flex;align-items:center;justify-content:space-between;gap:12px;
          padding:12px;border-radius:14px;
          background: rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.10);
        }
        .cartName{font-weight:900}
        .cartMeta{color:var(--muted);font-size:12px;margin-top:2px}
        .cartQty{display:flex;align-items:center;gap:10px}
        .qtyBtn{
          width:34px;height:34px;border-radius:12px;
          border:1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
          color: var(--text);
          font-weight:900;
          cursor:pointer;
        }
        .qty{min-width:18px;text-align:center;font-weight:900}
        .cartPrice{font-weight:950}
        .summary{
          display:flex;align-items:flex-start;
        }
        .summaryBox{
          width:100%;
          background: rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.12);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding:14px;
        }
        .sumRow{display:flex;justify-content:space-between;align-items:center;color:var(--muted);font-size:13px;margin-bottom:10px}
        .sumTotal{
          display:flex;justify-content:space-between;align-items:center;
          font-weight:950;font-size:18px;
          margin:12px 0;
        }
        .coupon{
          width:100%;
          padding:12px 12px;
          border-radius:14px;
          border:1px solid rgba(255,255,255,.14);
          background: rgba(0,0,0,.22);
          color: var(--text);
          outline:none;
          margin: 2px 0 10px;
        }
        .full{width:100%}

        .linkBtn{
          background: transparent;
          border:0;
          color: var(--muted);
          cursor:pointer;
          font-weight:800;
        }
        .linkBtn:hover{color:var(--text)}
        .linkBtn:disabled{opacity:.5;cursor:not-allowed}

        .whyGrid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap:14px;
        }
        .whyCard{
          background: rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.12);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding:16px;
        }
        .whyCard h3{margin:0 0 8px;font-size:16px}
        .whyCard p{margin:0;color:var(--muted);font-size:13px}

        .newsletterBox{
          background: linear-gradient(135deg, rgba(255,93,162,.12), rgba(155,123,255,.12), rgba(98,233,198,.08));
          border:1px solid rgba(255,255,255,.14);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding:18px;
          display:grid;
          gap:12px;
        }
        .newsForm{
          display:flex;gap:10px;flex-wrap:wrap;
        }
        .newsForm input{
          flex:1;
          min-width:240px;
          padding:12px 12px;
          border-radius:14px;
          border:1px solid rgba(255,255,255,.14);
          background: rgba(0,0,0,.22);
          color: var(--text);
          outline:none;
        }

        .faq{
          display:grid;gap:10px;
        }
        details{
          background: rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.12);
          border-radius: 14px;
          padding:12px 14px;
        }
        summary{cursor:pointer;font-weight:900}
        details p{margin:10px 0 0;color:var(--muted);font-size:13px}

        .footer{
          margin:26px 0 10px;
          padding:18px 0 10px;
          border-top:1px solid rgba(255,255,255,.10);
          color:var(--muted);
          display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;
          font-size:12px;
        }
        .footerLinks{display:flex;gap:10px;align-items:center}
        .footerLinks a:hover{color:var(--text)}

        @media (max-width: 980px){
          .nav{display:none}
          .hero{grid-template-columns:1fr}
          .grid{grid-template-columns:1fr}
          .whyGrid{grid-template-columns:1fr}
          .cartSection .cartGrid{grid-template-columns:1fr}
        }
      `}</style>
    </>
  );
}
