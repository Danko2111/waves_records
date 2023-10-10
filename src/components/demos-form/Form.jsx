import { useState } from "react";
import "./Form.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { public_key, service_id, template_id } from "../../../config";

function Form() {
  const initialState = {
    name: "",
    email: "",
    track_title: "",
    track_link: "",
    genre: "",
    comments: "",
  };
  const [formInfo, setFormInfo] = useState(initialState);
  const [errors, setErrors] = useState({});

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const updateInputValue = (inputId, value) => {
    setFormInfo({ ...formInfo, [inputId]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      emailjs
        .send(
          service_id,
          template_id,
          {
            name: formInfo.name,
            email: formInfo.email,
            track_title: formInfo.track_title,
            track_link: formInfo.track_link,
            genre: formInfo.genre,
            comments: formInfo.comments,
          },
          public_key
        )
        .then((response) => {
          if (response.status === 200) {
            toast.success("Demo submitted successfully");
            setErrors({});
            setFormInfo(initialState);
          } else {
            toast.error("Failed to submit demo");
          }
        })
        .catch((error) => {
          console.error("Unhandled promise rejection:", error);
          toast.error("An unexpected error occurred");
        });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (formInfo.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (formInfo.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formInfo.email)) {
      newErrors.email = "Not a valid email";
    }
    if (formInfo.track_title.trim() === "") {
      newErrors.track_title = "Track title is required";
    }
    if (formInfo.track_link.trim() === "") {
      newErrors.track_link = "Track link is required";
    }
    return newErrors;
  };

  return (
    <section className="demo-form" id="demos">
      <div className="demo-form__wrapper">
        <h2 className="demo-form__title">Drop Your Demos</h2>
        <form className="demo-form__form">
          <div className="demo-form__item">
            <label htmlFor="artist-name" className="demo-form__label">
              Artist Name *
            </label>
            <input
              id="artist-name"
              className={`demo-form__input ${errors.name ? "error" : ""}`}
              placeholder="Enter artist name"
              value={formInfo.name}
              onChange={(e) => updateInputValue("name", e.target.value)}
            ></input>
            {errors.name && (
              <span className="error-copy">{`${errors.name}!`}</span>
            )}
          </div>
          <div className="demo-form__item">
            <label htmlFor="email-address" className="demo-form__label">
              Email Address *
            </label>
            <input
              id="email-address"
              className={`demo-form__input ${errors.email ? "error" : ""}`}
              placeholder="Enter email address"
              value={formInfo.email}
              onChange={(e) => updateInputValue("email", e.target.value)}
            ></input>
            {errors.email && (
              <span className="error-copy">{`${errors.email}!`}</span>
            )}
          </div>
          <div className="demo-form__item">
            <label htmlFor="track-title" className="demo-form__label">
              Track Title *
            </label>
            <input
              id="track-title"
              className={`demo-form__input ${
                errors.track_title ? "error" : ""
              }`}
              placeholder="Enter track title"
              value={formInfo.track_title}
              onChange={(e) => updateInputValue("track_title", e.target.value)}
            ></input>
            {errors.track_title && (
              <span className="error-copy">{`${errors.track_title}!`}</span>
            )}
          </div>
          <div className="demo-form__item">
            <label htmlFor="track-link" className="demo-form__label">
              Track Link *
            </label>
            <input
              id="track-link"
              className={`demo-form__input ${errors.track_link ? "error" : ""}`}
              placeholder="Enter track link"
              value={formInfo.track_link}
              onChange={(e) => updateInputValue("track_link", e.target.value)}
            ></input>
            {errors.track_link && (
              <span className="error-copy">{`${errors.track_link}!`}</span>
            )}
          </div>
          <div className="demo-form__item">
            <label htmlFor="genre" className="demo-form__label">
              Genre
            </label>
            <input
              id="genre"
              className="demo-form__input"
              placeholder="What genre is the track?"
              value={formInfo.genre}
              onChange={(e) => updateInputValue("genre", e.target.value)}
            ></input>
          </div>
          <div className="demo-form__item">
            <label htmlFor="comments" className="demo-form__label">
              Additional Comments
            </label>
            <textarea
              id="comments"
              className="demo-form__textarea"
              placeholder="Write any additional comments here"
              value={formInfo.comments}
              onChange={(e) => updateInputValue("comments", e.target.value)}
            ></textarea>
          </div>
          <button className="demo-form__button" onClick={(e) => submitForm(e)}>
            Submit
          </button>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </form>
      </div>
    </section>
  );
}

export default Form;
