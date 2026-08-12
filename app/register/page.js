"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(event) {
    event.preventDefault();

    setMessage("");
    setError("");

    if (password.length < 8) {
      setError("رمز عبور باید حداقل ۸ کاراکتر باشد.");
      return;
    }

    if (password !== confirmPassword) {
      setError("رمزهای عبور یکسان نیستند.");
      return;
    }

    setLoading(true);

    try {
      const { error: signUpError } =
        await supabase.auth.signUp({
          email: email.trim(),
          password,
        });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      setMessage(
        "ثبت‌نام با موفقیت انجام شد. ایمیل خود را برای تأیید حساب بررسی کنید."
      );
    } catch {
      setError(
        "خطایی رخ داد. لطفاً دوباره تلاش کنید."
      );
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
          <h1>ساخت حساب</h1>

          <p>
            برای شروع استفاده از REDX حساب خود را بسازید.
          </p>
        </div>

        <form onSubmit={handleRegister}>

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
              placeholder="حداقل ۸ کاراکتر"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
            />
          </div>

          <div className="auth-field">
            <label>تکرار رمز عبور</label>

            <input
              type="password"
              placeholder="رمز عبور را دوباره وارد کنید"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              required
            />
          </div>

          <button
            className="auth-button"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "در حال ساخت حساب..."
              : "ساخت حساب REDX"}
          </button>

        </form>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        {message && (
          <div className="auth-message">
            {message}
          </div>
        )}

        <p className="auth-footer">
          قبلاً حساب ساخته‌اید؟{" "}
          <a href="/login">
            وارد شوید
          </a>
        </p>

      </div>

    </main>
  );
    }
