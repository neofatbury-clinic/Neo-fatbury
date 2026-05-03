"use client";
import { useState } from 'react';
import TreatmentGrid from './TreatmentGrid';

interface Treatment {
  title: string;
  slug: string;
  image: string;
}

interface TreatmentTabsProps {
  skin: Treatment[];
  hair: Treatment[];
  body: Treatment[];
}

export default function TreatmentTabs({ skin, hair, body }: TreatmentTabsProps) {
  const [activeTab, setActiveTab] = useState('Skin');

  const tabs = [
    { name: 'Skin', data: skin },
    { name: 'Hair', data: hair },
    { name: 'Slimming', data: body },
  ];

  return (
    <div className="treatment-tabs-container">
      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '0.5rem', 
        marginBottom: '4rem' 
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            style={{
              padding: '0.8rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '700',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: activeTab === tab.name ? '#00acb1' : '#f5f5f5',
              color: activeTab === tab.name ? 'white' : '#333',
              transition: 'all 0.3s ease',
              minWidth: '140px'
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {tabs.map((tab) => (
          <div 
            key={tab.name} 
            style={{ display: activeTab === tab.name ? 'block' : 'none' }}
          >
            <TreatmentGrid 
              treatments={tab.data} 
              defaultCategory={tab.name.toLowerCase()} 
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          button {
            padding: 0.6rem 1.5rem !important;
            min-width: 100px !important;
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </div>
  );
}
