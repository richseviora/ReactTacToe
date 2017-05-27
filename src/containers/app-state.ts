import { connect } from 'react-redux';
import * as ReactRedux from 'react-redux';
import * as Game from '../components/game';

const mapStateToProps: ReactRedux.MapStateToProps<Game.IGameState, any> = (): Game.IGameState => {
    return null;
};

const AppState = connect(mapStateToProps)(Game.Game);