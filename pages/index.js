.page {
  min-height: 100vh;
  color: #111827;
  background:
    radial-gradient(900px 600px at 20% 0%, rgba(255, 168, 208, 0.22), transparent 60%),
    radial-gradient(900px 700px at 85% 15%, rgba(160, 210, 255, 0.25), transparent 60%),
    linear-gradient(180deg, #fff 0%, #fbf7ff 55%, #fff 100%);
}

.nav {
  max-width: 1120px;
  margin: 0 auto;
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logoMark {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-weight: 900;
  color: #111827;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(17, 24, 39, 0.08);
  box-shadow: 0 12px 30px rgba(17, 24, 39, 0.10);
}

.brandName {
  font-weight: 900;
  letter-spacing: -0.2px;
}

.brandSub {
  font-size: 12px;
  color: rgba(17, 24, 39, 0.65);
}

.navLinks {
  display: flex;
  gap: 16px;
  align-items: center;
}

.navLinks a {
  text-decoration: none;
  color: rgba(17, 24, 39, 0.75);
  font-weight: 700;
  font-size: 13px;
}

.navCtas {
  display: flex;
  gap: 10px;
  align-items: center;
}

.primaryBtn,
.ghostBtn,
.primaryBtnLg,
.ghostBtnLg {
  border: 1px solid rgba(17, 24, 39, 0.10);
  border-radius: 999px;
  padding: 10px 14px;
  text-decoration: none;
  font-weight: 850;
  font-size: 13px;
}

.primaryBtn,
.primaryBtnLg {
  color: #111827;
  background: linear-gradient(135deg, rgba(255, 168, 208, 0.85), rgba(160, 210, 255, 0.85));
  box-shadow: 0 14px 34px rgba(17, 24, 39, 0.14);
}

.ghostBtn,
.ghostBtnLg {
  background: rgba(255, 255, 255, 0.65);
  color: rgba(17, 24, 39, 0.85);
}

.primaryBtnLg,
.ghostBtnLg {
  padding: 12px 18px;
  font-size: 14px;
}

.hero {
  max-width: 1120px;
  margin: 0 auto;
  padding: 6px 22px 18px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 20px;
  align-items: center;
}

.heroLeft {
  padding: 18px 0;
}

.kicker {
  display: inline-block;
  font-size: 12px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(17, 24, 39, 0.55);
  margin-bottom: 10px;
}

.h1 {
  font-size: clamp(34px, 4vw, 56px);
  line-height: 1.02;
  letter-spacing: -0.9px;
  margin: 0 0 10px;
}

.h1Accent {
  background: linear-gradient(135deg, #ff6fb5, #5aa8ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.lead {
  margin: 0 0 16px;
  color: rgba(17, 24, 39, 0.68);
  font-weight: 650;
  max-width: 56ch;
}

.heroCtas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 14px 0 18px;
}

.trustRow {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.trustItem {
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(17, 24, 39, 0.08);
  border-radius: 18px;
  padding: 12px 14px;
  min-width: 160px;
  box-shadow: 0 12px 28px rgba(17, 24, 39, 0.08);
}

.trustTitle {
  font-weight: 900;
}

.trustSub {
  font-size: 12px;
  color: rgba(17, 24, 39, 0.62);
  margin-top: 2px;
}

.heroRight {
  position: relative;
  padding: 18px 0;
}

.collage {
  position: relative;
  height: 520px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(17, 24, 39, 0.08);
  box-shadow: 0 18px 44px rgba(17, 24, 39, 0.12);
  overflow: hidden;
}

.collageCard,
.collageCardTall,
.collageCardSmall {
  position: absolute;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(17, 24, 39, 0.10);
  box-shadow: 0 14px 36px rgba(17, 24, 39, 0.18);
}

.collageCard img,
.collageCardTall img,
.collageCardSmall img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.collageCard {
  width: 58%;
  height: 46%;
  left: 8%;
  top: 10%;
  transform: rotate(-2deg);
}

.collageCardTall {
  width: 46%;
  height: 64%;
  right: 8%;
  top: 14%;
  transform: rotate(2deg);
}

.collageCardSmall {
  width: 44%;
  height: 30%;
  left: 18%;
  bottom: 10%;
  transform: rotate(1deg);
}

.floatingTag,
.floatingTag2 {
  position: absolute;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(17, 24, 39, 0.10);
  box-shadow: 0 14px 32px rgba(17, 24, 39, 0.12);
  font-weight: 900;
  font-size: 12px;
}

.floatingTag {
  left: 12%;
  top: 6%;
}

.floatingTag2 {
  right: 12%;
  bottom: 7%;
}

.section,
.sectionAlt {
  max-width: 1120px;
  margin: 0 auto;
  padding: 28px 22px;
}

.sectionAlt {
  padding: 34px 22px;
  border-top: 1px solid rgba(17, 24, 39, 0.06);
  border-bottom: 1px solid rgba(17, 24, 39, 0.06);
  background: rgba(255, 255, 255, 0.55);
  border-radius: 34px;
}

.sectionTop {
  display: grid;
  gap: 6px;
  margin-bottom: 16px;
}

.h2 {
  margin: 0;
  font-size: 26px;
  letter-spacing: -0.4px;
}

.subtext {
  margin: 0;
  color: rgba(17, 24, 39, 0.62);
  font-weight: 650;
}

.productRow {
  display: grid;
  gap: 14px;
}

.productCard {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 14px;
  background: rgba(255, 255, 255, 0.70);
  border: 1px solid rgba(17, 24, 39, 0.08);
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(17, 24, 39, 0.10);
}

.productImageWrap {
  position: relative;
  min-height: 220px;
}

.productImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(17, 24, 39, 0.10);
  font-weight: 900;
  font-size: 12px;
}

.productMeta {
  padding: 16px 16px 16px 4px;
  display: grid;
  align-content: center;
  gap: 6px;
}

.productTitle {
  font-weight: 950;
  font-size: 18px;
}

.productTagline {
  color: rgba(17, 24, 39, 0.62);
  font-weight: 650;
}

.productBottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
}

.price {
  font-weight: 950;
  font-size: 16px;
}

.addBtn {
  border: 1px solid rgba(17, 24, 39, 0.10);
  border-radius: 999px;
  padding: 10px 14px;
  font-weight: 900;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.70);
}

