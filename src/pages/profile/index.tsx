import ArticleList from '../../../src_old/components/article-list/article-list';
import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import agent from '../../../src_old/agent';
import { connect } from 'react-redux';
import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
} from '../../../src_old/constants/actionTypes';
import { useAppDispatch, useAppSelector } from 'services/hooks';
import { selectCurrentUser } from 'services/selectors/profile';
import { signIn } from 'services/slices/profile';
import { selectArticles } from 'services/selectors/articles';
import ArticlePreview from 'components/article-preview/article-preview';

// export const EditProfileSettings = ({ isUser }) => {
//   if (isUser) {
//     return (
//       <Link
//         to="/settings"
//         className="btn btn-sm btn-outline-secondary action-btn">
//         <i className="ion-gear-a"></i> Edit Profile Settings
//       </Link>
//     );
//   }
//   return null;
// };

// export const FollowUserButton = ({ isUser, user, follow, unfollow }) => {
//   if (isUser) {
//     return null;
//   }

//   let classes = 'btn btn-sm action-btn';
//   if (user.following) {
//     classes += ' btn-secondary';
//   } else {
//     classes += ' btn-outline-secondary';
//   }

//   const handleClick = (ev) => {
//     ev.preventDefault();
//     if (user.following) {
//       unfollow(user.username);
//     } else {
//       follow(user.username);
//     }
//   };

//   return (
//     <button className={classes} onClick={handleClick}>
//       <i className="ion-plus-round"></i>
//       &nbsp;
//       {user.following ? 'Unfollow' : 'Follow'} {user.username}
//     </button>
//   );
// };

// const mapStateToProps = (state) => ({
//   ...state.articleList,
//   currentUser: state.common.currentUser,
//   profile: state.profile,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onFollow: (username) =>
//     dispatch({
//       type: FOLLOW_USER,
//       payload: agent.Profile.follow(username),
//     }),
//   onLoad: (payload) => dispatch({ type: PROFILE_PAGE_LOADED, payload }),
//   onUnfollow: (username) =>
//     dispatch({
//       type: UNFOLLOW_USER,
//       payload: agent.Profile.unfollow(username),
//     }),
//   onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED }),
// });

interface IProfile {
  onLoad: any;
  onUnload: any;
  match: {
    params: {
      username: string;
    };
  };
  profile: {
    username: string;
    bio: string;
    image: string;
  };
  currentUser: {
    username: string;
  };
  onFollow: () => void;
  onUnfollow: () => void;
  pager: any;
  articles: any;
  articlesCount: number;
  currentPage: number;
}

const ProfilePage: FC = ({
  // onLoad,
  // onUnload,
  // match,
  // profile = {
  //   username: 'username',
  //   bio: 'bio',
  //   image: 'image',
  // },
  // currentUser,
  // onFollow,
  // onUnfollow,
  // pager,
  // articles,
  // articlesCount,
  // currentPage,
}) => {
  // useEffect(() => {
  //   onLoad(
  //     Promise.all([
  //       agent.Profile.get(match.params.username),
  //       agent.Articles.byAuthor(match.params.username),
  //     ])
  //   );

  //   return () => onUnload();
  // }, [match.params.username, onLoad, onUnload]);

  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const articles = useAppSelector(selectArticles);

  useEffect(() => {
    // временный хардкор логин
    dispatch(
      signIn({
        user: { username: 'julia', email: 'julia@gmail.com', password: '123' },
      })
    );
  }, [dispatch]);

  const isUser = currentUser && currentUser.username === currentUser.username;

  const renderTabs = () => {
    return (
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <Link className="nav-link active" to={`/@${currentUser.username}`}>
            My Articles
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/@${currentUser.username}/favorites`}>
            Favorited Articles
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <>
      {!currentUser ? null : (
        <div className="profile-page">
          <div className="user-info">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-10 offset-md-1">
                  <img
                    src={currentUser.image}
                    className="user-img"
                    alt={currentUser.username}
                  />
                  <h4>{currentUser.username}</h4>
                  <p>{currentUser.bio}</p>
                  {/* <EditProfileSettings isUser={isUser} />
                  <FollowUserButton
                    isUser={isUser}
                    user={profile}
                    follow={onFollow}
                    unfollow={onUnfollow}
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <div className="articles-toggle">{renderTabs()}</div>
                <ArticlePreview article={articles[0]}/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfilePage;
