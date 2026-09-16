import "./WhyChooseUs.css";

const FEATURES = [
  {
    title: "Quality Products",
    desc: "Every component is checked against tolerance and material standards before dispatch.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path
          d="M20 5L33 11V21C33 29 27 34 20 36C13 34 7 29 7 21V11L20 5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M14 20L18.5 24.5L27 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Reliable Service",
    desc: "Consistent lead times and responsive support, from first enquiry to repeat orders.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" />
        <path d="M20 12V20L26 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Competitive Pricing",
    desc: "Direct sourcing and efficient production keep pricing fair for bulk and single orders alike.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M8 22L17 13L23 19L32 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25 10H32V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 28H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction",
    desc: "Long-standing relationships built on accurate specs, honest timelines and after-sales support.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path
          d="M20 33C20 33 6 25 6 15.5C6 10.5 10 7 14.5 7C17.2 7 19.2 8.4 20 10.2C20.8 8.4 22.8 7 25.5 7C30 7 34 10.5 34 15.5C34 25 20 33 20 33Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function WhyChooseUs() {
  return (
    <section className="section section--navy blueprint-grid why">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Our Standards</span>
          <h2 style={{ color: "var(--white)" }}>Why Choose Lakshmi Engineering Products?</h2>
        </div>

        <div className="why__grid">
          {FEATURES.map((feature, i) => (
            <div className="why__card" key={feature.title} style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="why__icon">{feature.icon}</span>
              <h3 className="why__title">{feature.title}</h3>
              <p className="why__desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
