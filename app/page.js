"use client";

import { useState } from "react";

const COINS = ["USDT", "BTC", "ETH"];

export default function Home() {
  const [mode, setMode] = useState("buy");
  const [coin, setCoin] = useState("USDT");
  const [amount, setAmount] = useState("");

  const basePrice = 100000;
  const feeRate = 0.065;

  const numericAmount = Number(amount) || 0;
  const fee = numericAmount * feeRate;
  const total = mode === "buy"
    ? numericAmount + fee
    : numericAmount - fee;

  return (
    <main className="redx-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="/" className="logo">
          <span className="logo-mark">R</span>
          REDX
        </a>

        <div className="nav-links">
          <a href="#trade">خرید و فروش</a>
          <a href="#features">امکانات</a>
          <a href="#security">امنیت</a>
        </div>

        <button className="nav-button">
          ورود / ثبت‌نام
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="trade">

        <div className="hero-content">

          <div className="badge">
            <span className="badge-dot" />
            قیمت‌ها به‌صورت لحظه‌ای به‌روزرسانی می‌شوند
          </div>

          <h1>
            خرید و فروش
            <br />
            <span>ارز دیجیتال</span>
          </h1>

          <p>
            خرید و فروش تتر و ارزهای دیجیتال با تجربه‌ای
            سریع، ساده و شفاف در REDX.
          </p>

          {/* TRADE CARD */}
          <div className="trade-card">

            <div className="trade-tabs">
              <button
                className={mode === "buy" ? "active" : ""}
                onClick={() => setMode("buy")}
              >
                خرید
              </button>

              <button
                className={mode === "sell" ? "active" : ""}
                onClick={() => setMode("sell")}
              >
                فروش
              </button>
            </div>

            <div className="coin-select">
              <span>ارز دیجیتال</span>

              <select
                value={coin}
                onChange={(e) => setCoin(e.target.value)}
              >
                {COINS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="amount-box">
              <label>
                {mode === "buy"
                  ? "مبلغ پرداختی"
                  : "مقدار برای فروش"}
              </label>

              <div className="amount-input">
                <input
                  type="number"
                  placeholder="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <span>
                  {mode === "buy" ? "تومان" : coin}
                </span>
              </div>
            </div>

            <div className="price-info">

              <div>
                <span>قیمت لحظه‌ای</span>
                <strong>
                  {basePrice.toLocaleString("fa-IR")} تومان
                </strong>
              </div>

              <div>
                <span>کارمزد</span>
                <strong>۶.۵٪</strong>
              </div>

              <div>
                <span>
                  {mode === "buy"
                    ? "مبلغ نهایی"
                    : "مبلغ دریافتی"}
                </span>

                <strong>
                  {total.toLocaleString("fa-IR")} تومان
                </strong>
              </div>

            </div>

            <button className="trade-button">
              {mode === "buy"
                ? "ادامه خرید"
                : "ادامه فروش"}
            </button>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="features" id="features">

        <div className="section-heading">
          <span>REDX</span>

          <h2>
            همه چیز برای یک
            <br />
            معامله ساده
          </h2>

          <p>
            از ثبت سفارش تا پرداخت و دریافت ارز،
            همه چیز در یک محیط ساده و سریع.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <span>01</span>
            <h3>قیمت لحظه‌ای</h3>
            <p>
              نرخ ارزها به‌صورت لحظه‌ای محاسبه
              و در اختیار شما قرار می‌گیرد.
            </p>
          </div>

          <div className="feature-card">
            <span>02</span>
            <h3>ثبت سفارش سریع</h3>
            <p>
              بدون مراحل اضافی سفارش خرید یا
              فروش خود را ثبت کنید.
            </p>
          </div>

          <div className="feature-card">
            <span>03</span>
            <h3>شفافیت کارمزد</h3>
            <p>
              کارمزد قبل از تأیید سفارش به‌صورت
              واضح نمایش داده می‌شود.
            </p>
          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">
        <div className="logo">
          <span className="logo-mark">R</span>
          REDX
        </div>

        <span>
          © 2026 REDX. All rights reserved.
        </span>
      </footer>

    </main>
  );
            }
