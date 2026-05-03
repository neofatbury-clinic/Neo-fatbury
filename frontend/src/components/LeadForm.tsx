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

import { useEffect } from "react";
import { client } from "@/sanity/lib/client";

export default function LeadForm({ 
  title: initialTitle, 
  subtitle: initialSubtitle,
  buttonText: initialButtonText 
}: { 
  title?: string;
  subtitle?: string;
  buttonText?: string;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  
  // NEW: Dynamic settings from Sanity
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    client.fetch(`*[_type == "contactFormSettings"][0]`)
      .then(setSettings)
      .catch(console.error);
  }, []);

  const [selectedClinic, setSelectedClinic] = useState<string>("kukatpally");
  const [selectedCategory, setSelectedCategory] = useState<string>("Skin");
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [showMore, setShowMore] = useState(false);

  // Use dynamic settings or fallbacks
  const title = initialTitle || settings?.formTitle || "Book Your Free Consultation";
  const subtitle = initialSubtitle || settings?.formSubtitle || "Get expert care tailored to your needs.";
  const buttonText = initialButtonText || settings?.buttonText || "Get Free Consultation";
  const clinics = settings?.clinics || [
    { id: "kukatpally", label: "Kukatpally Clinic", color: "#00acb1" },
    { id: "himayatnagar", label: "Himayatnagar Clinic", color: "#df8385" },
  ];
  const namePlaceholder = settings?.placeholders?.name || "Your Name";
  const phonePlaceholder = settings?.placeholders?.phone || "Mobile Number";

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
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone: mobile,
          service: selectedCategory,
          location: clinics.find((c: any) => c.id === selectedClinic)?.label || 'Clinic',
          concerns: selectedConcerns,
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });
      const data = await res.json().catch(() => ({}));
      
      // Tracking: Push to GTM dataLayer
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "generate_lead",
          clinic: selectedClinic,
          category: selectedCategory,
          concerns: selectedConcerns.join(', '),
          page: window.location.pathname
        });
      }

      if (!res.ok) console.warn('CRM lead warning:', data);
    } catch (err) {
      console.warn('CRM submission warning:', err);
    } finally {
      router.push('/thank-you');
    }
  };

  return (
    <>
      <div className="lf-wrapper animate-fade-in">
        {/* Header */}
        <h2 className="lf-title">{title}</h2>
        <p className="lf-subtitle">{subtitle}</p>

        <form onSubmit={handleSubmit} className="lf-form">
          {/* Name */}
          <input
            type="text"
            placeholder={namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="lf-input"
          />

          {/* Mobile */}
          <input
            type="tel"
            placeholder={phonePlaceholder}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            pattern="[1-9]{1}[0-9]{9}"
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
              {clinics.map((clinic: any) => (
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
            {/* Compact Hint removed to save space */}
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
          background: rgba(255, 255, 255, 0.95); /* Semi-transparent White */
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 1.25rem 1rem 1rem;
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 380px; /* Slimmer form */
          margin-left: auto;
          margin-right: 0; 
          font-family: 'Montserrat', sans-serif;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
 
        .lf-title {
          text-align: center;
          font-size: 1.25rem;
          font-weight: 900;
          color: #008084;
          margin: 0 0 0.25rem;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
 
        .lf-subtitle {
          text-align: center;
          font-size: 0.8rem;
          color: #666; 
          margin: 0 0 0.75rem;
          font-weight: 500;
          line-height: 1.3;
        }
 
        .lf-form {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
 
        .lf-input {
          width: 100%;
          padding: 0.65rem 0.85rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          font-size: 0.8rem;
          color: #1a2b3c;
          background: #f8fafc;
          outline: none;
          transition: all 0.2s;
          box-sizing: border-box;
        }
 
        .lf-input:focus {
          border-color: #00acb1;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(0, 172, 177, 0.1);
        }
 
        .lf-input::placeholder {
          color: #94a3b8;
        }
 
        /* Section */
        .lf-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
 
        .lf-divider-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin: 0.3rem 0 0.1rem;
        }
 
        .lf-divider-line {
          flex: 1;
          height: 1px;
          background: rgba(0, 0, 0, 0.08);
        }
 
        .lf-section-title {
          font-size: 0.7rem;
          font-weight: 800;
          color: #64748b;
          text-align: center;
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
 
        .lf-concern-hint {
          font-weight: 400;
          color: #94a3b8;
          font-size: 0.65rem;
          font-style: italic;
          text-transform: none;
        }
 
        /* Clinic buttons */
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
          padding: 0.6rem 0.4rem;
          border: none;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s;
          color: white;
        }
 
        .lf-clinic-btn.active {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
        }
 
        .lf-pin-icon {
          width: 13px;
          height: 13px;
        }
 
        .lf-clinic-hint {
          text-align: center;
          font-size: 0.7rem;
          color: #94a3b8;
          margin-top: -0.1rem;
          margin-bottom: 0.2rem;
          font-style: italic;
        }
 
        /* Category Row */
        .lf-category-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
 
        .lf-category-btn {
          flex: 1 1 auto;
          min-width: 80px;
          padding: 0.55rem 0.4rem;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: #f8fafc;
          color: #64748b;
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
          white-space: nowrap;
        }
 
        .lf-category-btn:hover {
          background: #f1f5f9;
          border-color: rgba(0, 0, 0, 0.15);
        }
 
        .lf-category-btn.active {
          background: #00acb1;
          color: #fff;
          border-color: #00acb1;
          box-shadow: 0 4px 12px rgba(0, 172, 177, 0.2);
        }
 
        /* Concern chips */
        .lf-concern-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.4rem;
        }
 
        .lf-concern-chip {
          padding: 0.45rem 0.25rem;
          border-radius: 8px;
          font-size: 0.68rem;
          padding: 0.35rem 0.2rem;
          border-radius: 8px;
          font-size: 0.65rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.15s;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: #f8fafc;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 2rem;
          line-height: 1.1;
          word-break: normal;
          overflow: hidden;
        }
 
        .lf-concern-chip:hover {
          background: #f1f5f9;
          border-color: rgba(0, 0, 0, 0.1);
          color: #1a2b3c;
        }
 
        .lf-concern-chip.active {
          border-color: #00acb1;
          color: #00acb1;
          background: rgba(0, 172, 177, 0.05);
          box-shadow: inset 0 0 0 1px rgba(0, 172, 177, 0.1);
        }
 
        .lf-more-trigger {
          color: #00acb1;
          border-color: rgba(0, 172, 177, 0.2);
        }
 
        .chevron {
          font-size: 0.6rem;
          margin-left: 4px;
        }
 
        /* Submit */
        .lf-submit-btn {
          width: 100%;
          margin-top: 1rem;
          padding: 1rem;
          background: linear-gradient(135deg, #00acb1 0%, #00898d 100%);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: block;
          box-shadow: 0 10px 30px rgba(0, 172, 177, 0.3);
        }
 
        .lf-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(0, 172, 177, 0.4);
          filter: brightness(1.1);
        }
 
        .lf-submit-btn:active {
          transform: translateY(0);
        }
 
        .lf-submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
 
        @media (max-width: 480px) {
          .lf-wrapper { padding: 2rem 1.25rem; }
          .lf-title { font-size: 1.4rem; }
          .lf-clinic-row { flex-direction: column; }
          .lf-concern-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

    </>
  );
}
