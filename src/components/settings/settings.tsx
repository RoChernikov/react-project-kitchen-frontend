import ListErrors from '../list-errors/list-errors';
import React, { FC, useEffect, useState } from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  LOGOUT,
} from '../../constants/actionTypes';

const SettingsForm = ({ onSubmitForm, currentUser }) => {
  const [image, setImage] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setImage(currentUser.image || '');
      setUsername(currentUser.username);
      setBio(currentUser.bio);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  const submitForm = (evt) => {
    evt.preventDefault();
    const user = {
      image,
      username,
      bio,
      email,
    };
    if (password) user[password] = password;
    onSubmitForm(user);
  };

  return (
    <form onSubmit={submitForm}>
      <fieldset>
        <fieldset className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="URL of profile picture"
            value={image}
            onChange={(evt) => setImage(evt.target.value)}
          />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
          />
        </fieldset>

        <fieldset className="form-group">
          <textarea
            className="form-control form-control-lg"
            rows={8}
            placeholder="Short bio about you"
            value={bio}
            onChange={(evt) => setBio(evt.target.value)}></textarea>
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </fieldset>

        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </fieldset>

        <button
          className="btn btn-lg btn-primary pull-xs-right"
          type="submit"
          disabled={inProgress}>
          Update Settings
        </button>
      </fieldset>
    </form>
  );
};

const mapStateToProps = (state) => ({
  ...state.settings,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onSubmitForm: (user) =>
    dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) }),
  onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED }),
});

type TCurrentUser = {
  image: string,
  username: string,
  bio: string,
  email: string,
};

interface ISettings {
  errors: any;
  currentUser: TCurrentUser;
  onSubmitForm: () => void;
  onClickLogout: () => void;
}

const Settings: FC<ISettings> = ({
  errors,
  currentUser,
  onSubmitForm,
  onClickLogout,
}) => {
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <ListErrors errors={errors}></ListErrors>

            <SettingsForm
              currentUser={currentUser}
              onSubmitForm={onSubmitForm}
            />

            <hr />

            <button className="btn btn-outline-danger" onClick={onClickLogout}>
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
