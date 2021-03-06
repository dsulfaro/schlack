import { connect } from 'react-redux';
import Splash from './splash';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = store => ({
  session: store.session.currentUser,
  siErrors: store.session.sierrors,
  suErrors: store.session.suerrors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
