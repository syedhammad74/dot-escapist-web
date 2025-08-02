"use client";

import React from 'react';

export default function GSheetComparePage() {
  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 60px;
          margin: 20px auto;
          padding: 15px 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: bold;
          font-size: 18px;
          color: #5a7c65;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: #5a7c65;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          color: #666;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #5a7c65;
        }

        .demo-btn {
          background: #5a7c65;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }

        .demo-btn:hover {
          background: #4a6b55;
          transform: translateY(-2px);
        }

        /* Hero Section */
        .hero {
          padding: 80px 0;
          text-align: center;
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: 700;
          color: #2d4a35;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero .highlight {
          color: #a8c4a8;
        }

        .hero p {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 40px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Comparison Section */
        .comparison {
          background: white;
          border-radius: 20px;
          padding: 60px 40px;
          margin: 40px 0;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .comparison h2 {
          text-align: center;
          font-size: 2.5rem;
          color: #2d4a35;
          margin-bottom: 20px;
        }

        .comparison-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 50px;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .comparison-item {
          background: #f8fdf8;
          border-radius: 16px;
          padding: 30px;
          border-left: 4px solid #5a7c65;
        }

        .comparison-item h3 {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 1.4rem;
          color: #2d4a35;
          margin-bottom: 20px;
        }

        .icon {
          width: 24px;
          height: 24px;
          opacity: 0.7;
        }

        .comparison-item ul {
          list-style: none;
        }

        .comparison-item li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 12px;
          color: #555;
        }

        .comparison-item li::before {
          content: "●";
          color: #5a7c65;
          flex-shrink: 0;
          margin-top: 4px;
        }

        /* ICS vs Google Sheets */
        .vs-section {
          background: linear-gradient(135deg, #2d4a35 0%, #1e3325 100%);
          color: white;
          padding: 60px 40px;
          border-radius: 20px;
          margin: 40px 0;
        }

        .vs-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 50px;
        }

        .vs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .vs-column h3 {
          font-size: 1.8rem;
          margin-bottom: 30px;
          text-align: center;
          padding: 15px;
          border-radius: 12px;
        }

        .sheets-column h3 {
          background: rgba(255, 59, 48, 0.2);
          border: 2px solid #ff3b30;
        }

        .ics-column h3 {
          background: rgba(52, 199, 89, 0.2);
          border: 2px solid #34c759;
        }

        .vs-feature {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 25px;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
        }

        .vs-feature h4 {
          font-size: 1.2rem;
          margin-bottom: 15px;
          color: #a8c4a8;
        }

        .vs-feature ul {
          list-style: none;
        }

        .vs-feature li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 8px;
          font-size: 0.95rem;
        }

        .sheets-column .vs-feature li::before {
          content: "✗";
          color: #ff3b30;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ics-column .vs-feature li::before {
          content: "✓";
          color: #34c759;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Test Challenge */
        .challenge {
          background: #fff3cd;
          border: 2px solid #ffc107;
          border-radius: 16px;
          padding: 40px;
          margin: 40px 0;
          text-align: center;
        }

        .challenge h3 {
          color: #856404;
          font-size: 1.8rem;
          margin-bottom: 20px;
        }

        .challenge ol {
          text-align: left;
          max-width: 800px;
          margin: 0 auto 30px;
          color: #856404;
        }

        .challenge li {
          margin-bottom: 10px;
          font-weight: 500;
        }

        .challenge-result {
          background: #d1ecf1;
          border: 2px solid #bee5eb;
          border-radius: 12px;
          padding: 20px;
          color: #0c5460;
          font-weight: 600;
          font-size: 1.1rem;
        }

        /* Bottom Line */
        .bottom-line {
          background: linear-gradient(135deg, #5a7c65 0%, #4a6b55 100%);
          color: white;
          padding: 50px 40px;
          border-radius: 20px;
          text-align: center;
          margin: 40px 0;
        }

        .bottom-line h3 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .bottom-line p {
          font-size: 1.2rem;
          margin-bottom: 15px;
          opacity: 0.9;
        }

        .bottom-line .final-quote {
          font-size: 1.1rem;
          font-style: italic;
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 12px;
          margin-top: 30px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .comparison-grid,
          .vs-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .comparison,
          .vs-section {
            padding: 40px 20px;
          }
        }
      `}</style>

      <div className="container">
        {/* Header */}
        <header className="header">
          <nav className="nav">
            <div className="logo">
              <div className="logo-icon">ICS</div>
              Integrated Construction Solution
            </div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#problems">Problems</a></li>
              <li><a href="#solution">Solution</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#demo" className="demo-btn">Watch Live Demo</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <h1>Google Sheets vs. ICS:<br /><span className="highlight">Why Spreadsheets Hit the Wall</span></h1>
          <p>Understanding why advanced spreadsheet tools still can't replace purpose-built construction management systems</p>
        </section>

        {/* The Spreadsheet Ceiling */}
        <section className="comparison">
          <h2>The Spreadsheet Ceiling</h2>
          <p className="comparison-subtitle">Unavoidable limitations that break construction workflows</p>
          
          <div className="comparison-grid">
            <div className="comparison-item">
              <h3>
                <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
                Multi-User Chaos
              </h3>
              <ul>
                <li>Google Sheets breaks down with 10+ concurrent users</li>
                <li>No true role-based permissions (everyone sees everything or nothing)</li>
                <li>Version conflicts when multiple people edit simultaneously</li>
                <li>No audit trails for quality control decisions</li>
              </ul>
            </div>

            <div className="comparison-item">
              <h3>
                <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
                Data Structure Breakdown
              </h3>
              <ul>
                <li>Spreadsheets are flat - construction projects are hierarchical</li>
                <li>Can't handle complex relationships (Project → Elements → Inspections)</li>
                <li>Performance degrades rapidly with large datasets (1000+ elements)</li>
                <li>No data validation between related sheets</li>
              </ul>
            </div>

            <div className="comparison-item">
              <h3>
                <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"/>
                </svg>
                Workflow Limitations
              </h3>
              <ul>
                <li>No approval workflows or digital signatures</li>
                <li>Can't trigger automated actions based on field changes</li>
                <li>No notification system for stakeholders</li>
                <li>Can't handle file attachments per element</li>
              </ul>
            </div>

            <div className="comparison-item">
              <h3>
                <svg className="icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"/>
                </svg>
                Professional Reporting Crisis
              </h3>
              <ul>
                <li>Can't generate professional, branded reports automatically</li>
                <li>No multi-language support (English/Arabic)</li>
                <li>Limited export options for client presentations</li>
                <li>No automated report distribution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ICS vs Google Sheets Comparison */}
        <section className="vs-section">
          <h2 className="vs-title">Head-to-Head Comparison</h2>
          
          <div className="vs-grid">
            {/* Google Sheets Column */}
            <div className="vs-column sheets-column">
              <h3>Google Sheets (Enhanced)</h3>
              
              <div className="vs-feature">
                <h4>Data Architecture</h4>
                <ul>
                  <li>Flat rows and columns structure</li>
                  <li>Limited to spreadsheet paradigm</li>
                  <li>Performance issues with large datasets</li>
                  <li>No true relational capabilities</li>
                </ul>
              </div>

              <div className="vs-feature">
                <h4>User Management</h4>
                <ul>
                  <li>Basic sharing permissions only</li>
                  <li>No role-based access control</li>
                  <li>Everyone sees same interface</li>
                  <li>No department-level controls</li>
                </ul>
              </div>

              <div className="vs-feature">
                <h4>Mobile Experience</h4>
                <ul>
                  <li>Mobile app is clunky and limited</li>
                  <li>Poor offline capability</li>
                  <li>Not designed for field workers</li>
                  <li>Limited photo integration</li>
                </ul>
              </div>

              <div className="vs-feature">
                <h4>Client Experience</h4>
                <ul>
                  <li>Clients see Google interface</li>
                  <li>No branded portals</li>
                  <li>Basic sharing only</li>
                  <li>No professional presentation</li>
                </ul>
              </div>
            </div>

            {/* ICS Column */}
            <div className="vs-column ics-column">
              <h3>ICS Platform</h3>
              
              <div className="vs-feature">
                <h4>Construction Data Architecture</h4>
                <ul>
                  <li>True relational database design</li>
                  <li>Built for construction workflows</li>
                  <li>Handles unlimited complex relationships</li>
                  <li>Optimized for large-scale projects</li>
                </ul>
              </div>

              <div className="vs-feature">
                <h4>Enterprise User Management</h4>
                <ul>
                  <li>20+ different role types</li>
                  <li>Project-specific permissions</li>
                  <li>Department-level controls</li>
                  <li>Branded client portals</li>
                </ul>
              </div>

              <div className="vs-feature">
                <h4>Mobile Field Operations</h4>
                <ul>
                  <li>Built for field workers from day one</li>
                  <li>Works offline on construction sites</li>
                  <li>Digital signatures for legal compliance</li>
                  <li>Integrated photo and document management</li>
                </ul>
              </div>

              <div className="vs-feature">
                <h4>Professional Client Experience</h4>
                <ul>
                  <li>Completely branded with your company</li>
                  <li>Automated professional reports</li>
                  <li>Multi-language support (English/Arabic)</li>
                  <li>White-label solution</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Test Challenge */}
        <section className="challenge">
          <h3>🎯 The Real-World Test Challenge</h3>
          <p><strong>Ask your team to try this with Google Sheets:</strong></p>
          <ol>
            <li>Create a system for 500+ precast concrete elements</li>
            <li>Give 15 different users role-based access (designers see design data, site workers see installation data, clients see progress only)</li>
            <li>Generate automated Arabic/English reports with company branding</li>
            <li>Set up approval workflows where QC manager must digitally approve before production starts</li>
            <li>Track financial milestones tied to specific element completion</li>
            <li>Integrate with accounting system for automated invoicing</li>
          </ol>
          <div className="challenge-result">
            <strong>Result:</strong> Google Sheets will hit multiple walls within days.
          </div>
        </section>

        {/* Bottom Line */}
        <section className="bottom-line">
          <h3>The Strategic Difference</h3>
          <p><strong>Google Sheets = Enhanced Digital Spreadsheet</strong><br />
          Still thinking in rows and columns, built for general use, limited by spreadsheet paradigm</p>
          
          <p><strong>ICS = Purpose-Built Construction Management System</strong><br />
          Designed for construction workflows, enterprise scalability, professional client delivery</p>

          <div className="final-quote">
            "Google Sheets with AI is like putting a rocket engine on a bicycle - impressive technology, but the wrong foundation for serious construction management."
          </div>
        </section>
      </div>
    </>
  );
} 