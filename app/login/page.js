"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      // اتصال Supabase را در مرحله بعد اضافه می‌کنیم.
      console.log({
        email,
        password,
      });

      setMessage("در حال ورود...");
    } catch {
      setMessage("خطایی رخ داد. دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">

      <div className="auth-card">

        <a href="/" className="logo auth-logo">
          <span className="logo-mark">R</span>
          REDX
        </a>

        <div className="auth-heading">
          <h1>خوش آمدید</h1>

          <p>
            برای ورود به حساب REDX اطلاعات خود را وارد کنید.
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="auth-field">
            <label>ایمیل</label>

            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />
          </div>

          <div className="auth-field">
            <label>رمز عبور</label>

            <input
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
            />
          </div>

          <button
            className="auth-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "در حال ورود..." : "ورود به REDX"}
          </button>

        </form>

        {message && (
          <div className="auth-message">
            {message}
          </div>
        )}

        <p className="auth-footer">
          حساب ندارید؟{" "}
          <a href="/register">
            ثبت‌نام کنید
          </a>
        </p>

      </div>

    </main>
  );
    }
