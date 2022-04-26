import { mapStateToProps } from '../profile/profile';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Link } from 'react-router-dom';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
} from '../../constants/actionTypes';
import { EditProfileSettings, FollowUserButton } from "../profile/profile";

const mapDispatchToProps = (dispatch) => ({
  onLoad: (pager, payload) =>
    dispatch({ type: PROFILE_PAGE_LOADED, pager, payload }),
  onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED }),
});

interface IProfileFavorites {
  profile: {
    username: string,
    image: string,
  };
  currentUser: {
    username: string,
  };
  onLoad: (
    pager: (page: string) => any,
    payload: Promise<[any, any]>
  ) => Dispatch<SetStateAction<string>>;
  onUnload: () => void;
  match: any;
  onFollow: () => void;
  onUnfollow: () => void;
}

const ProfileFavorites: React.FC<IProfileFavorites> = ({
  match,
  profile,
  onLoad,
  onUnload,
  currentUser,
  onFollow,
  onUnfollow,
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
  const isUser = currentUser && profile.username === currentUser.username;

  return (

    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img
                src={profile.image}
                className="user-img"
                alt={profile.username}
              />
              <h4>{profile.username}</h4>


              <EditProfileSettings isUser={isUser} />
              <FollowUserButton
                isUser={isUser}
                user={profile}
                follow={onFollow}
                unfollow={onUnfollow}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
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
          </div>
        </div>
      </div>
    </div>


  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFavorites);