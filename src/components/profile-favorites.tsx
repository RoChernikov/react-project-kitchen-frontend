import { mapStateToProps } from './profile/profile';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
} from '../constants/actionTypes';

const mapDispatchToProps = (dispatch) => ({
  onLoad: (pager, payload) =>
    dispatch({ type: PROFILE_PAGE_LOADED, pager, payload }),
  onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED }),
});

interface IProfileFavorites {
  profile: {
    username: string;
  };
  onLoad: (pager: (page: string) => any, payload: Promise<[any, any]>) => Dispatch<SetStateAction<string>>;
  onUnload: () => void;
  match: any;
}

const ProfileFavorites: React.FC<IProfileFavorites> = ({
  match,
  profile,
  onLoad,
  onUnload,
}) => {
  useEffect(() => {
    onLoad(
      (page: string) => agent.Articles.favoritedBy(match.params.username, page),
      Promise.all([
        agent.Profile.get(match.params.username),
        agent.Articles.favoritedBy(match.params.username),
      ])
    );
    return () => onUnload();
  }, [match.params.username, onLoad, onUnload]);

  return (
    <ul className="nav nav-pills outline-active">
      <li className="nav-item">
        <Link className="nav-link" to={`/@${profile.username}`}>
          My Articles
        </Link>
      </li>

      <li className="nav-item">
        <Link
          className="nav-link active"
          to={`/@${profile.username}/favorites`}>
          Favorited Articles
        </Link>
      </li>
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFavorites);
