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
import ListErrors from '../../components/ListErrors';
import { LOGIN, LOGIN_PAGE_UNLOADED } from '../../constants/actionTypes';
import { TErrors } from '../../utils/types';

const mapStateToProps = (state) => ({ ...state.auth });

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (email, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
  onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED }),
});

interface ILoginPage {
  errors: TErrors | undefined;
  inProgress: boolean | undefined;
  onSubmit: (email: string, password: string) => void;
  onUnload: () => void;
}

const LoginPage: FC<ILoginPage> = ({
  errors,
  inProgress,
  onSubmit,
  onUnload,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    (evt: SyntheticEvent) => {
      evt.preventDefault();
      onSubmit(email, password);
    },
    [onSubmit, email, password]
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
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>

            <ListErrors errors={errors} />

            <form onSubmit={handleSubmit}>
              <fieldset>
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
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
