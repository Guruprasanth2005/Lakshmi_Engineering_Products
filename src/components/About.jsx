import "./About.css";

const COMPANY_INFO = [
  { label: "Company Name", value: "Lakshmi Engineering Products" },
  { label: "GST Number", value: "33BCIPK8895C1ZC" },
  { label: "Business Type", value: "Manufacturer & Supplier for All over the World" },
  { label: "Location", value: "Lakshmi Engineering Products 121/3, Kamban Street Vinayagapuram, Saravanampatti PO Coimbatore - 641035, Tamil Nadu, India" },
  { label: "Contact Information", value: "+91 7942867644 &  lakshmiskv09@gmail.com" },
];

function About() {
  return (
    <section id="about" className="section section--bg about">
      <div className="container about__grid">
        <div className="about__copy">
          <span className="eyebrow">About Us</span>
          <h2 className="about__title">About Lakshmi Engineering Products</h2>

          <p className="about__desc">
            {/* Placeholder company description — replace with your actual company profile. */}
            Lakshmi Engineering Products is a reliable supplier of high-quality engineering components and industrial hardware, serving workshops, contractors, manufacturers, and businesses across diverse industries. We provide durable, precision-focused products selected to meet demanding industrial requirements and deliver consistent performance. Our commitment to quality, competitive pricing, timely delivery, and responsive customer service helps customers find dependable solutions for their engineering needs.
          </p>
          <p className="about__desc">
           With a strong focus on customer satisfaction and long-term partnerships, Lakshmi Engineering Products continues to support businesses with trusted products, professional service, and practical engineering solutions.
          </p>

          <a href="#products" className="btn btn-outline--dark about__link">
            View Our Products
          </a>
        </div>

        <div className="about__panel frame">
          <span className="frame-tr" />
          <span className="frame-bl" />
          <div className="about__panel-head">
            <span className="eyebrow">Company Record</span>
          </div>
          <dl className="about__info">
            {COMPANY_INFO.map((item) => (
              <div className="about__info-row" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
