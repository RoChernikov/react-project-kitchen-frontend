import React, {
  FC,
  useState,
  useEffect,
  useCallback,
  SyntheticEvent,
} from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import { Link } from 'react-router-dom';
import ListErrors from '../../components/list-errors/list-errors';
import { REGISTER, REGISTER_PAGE_UNLOADED } from '../../constants/actionTypes';
import { TErrors } from '../../utils/types';

const mapStateToProps = (state) => ({ ...state.auth });

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (username, email, password) => {
    const payload = agent.Auth.register(username, email, password);
    dispatch({ type: REGISTER, payload });
  },
  onUnload: () => dispatch({ type: REGISTER_PAGE_UNLOADED }),
});

interface IRegisterPage {
  errors: TErrors | undefined;
  inProgress: boolean | undefined;
  onSubmit: (username: string, email: string, password: string) => void;
  onUnload: () => void;
}

const RegisterPage: FC<IRegisterPage> = ({
  errors,
  inProgress,
  onSubmit,
  onUnload,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault();
      onSubmit(username, email, password);
    },
    [onSubmit, username, email, password]
  );

  useEffect(() => {
    return () => {
      onUnload();
    };
  }, [onUnload]);

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>

            <ListErrors errors={errors} />

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={inProgress}>
                  Sign up
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
