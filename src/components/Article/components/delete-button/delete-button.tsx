import React, { FC, Dispatch, SetStateAction } from 'react';
import agent from '../../../../agent';
import { connect } from 'react-redux';
import { DELETE_COMMENT } from '../../../../constants/actionTypes';

const mapDispatchToProps = (dispatch) => ({
  onClick: (payload, commentId) =>
    dispatch({ type: DELETE_COMMENT, payload, commentId }),
});

interface IDeleteButton {
  slug: string;
  commentId: string;
  show: boolean;
  onClick: (
    payload: Promise<string>,
    commentId: string
  ) => Dispatch<SetStateAction<string>>;
}

const DeleteButton: FC<IDeleteButton> = ({
  slug,
  commentId,
  show,
  onClick,
}) => {
  const del = () => {
    const payload = agent.Comments.delete(slug, commentId);
    onClick(payload, commentId);
  };

  if (show) {
    return (
      <span className="mod-options">
        <i className="ion-trash-a" onClick={del}></i>
      </span>
    );
  }
  return null;
};

export default connect(() => ({}), mapDispatchToProps)(DeleteButton);
