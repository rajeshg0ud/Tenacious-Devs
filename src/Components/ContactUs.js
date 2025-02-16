import React, { useState } from "react";
import contactImg from "../Assets/ContactUs.png";
import emailjs from "emailjs-com";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    mobile: "",
  });

  const [notification, setNotification] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_odugvz7",
        "template_6tf7hyd",
        formData,
        "yt9sKZVeK29hPVFZP"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setNotification("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setNotification(
            "Failed to send your message. Please try contacting us at the email address above."
          );
        }
      );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      mobile: "",
    });
  };

  return (
    <div
      id="Contact"
      className=" flex flex-col md:justify-between md:flex-row bg-gray-50 mx-auto px-4 md:px-24 items-center p-8 py-20 "
    >
      <div className="flex flex-col items-center md:items-start md:text-left md:self-baseline max-w-6xl mb-7 md:mb-0">
        <h2 className="text-xl md:text-3xl font-bold mb-12 -ml-5 md:ml-0 text-left pb-5 self-start">
          Contact Us
        </h2>
        <img
          src={contactImg}
          alt="Contact"
          className="w-72 md:w-[360px] h-auto"
        />
      </div>
      <div className="flex flex-col justify-center space-y-6 bg-gray-50 rounded-lg p-5 md:p-9 shadow-md">
        <div>
          <p className="text-base font-semibold text-gray-600 text-left md:mb-2 mt-4 md:mt-0 max-w-lg">
            Contact us to start your project or get your questions answered.
            We're here to help elevate your ideas!{" "}
          </p>
          <p className="text-base mb-1 mt-10 md:mt-0">
            <span className="font-bold">Office:</span> Madhapur, Hyderabad,
            Telangana
          </p>
          <p className="text-base mb-1">
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:tenaciousdevs@gmail.com"
              className="text-sky-600 hover:underline"
            >
              tenaciousdevs@gmail.com
            </a>
          </p>
        </div>
        <form className="grid space-y-4" onSubmit={handleSubmit}>
          <input
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            placeholder="Your Name"
            value={formData.name}
            required
          />
          <input
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="text"
            placeholder="Your Email"
            value={formData.email}
            required
          />
          <input
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
            type="text"
            placeholder="Your Mobile Number"
            value={formData.mobile}
            required
          />
          <input
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            type="text"
            placeholder="Subject"
            value={formData.subject}
            required
          />
          <textarea
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Message"
            rows="4"
            value={formData.message}
            required
          ></textarea>
          <button
            className="bg-sky-600 text-white py-3 px-5 rounded-full text-base md:text-lg hover:bg-sky-700"
            type="submit"
          >
            Submit
          </button>
        </form>
        {notification && (
          <p className="mt-4 text-center text-lg font-semibold text-green-600">
            {notification}
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
