export default function Map() {
  return (
    <div className="map-responsive">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.8459391569468!2d18.06721171607187!3d59.318829481655186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e4c0bd2c53%3A0xc09f32b5c4e05183!2sSankt%20Paulsgatan%204A%2C%20118%2046%20Stockholm!5e0!3m2!1sen!2sse!4v1634313565222!5m2!1sen!2sse"
        width="900"
        height="450"
        frameBorder="0"
        style={{ border: "0", display: "flex", margin: "10px auto" }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
}
