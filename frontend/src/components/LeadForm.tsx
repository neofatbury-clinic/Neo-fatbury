"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CLINICS = [
  { id: "kukatpally", label: "Kukatpally Clinic", color: "#00acb1" },
  { id: "himayatnagar", label: "Himayatnagar Clinic", color: "#df8385" },
];

const CATEGORIES = ["Skin", "Hair", "Weight Loss"];

const SKIN_CONCERNS_DEFAULT = [
  "Acne / Pimples",
  "Pigmentation",
  "Dark Circles",
  "Open Pores",
  "Anti-Aging",
];

const SKIN_CONCERNS_MORE = [
  "Dullness",
  "Wrinkles",
  "Stretch Marks",
  "Melasma",
  "Under Eye Bags",
  "Uneven Skin Tone",
];

const HAIR_CONCERNS_DEFAULT = [
  "Hair Fall",
  "Thinning Hair",
  "Dandruff",
  "Scalp Issues",
  "Receding Hairline",
];

const HAIR_CONCERNS_MORE = ["Alopecia", "Premature Greying", "Hair Damage"];

const WEIGHT_CONCERNS_DEFAULT = [
  "Weight Loss",
  "InchLoss",
  "Cellulite",
  "Body Contouring",
  "Fat Freezing",
];

const WEIGHT_CONCERNS_MORE = ["Post-Pregnancy Weight", "Love Handles", "Double Chin"];

function getConcerns(category: string) {
  if (category === "Hair") return { defaults: HAIR_CONCERNS_DEFAULT, more: HAIR_CONCERNS_MORE };
  if (category === "Weight Loss") return { defaults: WEIGHT_CONCERNS_DEFAULT, more: WEIGHT_CONCERNS_MORE };
  return { defaults: SKIN_CONCERNS_DEFAULT, more: SKIN_CONCERNS_MORE };
}

function getConcernLabel(category: string) {
  if (category === "Hair") return "Select Your Hair Concerns";
  if (category === "Weight Loss") return "Select Your Weight Concerns";
  return "Select Your Skin Concerns";
}

