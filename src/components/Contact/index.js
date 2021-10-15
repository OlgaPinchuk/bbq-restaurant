// Project files
import BookingForm from "./BookingForm";
import Map from "../shared/Map";

export default function ContactPage() {
  return (
    <section className="page contact">
      <section className="hero">
        <h1>Contact us</h1>
      </section>
      <section className="content-section">
        <div className="opening-hours">
          <h2>Opening hours</h2>
          <p>
            <b>Monday-Friday</b>
            16.00-24.00
          </p>
          <p>
            <b>Saturday</b>
            13.00-24.00
          </p>
          <p>
            <b>Sunday</b>
            12.00-22.00
          </p>
        </div>
        <div className="address">
          <h2>Address</h2>
          <address>
            <h3>BBQ Ribs House</h3>
            <p>Sankt Paulsgatan 4A</p>
            <p>118 46</p>
            <p>Stockholm, Sweden</p>
          </address>
        </div>
        <BookingForm />
      </section>
      <Map />
    </section>
  );
}
