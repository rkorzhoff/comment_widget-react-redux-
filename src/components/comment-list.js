import React from "react";
import {removeComment} from "../actions/index";
import {format} from "date-fns";
const CommentList = ({comments, removeComment, name, text}) => {
  return (
    <ul className="comment__wrapper">
      {comments.map((comment, index) => {
        return (
          <li className="comment__item" key={index}>
            <span className="comment__name">
              Пользователь <b>{comment.name}</b> написал:
            </span>
            <span className="comment__text">{comment.text}</span>
            <span className="comment__date">{format(new Date(comment.date), "Опубликовано dd/MM/yyyy 'в' HH:mm")}</span>
            <button
              className="comment__remove"
              onClick={(ev) => {
                removeComment(index);
              }}
            >
              x
            </button>
            <br />
          </li>
        );
      })}
    </ul>
  );
};

export default CommentList;
