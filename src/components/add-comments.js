import React, {useState} from "react";
import {connect} from "react-redux";
import {addComment} from "../actions/index.js";
import {format} from "date-fns";
const AddComment = ({addComment}) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  return (
    <div className="form__wrapper">
      <form className="input__wrapper">
        <label className="input__label" htmlFor="username">
          Введите ваше имя:
        </label>
        <input
          className="input__text"
          type="text"
          id="username"
          value={name}
          onChange={(ev) => {
            setName(ev.target.value);
          }}
        />

        <label className="input__label" htmlFor="usercomment">
          Введите ваш комментарий:
        </label>
        <textarea
          className="input__text message"
          id="usercomment"
          value={text}
          onChange={(ev) => {
            setText(ev.target.value);
          }}
        ></textarea>
        <button
          className="input__addButton"
          onClick={(ev) => {
            addComment(name, text);
          }}
        >
          Добавить комментарий
        </button>
      </form>
    </div>
  );
};
const mapDispatchToProps = {
  addComment,
};

export default connect(null, mapDispatchToProps)(AddComment);
