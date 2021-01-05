import React from "react";
import {connect} from "react-redux";

import CommentList from "../components/comment-list";
import AddComment from "../components/add-comments";

import {addComment, removeComment} from "../actions/index";

{
  if (localStorage.getItem("state")) {
    this.setState({...JSON.parse(localStorage.getItem("state"))});
  }
}

let App = ({comments, addComment, removeComment}) => {
  return (
    <div className="widget__wrapper">
      <AddComment addComment={addComment} />
      <CommentList comments={comments} removeComment={removeComment} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (name, text, date) => dispatch(addComment(name, text, date)),
    removeComment: (id) => dispatch(removeComment(id)),
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
