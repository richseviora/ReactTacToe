import { connect } from 'react-redux';
import * as ReactRedux from 'react-redux';
import * as Game from '../components/game';

const mapStateToProps: ReactRedux.MapStateToProps<Game.IGameState, any> = (state): Game.IGameState => {
    return state;
};

const mapDispatchToProps: ReactRedux.MapDispatchToProps<any, Game.IGameState> = (dispatch) => {

};

const AppState = connect(mapStateToProps)(Game.Game);

export default AppState;