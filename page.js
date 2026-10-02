import SiteHeader from "../components/SiteHeader";
import QuoteForm from "../components/QuoteForm";
import ProjectGrid from "../components/ProjectGrid";

const services = [
  ["01", "Mechanical", "Installation, maintenance, repairs, troubleshooting, upgrades, and equipment support.", ["Mechanical systems", "Equipment installation", "Repairs & troubleshooting", "Preventative maintenance"]],
  ["02", "Construction", "Construction and improvement work coordinated around your property's requirements.", ["General construction", "Commercial improvements", "Equipment-related construction", "Project coordination"]],
  ["03", "Renovation", "Residential, restaurant, and commercial renovation projects from planning through completion.", ["Home renovations", "Restaurant renovations", "Interior improvements", "Mechanical upgrades"]],
  ["04", "Equipment Maintenance", "Maintenance and service coordination built around equipment, usage, and facility needs.", ["Equipment inspections", "Preventative maintenance", "Troubleshooting", "Installation & replacement coordination"]],
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section id="home" className="hero">
          <div className="hero-images" aria-hidden="true">
            <div className="hero-image residential-bg" />
            <div className="hero-image kitchen-bg" />
            <div className="hero-image industrial-bg" />
          </div>
          <div className="hero-overlay" />

          <div className="container hero-content">
            <div className="hero-logo" aria-label="Parmar Built logo">
              <span className="hero-p">P</span><span className="hero-b">B</span>
              <span className="hero-roof" /><span className="hero-bars" />
            </div>
            <p className="eyebrow">PARMAR BUILT</p>
            <h1>Mechanical. Construction.<br /><span>Renovation & Maintenance.</span></h1>
            <div className="hero-tagline">
              <strong>BUILT TO SPEC.</strong><i>/</i>
              <strong>INSTALLED ON TIME.</strong><i>/</i>
              <strong>MAINTAINED FOR RELIABILITY.</strong>
            </div>
            <p className="hero-copy">
              Owner-led service for homeowners, restaurants, commercial properties, and industrial facilities.
              One point of contact from the first conversation through completion.
            </p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#contact">Get a Quote <span>→</span></a>
              <a className="btn btn-outline" href="#services">Explore Services <span>→</span></a>
            </div>
          </div>

          <div className="container hero-sectors">
            <a className="sector-card" href="#residential"><span>⌂</span><b>Homeowners</b><small>Repairs · Renovations · Upgrades</small></a>
            <a className="sector-card" href="#restaurants"><span>♨</span><b>Restaurants</b><small>Kitchen Equipment · Maintenance</small></a>
            <a className="sector-card" href="#industrial"><span>⚙</span><b>Commercial & Industrial</b><small>Mechanical · Facility Support</small></a>
            <a className="sector-card" href="#restaurants"><span>▣</span><b>Kitchen Equipment</b><small>Installation · Repairs · PM</small></a>
          </div>
        </section>

        <section className="section light">
          <div className="container split">
            <div>
              <p className="kicker">OWNER-LED SERVICE</p>
              <h2>One Point of Contact.<br /><span>Multiple Capabilities.</span></h2>
            </div>
            <div className="body-copy">
              <p>Every project has different requirements. Sometimes you need mechanical work. Sometimes you need construction, renovation, equipment service, or several trades working together.</p>
              <p><strong>Parmar Built brings those requirements together under one point of contact.</strong></p>
              <p>As the owner, I stay directly involved in the project and coordinate qualified trades and specialists when specialized work is required.</p>
            </div>
          </div>
        </section>

        <section id="services" className="section dark">
          <div className="container">
            <div className="section-heading">
              <p className="kicker">WHAT WE DO</p>
              <h2>One Company. <span>Multiple Capabilities.</span></h2>
              <p>Practical solutions for homes, businesses, restaurants, and industrial facilities.</p>
            </div>
            <div className="service-grid">
              {services.map(([number, title, desc, items]) => (
                <article className="service-card" key={title}>
                  <div className="service-number">{number}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="residential" className="market-section">
          <div className="market-photo residential-photo" />
          <div className="market-shade" />
          <div className="market-content container">
            <p className="kicker">RESIDENTIAL</p>
            <h2>Built for <span>Your Home.</span></h2>
            <p className="lead">From repairs and upgrades to renovations and mechanical projects, Parmar Built helps homeowners manage projects from planning through completion.</p>
            <div className="bullet-grid">
              <span>Home renovations</span><span>Repairs & upgrades</span><span>Mechanical work</span><span>Equipment installation</span><span>Property improvements</span><span>Maintenance</span>
            </div>
            <a className="text-link" href="#contact">Start your home project →</a>
          </div>
        </section>

        <section id="restaurants" className="market-section reverse">
          <div className="market-photo kitchen-photo" />
          <div className="market-shade reverse-shade" />
          <div className="market-content container">
            <p className="kicker">RESTAURANTS & FOOD SERVICE</p>
            <h2>Keep Your <span>Kitchen Running.</span></h2>
            <p className="lead">Commercial kitchens depend on reliable equipment every day. We provide maintenance, troubleshooting, installation, and project coordination for restaurant and food-service operations.</p>
            <div className="bullet-grid">
              <span>Cooking equipment</span><span>Refrigeration</span><span>Dishwashers</span><span>Ventilation & exhaust</span><span>Equipment installation</span><span>Preventative maintenance</span>
            </div>
            <a className="text-link" href="#contact">Request kitchen service →</a>
          </div>
        </section>

        <section id="industrial" className="market-section">
          <div className="market-photo industrial-photo" />
          <div className="market-shade" />
          <div className="market-content container">
            <p className="kicker">COMMERCIAL & INDUSTRIAL</p>
            <h2>Built for Business.<br /><span>Maintained for Reliability.</span></h2>
            <p className="lead">Owner-led coordination for industrial maintenance, equipment installation, mechanical work, repairs, upgrades, and facility improvements.</p>
            <div className="bullet-grid">
              <span>Equipment maintenance</span><span>Mechanical repairs</span><span>Equipment installation</span><span>Preventative maintenance</span><span>Facility improvements</span><span>Mechanical modifications</span>
            </div>
            <a className="text-link" href="#contact">Request industrial service →</a>
          </div>
        </section>

        <section className="section process light">
          <div className="container">
            <div className="section-heading centered">
              <p className="kicker">HOW IT WORKS</p>
              <h2>Simple. Direct. <span>Organized.</span></h2>
            </div>
            <div className="steps">
              {[
                ["01", "Tell Us What You Need", "Call, email, or submit a request with project details."],
                ["02", "We Review the Project", "We assess scope, site conditions, equipment, and requirements."],
                ["03", "We Build the Plan", "We determine the work, resources, trades, materials, and schedule."],
                ["04", "We Coordinate the Work", "Qualified trades and specialists are brought in when needed."],
                ["05", "We Complete the Work", "The agreed scope is carried out with clear communication."],
                ["06", "We Stay Connected", "Discuss ongoing service and preventative maintenance where useful."],
              ].map(([num, title, copy]) => (
                <div key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section owner">
          <div className="container owner-box">
            <div>
              <p className="kicker">THE PARMAR BUILT DIFFERENCE</p>
              <h2>Owner-Led.<br /><span>Not Just Another Contractor.</span></h2>
            </div>
            <div className="body-copy">
              <p>When you contact Parmar Built, you deal directly with the owner. I personally evaluate projects, communicate with customers, coordinate the work, and stay involved from start to finish.</p>
              <p>Depending on the project, I may perform the work directly or bring in qualified trades and specialized subcontractors.</p>
              <div className="promise-list"><span>✓ One point of contact</span><span>✓ Clear communication</span><span>✓ Right people for the job</span><span>✓ Accountability from start to finish</span></div>
            </div>
          </div>
        </section>

        <section className="maintenance-banner">
          <div className="container">
            <p className="kicker">THE FULL CYCLE</p>
            <h2>Built to Spec. <span>Installed on Time.</span><br />Maintained for Reliability.</h2>
            <p>A project doesn't end when installation is complete. Discuss a maintenance approach based on your equipment, facility, usage, and operating requirements.</p>
            <a className="btn btn-gold" href="#contact">Discuss Maintenance <span>→</span></a>
          </div>
        </section>

        <section id="projects" className="section light">
          <div className="container">
            <div className="section-heading">
              <p className="kicker">PROJECTS & CAPABILITIES</p>
              <h2>Organized by <span>Sector.</span></h2>
              <p>As you complete jobs, this section can be expanded with real project photography and case studies.</p>
            </div>
            <ProjectGrid />
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container split">
            <div>
              <p className="kicker">ABOUT PARMAR BUILT</p>
              <h2>Built With Purpose.<br /><span>Maintained With Care.</span></h2>
            </div>
            <div className="body-copy">
              <p>Parmar Built was created around a simple idea: customers shouldn't have to manage multiple contractors just to get one project completed.</p>
              <p>As the owner, I work directly with customers to understand their needs, assess the work, coordinate the project, and make sure the right people are involved.</p>
              <p>Depending on the project, I may perform the work directly or coordinate qualified trades and specialized subcontractors. That keeps Parmar Built flexible while giving customers one point of contact and one coordinated experience.</p>
              <p><strong>Quality work. Clear communication. Reliable service. Long-term relationships.</strong></p>
            </div>
          </div>
        </section>

        <section className="section faq dark">
          <div className="container narrow">
            <div className="section-heading centered">
              <p className="kicker">FAQ</p>
              <h2>Common <span>Questions.</span></h2>
            </div>
            {[
              ["Do you work with homeowners?", "Yes. Parmar Built provides residential renovation, improvement, mechanical, installation, and maintenance services based on project requirements."],
              ["Do you work with restaurants?", "Yes. We support commercial kitchens with equipment maintenance, installation, troubleshooting, and related project coordination."],
              ["Do you work with industrial facilities?", "Yes. We support industrial and commercial customers with equipment maintenance, mechanical services, installations, upgrades, and facility-related work."],
              ["Do you perform the work yourself?", "Depending on the project, work may be performed directly by Parmar Built or coordinated with qualified trades and specialized subcontractors."],
              ["Can you manage multiple trades?", "Yes. Where appropriate, Parmar Built can coordinate different trades and specialists as part of the project."],
              ["Do you offer preventative maintenance?", "Maintenance requirements can be discussed and structured around equipment, facility, operating conditions, and customer needs."],
            ].map(([question, answer]) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div>
              <p className="kicker">GET STARTED</p>
              <h2>Let's Talk About<br /><span>Your Project.</span></h2>
              <p className="body-copy">Whether something needs to be built, renovated, installed, repaired, or maintained, tell us what you need.</p>
              <div className="contact-details">
                <a href="tel:+10000000000">📞 <span>YOUR PHONE</span></a>
                <a href="mailto:YOUR_EMAIL@example.com">✉ <span>YOUR EMAIL</span></a>
                <span>⌖ <span>YOUR SERVICE AREA</span></span>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a className="brand" href="#home"><span className="brand-mark" aria-hidden="true"><span className="mark-p">P</span><span className="mark-b">B</span><span className="mark-roof" /><span className="mark-bars" /></span><span className="brand-name">PARMAR <b>BUILT</b></span></a>
            <p>Mechanical · Construction · Renovation · Equipment Maintenance</p>
            <p className="footer-tag">BUILT TO SPEC. · INSTALLED ON TIME. · MAINTAINED FOR RELIABILITY.</p>
          </div>
          <div><h4>Services</h4><a href="#services">Mechanical</a><a href="#services">Construction</a><a href="#services">Renovation</a><a href="#restaurants">Equipment Maintenance</a></div>
          <div><h4>Industries</h4><a href="#residential">Residential</a><a href="#restaurants">Restaurants</a><a href="#industrial">Commercial</a><a href="#industrial">Industrial</a></div>
          <div><h4>Company</h4><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a><a href="#contact">Request a Quote</a></div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Parmar Built. All rights reserved.</span>
          <span>Owner-led service · Qualified trades coordinated as required</span>
        </div>
      </footer>
    </>
  );
}
