"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

type FormState = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  message: "",
};

const inputClasses =
  "w-full rounded-md bg-gray-100 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:bg-white focus:ring-2 focus:ring-brand-green";

function RequiredMark() {
  return <span className="ml-1 text-red-500">*</span>;
}

const HYPERFORM_ENDPOINT = "https://hyperform.jp/api/ziF6xkRS";

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const body = new FormData();
    body.append("会社名", formData.companyName);
    body.append("お名前", formData.contactName);
    body.append("email", formData.email);
    body.append("電話番号", formData.phone);
    body.append("相談内容", formData.message);

    try {
      const res = await fetch(HYPERFORM_ENDPOINT, {
        method: "POST",
        body,
      });
      if (!res.ok) throw new Error("送信に失敗しました");
      setSubmitted(true);
      setFormData(initialState);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="お問い合わせ"
          description="今ある予算を、より良い集客につなげるために。まずは今の課題を聞かせてください。"
        />

        {submitted ? (
          <p className="text-sm leading-relaxed text-brand-dark">
            送信しました。担当より折り返しご連絡いたします。
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex max-w-xl flex-col gap-5"
          >
            <p className="text-xs text-gray-500">
              <span className="text-red-500">*</span>
              マーク項目は入力必須項目です。
            </p>

            <div>
              <label
                htmlFor="companyName"
                className="mb-1 block text-sm font-medium text-brand-dark"
              >
                会社名
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="contactName"
                className="mb-1 block text-sm font-medium text-brand-dark"
              >
                お名前
                <RequiredMark />
              </label>
              <input
                id="contactName"
                name="contactName"
                type="text"
                required
                value={formData.contactName}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-brand-dark"
              >
                メールアドレス
                <RequiredMark />
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-sm font-medium text-brand-dark"
              >
                電話番号
                <RequiredMark />
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-brand-dark"
              >
                相談内容
                <RequiredMark />
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">
                送信に失敗しました。時間を置いて再度お試しください。
              </p>
            )}

            <div>
              <Button type="submit" disabled={submitting}>
                {submitting ? "送信中..." : "送信する"}
              </Button>
            </div>
          </form>
        )}
      </Container>
    </section>
  );
}
