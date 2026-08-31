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
  "w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-brand-dark outline-none focus:border-brand-green";

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("お問い合わせ内容:", formData);
    setSubmitted(true);
    setFormData(initialState);
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
            <div>
              <label
                htmlFor="companyName"
                className="mb-1 block text-sm font-medium text-brand-dark"
              >
                会社名(任意)
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

            <div>
              <Button type="submit">送信する</Button>
            </div>
          </form>
        )}
      </Container>
    </section>
  );
}
