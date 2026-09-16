import "./Contact.css";

function Contact() {
  const mapAddress =
    "Lakshmi Engineering Products, 121/3 Kamban Street, Vinayagapuram, Saravanampatti PO, Coimbatore 641035, Tamil Nadu, India";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    mapAddress
  )}&output=embed`;

  return (
    <section id="contact" className="section section--bg contact">
      <div className="container contact__grid">

        {/* Contact Details */}
        <div className="contact__panel frame">
          <span className="frame-tr" />
          <span className="frame-bl" />

          <span className="eyebrow">Get In Touch</span>

          <h2 className="contact__title">
            Lakshmi Engineering Products
          </h2>

          <dl className="contact__details">

            <div className="contact__row">
              <dt>Proprietor</dt>
              <dd>M. Kalvaraja</dd>
            </div>

            <div className="contact__row">
              <dt>GST Number</dt>
              <dd>33BCIPK8895C1ZC</dd>
            </div>

            <div className="contact__row">
              <dt>Phone</dt>
              <dd>+91 7942867644</dd>
            </div>

            <div className="contact__row">
              <dt>Email</dt>
              <dd>lakshmiskv09@gmail.com</dd>
            </div>

            <div className="contact__row contact__row--address">
              <dt>Address</dt>
              <dd>
                121/3, Kamban Street, Vinayagapuram,
                Saravanampatti PO,
                Coimbatore - 641035,
                Tamil Nadu, India
              </dd>
            </div>

          </dl>

          <div className="contact__actions">

            <a href="#contact" className="btn btn-primary">
              Contact Us
            </a>

            <a
              href="tel:+917942867644"
              className="btn btn-outline--dark"
            >
              Call Now
            </a>

            <a
              href="mailto:lakshmiskv09@gmail.com"
              className="btn btn-outline--dark"
            >
              Email Us
            </a>

          </div>
        </div>

        {/* Google Maps */}
        <div
          className="contact__map frame"
          aria-label="Lakshmi Engineering Products location"
        >
          <span className="frame-tr" />
          <span className="frame-bl" />

          <div className="contact__map-inner">
            <iframe
              title="Lakshmi Engineering Products Location"
              src={mapUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;