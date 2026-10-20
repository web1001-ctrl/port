  import { useState } from "react";
  import "./Contact.css";

  function Contact() {
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: ""
    });

    function handleChange(e) {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    }

    function handleSubmit(e) {
      e.preventDefault();

      alert("Xabaringiz yuborildi!");

      setForm({
        name: "",
        email: "",
        message: ""
      });
    }

    return (
      <section className="contact" id="contact">

        <div className="section-title">
          <span>04</span>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-container">

          <div className="contact-info">

            <h3>Keling, birga ishlaymiz.</h3>

            <p>
              Agar sizda loyiha yoki web sayt g'oyasi bo'lsa,
              men bilan bog'lanishingiz mumkin.
            </p>

            <div className="contact-item">
              <span>EMAIL</span>
              <strong>hamroyevogabek525@gmail.com</strong>
            </div>

            <div className="contact-item">
              <span>LOCATION</span>
              <strong>Uzbekistan</strong>
            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Ismingiz"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Emailingiz"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Xabaringiz..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Xabar yuborish →
            </button>

          </form>

        </div>

      </section>
    );
  }

  export default Contact;