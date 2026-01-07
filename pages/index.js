// pages/index.js
import Head from "next/head";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Fast Junk Removal Quotes | Same-Day Pickup Available</title>
        <meta
          name="description"
          content="Get a fast junk removal quote. Same-day and next-day pickup available. Furniture, appliances, yard waste, construction debris, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="wrap">
        <div className="topbar">
          <div className="brand">
            <div className="logoBox">JR</div>
            <div>
              Local Junk Removal Quotes
              <div className="badge">Tracy • Manteca • Stockton • Modesto</div>
            </div>
          </div>

          <div className="ctaRow">
            <a className="btn secondary" href="#quote">
              Get a Quote
            </a>
            <a className="btn primary" href="tel:+12090000000">
              Call Now
            </a>
          </div>
        </div>

        <div className="hero">
          <div className="panel heroLeft">
            <p className="kicker">Fast • Local • No hassle</p>
            <h1>Get a Junk Removal Quote in Minutes</h1>
            <p className="sub">
              Tell us what you need removed and your location. We’ll connect you with a
              local provider for a fast estimate and scheduling.
            </p>

            <div className="bullets">
              <div className="pill">Same-day / next-day pickup</div>
              <div className="pill">Upfront estimates</div>
              <div className="pill">Furniture • appliances • yard waste</div>
              <div className="pill">Construction debris • cleanouts</div>
            </div>

            <p className="note">
              Looking for ongoing services? Ask about recurring pickup options for landlords
              and contractors.
            </p>
          </div>

          <div id="quote" className="panel formBox">
            <p className="formTitle">Request Your Quote</p>
            <p className="formSub">
              Best response times: 8am–7pm. We usually reply within 10–30 minutes.
            </p>

            {/* Uses FormSubmit.co (free). Replace YOUR_EMAIL_HERE@example.com */}
            <form action="https://formsubmit.co/YOUR_EMAIL_HERE@example.com" method="POST">
              <input type="hidden" name="_subject" value="New Junk Removal Lead" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid2">
                <div>
                  <label>Full Name</label>
                  <input name="name" placeholder="John Smith" required />
                </div>
                <div>
                  <label>Phone</label>
                  <input name="phone" placeholder="(209) 555-1234" required />
                </div>
              </div>

              <div className="grid2">
                <div>
                  <label>Zip Code</label>
                  <input name="zip" placeholder="95376" required />
                </div>
                <div>
                  <label>When do you need pickup?</label>
                  <select name="urgency" required defaultValue="">
                    <option value="">Select…</option>
                    <option>Today</option>
                    <option>Next 1–2 days</option>
                    <option>This week</option>
                    <option>Not sure / planning</option>
                  </select>
                </div>
              </div>

              <label>What do you need removed?</label>
              <select name="type" required defaultValue="">
                <option value="">Select…</option>
                <option>Furniture / Mattress</option>
                <option>Appliances</option>
                <option>Yard waste</option>
                <option>Garage cleanout</option>
                <option>Construction debris</option>
                <option>Hot tub / heavy item</option>
                <option>Other</option>
              </select>

              <label>Quick details (item count, size, access, photos if you have them)</label>
              <textarea
                name="details"
                placeholder="Example: 1 couch, 1 recliner, 6 bags. Driveway access."
              />

              <label>Email (optional)</label>
              <input name="email" placeholder="you@example.com" />

              <button className="submit" type="submit">
                Get My Quote
              </button>

              <p className="small">
                By submitting, you agree to be contacted by phone/text about your request.
                Message/data rates may apply. Reply STOP to opt out.
              </p>
            </form>
          </div>
        </div>

        <div className="section cards">
          <div className="panel card">
            <h3>Transparent, upfront pricing</h3>
            <p>
              Most jobs are quoted by volume, item type, and access. We aim to give clear
              estimates before scheduling.
            </p>
          </div>
          <div className="panel card">
            <h3>Fast scheduling</h3>
            <p>
              Tell us your timeframe. We prioritize urgent pickups and keep communication
              simple.
            </p>
          </div>
          <div className="panel card">
            <h3>Handled safely</h3>
            <p>
              Heavy items and awkward loads require the right crew and equipment. Mention
              stairs, tight access, or backyards.
            </p>
          </div>
        </div>

        <div className="section panel pad18">
          <p className="kicker">Common questions</p>
          <p className="h2">FAQ</p>
          <div className="faq">
            <details>
              <summary>How do quotes work?</summary>
              <p>
                Pricing usually depends on how much space your items take (truck volume),
                item type, and how difficult the load-out is (stairs, distance, backyard
                access).
              </p>
            </details>
            <details>
              <summary>Do you offer same-day pickup?</summary>
              <p>
                Often, yes. Submit your request and choose “Today” for urgency. Availability
                depends on your area and job size.
              </p>
            </details>
            <details>
              <summary>What items can be removed?</summary>
              <p>
                Furniture, appliances, yard waste, cleanouts, and many construction materials.
                For hazardous items, ask first.
              </p>
            </details>
          </div>
        </div>

        <div className="footer">
          <div>© {year} Local Junk Removal Quotes • All rights reserved</div>
          <div>
            <a href="#quote">Request a Quote</a> •{" "}
            <a href="tel:+12090000000">Call</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --bg: #0b1220;
          --card: #111a2e;
          --text: #eaf0ff;
          --muted: #b9c5e6;
          --accent: #4ea1ff;
          --accent2: #8bffcc;
          --border: rgba(255, 255, 255, 0.12);
          --shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
          --radius: 18px;
          --max: 1120px;
          --font: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica,
            Arial, "Apple Color Emoji", "Segoe UI Emoji";
        }
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: var(--font);
          background: radial-gradient(
              1200px 800px at 20% 0%,
              rgba(78, 161, 255, 0.25),
              transparent 60%
            ),
            radial-gradient(
              900px 700px at 80% 20%,
              rgba(139, 255, 204, 0.18),
              transparent 60%
            ),
            var(--bg);
          color: var(--text);
          line-height: 1.35;
        }
        a {
          color: inherit;
        }
        .wrap {
          max-width: var(--max);
          margin: 0 auto;
          padding: 22px;
        }
        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 14px 0;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          letter-spacing: 0.2px;
        }
        .logoBox {
          width: 34px;
          height: 34px;
          border-radius: 12px;
          background: rgba(78, 161, 255, 0.25);
          display: grid;
          place-items: center;
          border: 1px solid var(--border);
          font-weight: 900;
        }
        .badge {
          font-size: 12px;
          color: var(--muted);
          border: 1px solid var(--border);
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          margin-top: 6px;
          display: inline-block;
        }
        .ctaRow {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 16px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.06);
          text-decoration: none;
          font-weight: 700;
        }
        .btn.primary {
          background: linear-gradient(135deg, var(--accent), #2f7bff);
          border-color: rgba(78, 161, 255, 0.5);
          box-shadow: 0 10px 30px rgba(78, 161, 255, 0.25);
        }
        .btn.secondary {
          background: rgba(139, 255, 204, 0.1);
          border-color: rgba(139, 255, 204, 0.3);
        }
        .hero {
          display: grid;
          grid-template-columns: 1.25fr 0.85fr;
          gap: 22px;
          align-items: stretch;
          margin-top: 10px;
        }
        .panel {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          overflow: hidden;
        }
        .heroLeft {
          padding: 26px;
        }
        h1 {
          margin: 0 0 10px 0;
          font-size: clamp(30px, 4vw, 54px);
          line-height: 1.05;
          letter-spacing: -0.6px;
        }
        .sub {
          margin: 0 0 18px 0;
          color: var(--muted);
          font-size: clamp(15px, 1.5vw, 18px);
        }
        .bullets {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin: 18px 0 0;
        }
        .pill {
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.04);
          padding: 10px 12px;
          border-radius: 14px;
          color: var(--text);
          font-weight: 650;
          font-size: 14px;
        }
        .note {
          margin-top: 14px;
          color: var(--muted);
          font-size: 13px;
        }
        .formBox {
          padding: 20px;
        }
        .formTitle {
          font-size: 18px;
          font-weight: 800;
          margin: 0 0 6px;
        }
        .formSub {
          margin: 0 0 14px;
          color: var(--muted);
          font-size: 13px;
        }
        form {
          display: grid;
          gap: 10px;
        }
        label {
          font-size: 12px;
          color: var(--muted);
        }
        input,
        select,
        textarea {
          width: 100%;
          padding: 12px 12px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: rgba(0, 0, 0, 0.2);
          color: var(--text);
          outline: none;
        }
        textarea {
          min-height: 88px;
          resize: vertical;
        }
        .grid2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .small {
          font-size: 11px;
          color: var(--muted);
          line-height: 1.25;
        }
        .submit {
          margin-top: 6px;
          padding: 12px 14px;
          border-radius: 12px;
          border: 0;
          font-weight: 850;
          cursor: pointer;
          background: linear-gradient(135deg, var(--accent2), #4ea1ff);
          color: #04101f;
        }
        .section {
          margin-top: 22px;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .card {
          padding: 16px;
        }
        .card h3 {
          margin: 0 0 6px;
          font-size: 16px;
        }
        .card p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
        }
        .kicker {
          color: var(--muted);
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin: 0 0 8px;
        }
        .h2 {
          font-size: 24px;
          margin: 0 0 12px;
        }
        .faq {
          display: grid;
          gap: 10px;
        }
        details {
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.04);
          border-radius: 14px;
          padding: 12px 14px;
        }
        summary {
          cursor: pointer;
          font-weight: 750;
        }
        details p {
          color: var(--muted);
          font-size: 13px;
          margin: 10px 0 0;
        }
        .pad18 {
          padding: 18px;
        }
        .footer {
          margin: 26px 0 10px;
          color: var(--muted);
          font-size: 12px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          opacity: 0.95;
        }
        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .bullets {
            grid-template-columns: 1fr;
          }
          .cards {
            grid-template-columns: 1fr;
          }
          .grid2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