export default function LeadForm({ 
  title = "Book Your Free Consultation", 
  buttonText = "Get Free Consultation" 
}: { 
  title?: string;
  buttonText?: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedClinic, setSelectedClinic] = useState<string>("kukatpally");
  const [selectedCategory, setSelectedCategory] = useState<string>("Skin");
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [showMore, setShowMore] = useState(false);

  const MAX_CONCERNS = 2;
  const { defaults, more } = getConcerns(selectedCategory);
  const visibleConcerns = showMore ? [...defaults, ...more] : defaults;

  const toggleConcern = (concern: string) => {
    setSelectedConcerns((prev) => {
      if (prev.includes(concern)) return prev.filter((c) => c !== concern);
      if (prev.length >= MAX_CONCERNS) return prev;
      return [...prev, concern];
    });
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedConcerns([]);
    setShowMore(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send lead to Zoho CRM via our API
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone: mobile,
          service: selectedCategory,
          location: selectedClinic === 'kukatpally' ? 'Kukatpally Clinic' : 'Himayatnagar Clinic',
          concerns: selectedConcerns,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });
      // Whether CRM succeeds or fails, redirect to thank-you (don't block user)
      const data = await res.json().catch(() => ({}));
      if (!res.ok) console.warn('CRM lead warning:', data);
    } catch (err) {
      console.warn('CRM submission warning:', err);
      // Never block the user from reaching thank-you
    } finally {
      router.push('/thank-you');
    }
  };

  return (
    <>
      <div className="lf-wrapper animate-fade-in">
        {/* Header */}
        <h2 className="lf-title">{title}</h2>
        <p className="lf-subtitle">Get expert care tailored to your needs.</p>

        <form onSubmit={handleSubmit} className="lf-form">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="lf-input"
          />

          {/* Mobile */}
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit number"
            className="lf-input"
          />

          {/* Clinic Location */}
          <div className="lf-section">
            <div className="lf-divider-row">
              <span className="lf-divider-line" />
              <span className="lf-section-title">Select Your Preferred Clinic Location</span>
              <span className="lf-divider-line" />
            </div>
            <div className="lf-clinic-row">
              {CLINICS.map((clinic) => (
                <button
                  key={clinic.id}
                  type="button"
                  className={`lf-clinic-btn ${selectedClinic === clinic.id ? "active" : ""}`}
                  style={{
                    backgroundColor: clinic.color,
                    color: "#fff",
                    transform: selectedClinic === clinic.id ? "scale(1.03)" : "scale(1)",
                    opacity: selectedClinic === clinic.id ? 1 : 0.85,
                    boxShadow: selectedClinic === clinic.id ? "0 6px 15px rgba(0,0,0,0.2)" : "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                  onClick={() => setSelectedClinic(clinic.id)}
                >
                  <svg className="lf-pin-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {clinic.label}
                </button>
              ))}
            </div>
            <p className="lf-clinic-hint">
              <em>Choose your nearest clinic for faster appointment scheduling</em>
            </p>
          </div>

          {/* What are you looking for? */}
          <div className="lf-section">
            <div className="lf-divider-row">
              <span className="lf-divider-line" />
              <span className="lf-section-title">What are you looking for?</span>
              <span className="lf-divider-line" />
            </div>
            <div className="lf-category-row">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`lf-category-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  <span className={selectedCategory === cat ? "underline" : ""}>{cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Concerns */}
          <div className="lf-section">
            <div className="lf-divider-row">
              <span className="lf-divider-line" />
              <span className="lf-section-title">
                {getConcernLabel(selectedCategory)} <span className="lf-concern-hint">(Choose up to {MAX_CONCERNS})</span>
              </span>
              <span className="lf-divider-line" />
            </div>
            <div className="lf-concern-grid">
              {visibleConcerns.map((concern) => (
                <button
                  key={concern}
                  type="button"
                  className={`lf-concern-chip ${selectedConcerns.includes(concern) ? "active" : ""}`}
                  onClick={() => toggleConcern(concern)}
                >
                  {concern}
                </button>
              ))}
              <div className="lf-more-wrapper">
                <button
                  type="button"
                  className="lf-concern-chip lf-more-trigger"
                  onClick={() => setShowMore((v) => !v)}
                >
                  More Options <span className={`chevron ${showMore ? "up" : "down"}`}>▼</span>
                </button>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="lf-submit-btn"
            disabled={loading}
          >
            {loading ? "Processing..." : buttonText}
          </button>
        </form>
      </div>

      <style>{`
        .lf-wrapper {
          background: #ffffff;
          padding: 1.25rem 1.1rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          max-width: 380px;
          width: 100%;
          margin: 0 auto;
          font-family: 'Inter', sans-serif;
        }
 
        .lf-title {
          text-align: center;
          font-size: 1.15rem;
          font-weight: 800;
          color: #00acb1;
          margin: 0 0 0.15rem;
          letter-spacing: -0.02em;
        }
 
        .lf-subtitle {
          text-align: center;
          font-size: 0.78rem;
          color: #777;
          margin: 0 0 0.6rem;
          font-weight: 500;
        }
 
        .lf-form {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
 
        .lf-input {
          width: 100%;
          padding: 0.5rem 0.7rem;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
          font-size: 0.82rem;
          color: #333;
          background: #fff;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
 
        .lf-input:focus {
          border-color: #308b98;
        }
 
        .lf-input::placeholder {
          color: #bbb;
        }
 
        /* Section */
        .lf-section {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          margin-top: 0.15rem;
        }
 
        .lf-divider-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.2rem;
        }
 
        .lf-divider-line {
          flex: 1;
          height: 1px;
          background: #f0f0f0;
        }
 
        .lf-section-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: #555;
          white-space: nowrap;
          text-align: center;
        }
 
        .lf-concern-hint {
          font-weight: 400;
          color: #999;
          font-size: 0.75rem;
          font-style: italic;
        }
 
        /* Clinic buttons - FORCED TO 1 LINE */
        .lf-clinic-row {
          display: flex;
          gap: 0.5rem;
        }
 
        .lf-clinic-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.55rem 0.3rem;
          border: none;
          border-radius: 7px;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          color: white;
          white-space: nowrap;
          box-shadow: 0 3px 8px rgba(0,0,0,0.12);
        }
 
        .lf-pin-icon {
          width: 16px;
          height: 16px;
        }
 
        .lf-clinic-hint {
          text-align: center;
          font-size: 0.75rem;
          color: #aaa;
          margin: 0.25rem 0 0.4rem;
          font-style: italic;
          letter-spacing: 0.01em;
        }
 
        /* Category Row */
        .lf-category-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0.35rem;
          margin-bottom: 0.1rem;
        }
 
        .lf-category-btn {
          padding: 0.35rem;
          border-radius: 5px;
          border: 1px solid #ddd;
          background: #fff;
          color: #555;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
        }
 
        .lf-category-btn.active {
          background: #308b98;
          color: #fff;
          border-color: #308b98;
        }
 
        .lf-category-btn .underline {
           text-decoration: underline;
           text-underline-offset: 3px;
        }
 
        /* Concern chips */
        .lf-concern-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.4rem;
        }
 
        .lf-concern-chip {
          padding: 0.3rem 0.15rem;
          border-radius: 4px;
          font-size: 0.68rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s;
          border: 1px solid #ddd;
          background: #fff;
          color: #555;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 2rem;
          line-height: 1.1;
        }
 
        .lf-concern-chip.active {
          border-color: #308b98;
          color: #308b98;
          background: #fff;
        }
 
        .lf-more-trigger {
          border: 1px solid #ddd;
          color: #308b98;
        }
 
        .chevron {
          font-size: 0.6rem;
          margin-left: 4px;
        }
 
        /* Submit */
        .lf-submit-btn {
          width: 100%;
          max-width: 260px;
          margin: 0.6rem auto 0;
          padding: 0.6rem;
          background: #308b98;
          color: #fff;
          border: none;
          border-radius: 7px;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
          box-shadow: 0 3px 10px rgba(48, 139, 152, 0.15);
          display: block;
        }
 
        .lf-submit-btn:hover {
          background: #25707a;
        }
 
        .lf-submit-btn:disabled {
          opacity: 0.6;
        }
 
        @media (max-width: 480px) {
          .lf-wrapper { padding: 1rem; }
          .lf-clinic-row { flex-direction: column; }
          .lf-concern-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </>
  );
}
