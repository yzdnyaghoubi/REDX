"use client";

import { useEffect, useState } from "react";

const COINS = ["USDT", "BTC", "ETH"];

export default function Home() {
  const [mode, setMode] = useState("buy");
  const [coin, setCoin] = useState("USDT");
  const [amount, setAmount] = useState("");
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPrices() {
      try {
        const response = await fetch("/api/price");
        const data = await response.json();

        if (data.success) {
          setPrices(data.prices);
        }
      } catch (error) {
        console.error("Failed to load prices:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPrices();

    const interval = setInterval(loadPrices, 15000);

    return () => clearInterval(interval);
  }, []);

  const selectedPrice = prices.find(
    (item) => item.symbol === coin
  );

  const marketPrice = selectedPrice?.marketPrice || 0;
  const buyPrice = selectedPrice?.buyPrice || 0;
  const sellPrice = selectedPrice?.sellPrice || 0;

  const numericAmount = Number(amount) || 0;

  let received = 0;

  if (mode === "buy" && buyPrice > 0) {
    received = numericAmount / buyPrice;
  }

  if (mode === "sell" && sellPrice > 0) {
    received = numericAmount * sellPrice;
  }

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
            قیمت‌ها هر ۱۵ ثانیه به‌روزرسانی می‌شوند
          </div>

          <h1>
            خرید و فروش
            <br />
            <span>تتر و ارز دیجیتال</span>
          </h1>

          <p>
            خرید و فروش تتر و ارزهای دیجیتال با
            تجربه‌ای سریع، ساده و شفاف در REDX.
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

            {/* COIN */}

            <div className="coin-select">

              <span>ارز دیجیتال</span>

              <select
                value={coin}
                onChange={(event) =>
                  setCoin(event.target.value)
                }
              >
                {COINS.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

            </div>

            {/* AMOUNT */}

            <div className="amount-box">

              <label>
                {mode === "buy"
                  ? "مبلغ پرداختی"
                  : "مقدار برای فروش"}
              </label>

              <div className="amount-input">

                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={amount}
                  onChange={(event) =>
                    setAmount(event.target.value)
                  }
                />

                <span>
                  {mode === "buy"
                    ? "تومان"
                    : coin}
                </span>

              </div>

            </div>

            {/* PRICE */}

            <div className="price-info">

              <div>
                <span>قیمت بازار</span>

                <strong>
                  {loading
                    ? "در حال دریافت..."
                    : `${marketPrice.toLocaleString("fa-IR")} تومان`}
                </strong>
              </div>

              <div>
                <span>کارمزد REDX</span>

                <strong>۶.۵٪</strong>
              </div>

              <div>
                <span>
                  {mode === "buy"
                    ? "قیمت خرید"
                    : "قیمت فروش"}
                </span>

                <strong>
                  {mode === "buy"
                    ? `${buyPrice.toLocaleString("fa-IR")} تومان`
                    : `${sellPrice.toLocaleString("fa-IR")} تومان`}
                </strong>
              </div>

              <div>
                <span>
                  {mode === "buy"
                    ? "دریافت تقریبی"
                    : "دریافت ریالی"}
                </span>

                <strong>
                  {received > 0
                    ? mode === "buy"
                      ? `${received.toLocaleString("fa-IR", {
                          maximumFractionDigits: 6,
                        })} ${coin}`
                      : `${received.toLocaleString("fa-IR")} تومان`
                    : "—"}
                </strong>
              </div>

            </div>

            {/* ACTION */}

            <button className="trade-button">

              {mode === "buy"
                ? "ادامه خرید"
                : "ادامه فروش"}

            </button>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        className="features"
        id="features"
      >

        <div className="section-heading">

          <span>REDX</span>

          <h2>
            معامله ساده،
            <br />
            بدون پیچیدگی
          </h2>

          <p>
            از مشاهده قیمت تا ثبت سفارش،
            همه چیز در یک محیط ساده و شفاف.
          </p>

        </div>

        <div className="feature-grid">

          <div className="feature-card">

            <span>01</span>

            <h3>
              قیمت لحظه‌ای
            </h3>

            <p>
              قیمت بازار و نرخ خرید و فروش
              به‌صورت خودکار به‌روزرسانی می‌شود.
            </p>

          </div>

          <div className="feature-card">

            <span>02</span>

            <h3>
              خرید و فروش سریع
            </h3>

            <p>
              مقدار موردنظر خود را وارد کنید
              و سفارش خود را به‌سادگی ثبت کنید.
            </p>

          </div>

          <div className="feature-card">

            <span>03</span>

            <h3>
              کارمزد شفاف
            </h3>

            <p>
              کارمزد ۶.۵٪ قبل از ثبت سفارش
              به‌صورت واضح نمایش داده می‌شود.
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="logo">
          <span className="logo-mark">
            R
          </span>

          REDX
        </div>

        <span>
          © 2026 REDX
        </span>

      </footer>

    </main>
  );
        }
