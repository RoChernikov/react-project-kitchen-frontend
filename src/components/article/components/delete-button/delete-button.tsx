import React, { FC, Dispatch, SetStateAction, useEffect } from 'react';
//import agent from '../../../../../src_old/agent';
import { connect } from 'react-redux';
import { DELETE_COMMENT } from '../../../../../src_old/constants/actionTypes';

// const mapDispatchToProps = (dispatch) => ({
//   onClick: (payload, commentId) =>
//     dispatch({ type: DELETE_COMMENT, payload, commentId }),
// });

interface IDeleteButton {
  slug: string;
  commentId: string;
  show: boolean | null;
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
  ...rest
}) => {
  const del = () => {
    //const payload = agent.Comments.delete(slug, commentId);
    //onClick(payload, commentId);
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

// export default connect(() => ({}), mapDispatchToProps)(DeleteButton);

export default DeleteButton;