.centerCta {
  margin-top: 14px;
  display: flex;
  justify-content: center;
}

.storyGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.storyCard {
  border-radius: 28px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.70);
  border: 1px solid rgba(17, 24, 39, 0.08);
  box-shadow: 0 16px 40px rgba(17, 24, 39, 0.10);
}

.storyImage {
  height: 240px;
}

.storyImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.storyBody {
  padding: 16px;
  display: grid;
  gap: 6px;
}

.storyTitle {
  font-weight: 950;
  font-size: 18px;
}

.storyDesc {
  color: rgba(17, 24, 39, 0.62);
  font-weight: 650;
}

.storyLink {
  margin-top: 6px;
  font-weight: 950;
  text-decoration: none;
  color: #111827;
}

.quoteBlock {
  margin-top: 16px;
  border-radius: 28px;
  padding: 18px 18px 16px;
  background: linear-gradient(135deg, rgba(255, 168, 208, 0.30), rgba(160, 210, 255, 0.28));
  border: 1px solid rgba(17, 24, 39, 0.08);
  box-shadow: 0 18px 44px rgba(17, 24, 39, 0.10);
}

.quoteMark {
  font-size: 46px;
  line-height: 1;
  font-weight: 900;
  opacity: 0.35;
}

.quoteText {
  font-weight: 900;
  font-size: 18px;
  letter-spacing: -0.2px;
  margin-top: -6px;
}

.quoteBy {
  margin-top: 8px;
  color: rgba(17, 24, 39, 0.62);
  font-weight: 700;
  font-size: 13px;
}

.newsletter {
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(17, 24, 39, 0.08);
  border-radius: 28px;
  padding: 18px;
  box-shadow: 0 16px 40px rgba(17, 24, 39, 0.10);
}

.newsKicker {
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(17, 24, 39, 0.55);
  font-weight: 900;
}

.newsTitle {
  font-weight: 950;
  font-size: 20px;
  margin-top: 6px;
}

.newsSub {
  color: rgba(17, 24, 39, 0.62);
  font-weight: 650;
  margin-top: 4px;
}

.newsForm {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.newsInput {
  border: 1px solid rgba(17, 24, 39, 0.12);
  border-radius: 999px;
  padding: 12px 14px;
  min-width: 260px;
  outline: none;
  background: rgba(255, 255, 255, 0.85);
}

.faq {
  display: grid;
  gap: 10px;
}

.details {
  background: rgba(255, 255, 255, 0.70);
  border: 1px solid rgba(17, 24, 39, 0.08);
  border-radius: 22px;
  padding: 14px 16px;
  box-shadow: 0 14px 34px rgba(17, 24, 39, 0.08);
}

.summary {
  cursor: pointer;
  font-weight: 950;
}

.answer {
  margin: 10px 0 0;
  color: rgba(17, 24, 39, 0.62);
  font-weight: 650;
}

.footer {
  max-width: 1120px;
  margin: 0 auto;
  padding: 20px 22px 28px;
}

.footerRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(17, 24, 39, 0.08);
  padding-top: 16px;
}

.footerBrand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footerLinks {
  display: flex;
  gap: 14px;
  align-items: center;
}

.footerLinks a {
  text-decoration: none;
  color: rgba(17, 24, 39, 0.70);
  font-weight: 800;
  font-size: 13px;
}

.footerBottom {
  margin-top: 10px;
  color: rgba(17, 24, 39, 0.60);
  font-size: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}

.dot {
  opacity: 0.5;
}

@media (max-width: 980px) {
  .navLinks {
    display: none;
  }
  .hero {
    grid-template-columns: 1fr;
  }
  .collage {
    height: 440px;
  }
  .productCard {
    grid-template-columns: 1fr;
  }
  .productMeta {
    padding: 14px 16px 16px;
  }
  .storyGrid {
    grid-template-columns: 1fr;
  }
}
