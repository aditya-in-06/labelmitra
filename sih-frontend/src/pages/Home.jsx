import { Link } from "react-router-dom";

const steps = [
  ["01", "Upload images", "Front, back or side views"],
  ["02", "Review evidence", "Confirm the package details"],
  ["03", "AI analysis", "Extract and check declarations"],
  ["04", "Inspection result", "Review findings and evidence"],
];

export default function Home() {
  return (
    <div className="page home-page">
      <section className="workspace-hero legal-dashboard-hero">
        <div className="hero-copy">
          <div className="workspace-kicker"><span /> LABELMITRA • LEGAL METROLOGY COMPLIANCE</div>
          <h1>Scan. Verify.<br /><em>Ensure compliance.</em></h1>
          <p>Check packaged commodity labels against the Legal Metrology (Packaged Commodities) Rules, 2011 using AI-assisted evidence analysis.</p>
          <div className="hero-points">
            <span>✓ Faster inspections</span><span>✓ Evidence-first analysis</span><span>✓ Human review ready</span>
          </div>
        </div>
        <div className="workspace-badge inspection-badge">
          <span>LABELMITRA</span>
          <strong>Legal Metrology<br />Inspection</strong>
          <small>Evidence-led • AI-assisted</small>
        </div>
      </section>

      <section className="inspection-flow-home">
        {steps.map(([n, title, sub], index) => (
          <div className="home-flow-step" key={n}>
            <div className={`home-flow-number ${index === 0 ? "active" : ""}`}>{n}</div>
            <div><strong>{title}</strong><span>{sub}</span></div>
            {index < steps.length - 1 && <b className="home-flow-arrow">›</b>}
          </div>
        ))}
      </section>

      <section className="inspection-start-card">
        <div className="start-card-copy">
          <div className="choice-top"><span className="choice-icon">⌁</span><span className="choice-audience">FOR LEGAL METROLOGY INSPECTORS</span></div>
          <h2>Start a new inspection</h2>
          <p>Capture package evidence, identify mandatory declarations, and review potential compliance issues with the supporting evidence visible.</p>
          <div className="choice-tags"><span>OCR</span><span>Rule checks</span><span>Evidence mapping</span><span>Inspection report</span></div>
          <Link className="choice-button legal-button" to="/scan">Start Legal Inspection <b>→</b></Link>
        </div>
        <div className="start-card-checklist">
          <div><span>✓</span><strong>Package evidence</strong><small>Multiple product views</small></div>
          <div><span>✓</span><strong>Declaration extraction</strong><small>Key label information</small></div>
          <div><span>✓</span><strong>Compliance review</strong><small>Potential issues flagged</small></div>
          <div><span>✓</span><strong>Audit-ready output</strong><small>Findings with evidence</small></div>
        </div>
      </section>

      <section className="stat-grid-green">
        {[
          ["Legal Inspections", "No inspections recorded yet"],
          ["Products Inspected", "No products scanned yet"],
          ["Needs Review", "No review cases yet"],
          ["Potential Issues", "No potential issues yet"]
        ].map(([title, sub]) => (
          <div className="green-stat" key={title}><span>{title}</span><strong>0</strong><small>{sub}</small></div>
        ))}
      </section>

      <section className="about-section-green" id="why-labelmitra">
        <div className="about-heading-green">
          <span className="inspection-kicker">WHY LABELMITRA?</span>
          <h2>Built around the label, not just the scan.</h2>
          <p>Keep evidence visible, analysis understandable, and uncertain information ready for human verification.</p>
        </div>
        <div className="about-grid-green">
          {[
            ["01", "Capture evidence", "Use package photographs or live camera capture as the source for analysis."],
            ["02", "Extract declarations", "Identify visible mandatory label information from the submitted evidence."],
            ["03", "Trace the result", "Keep findings connected to the package evidence that produced them."],
            ["04", "Review with confidence", "Separate clear signals from information that still needs human verification."],
          ].map(([n, t, d]) => <article className="about-card-green" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <div className="home-footer-note"><strong>LabelMitra</strong><span>AI-assisted compliance inspection for packaged commodities.</span></div>
    </div>
  );
}
