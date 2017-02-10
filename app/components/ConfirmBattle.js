var React = require('react');
var PropsTypes = React.PropTypes;
var styles = require('../styles/index');
var Router = require('react-router');
var Link = Router.Link;
var UserDetails = require('./UserDetail');
var UserDetailWrapper = require('./UserDetailWrapper');
var MainContainer = require('../containers/MainContainer');
var Loading = require('./Loading');

function ConfirmBattle(props) {
    return props.isLoading === true ? <Loading/> :
        <MainContainer>
            <h1>Confirm Players</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailWrapper header="Player One">
                    <UserDetails info={props.playerInfo[0]}/>
                </UserDetailWrapper>
                <UserDetailWrapper header="Player Two">
                    <UserDetails info={props.playerInfo[1]}/>
                </UserDetailWrapper>
            </div>
            <div className="col-sm-8 col-sm-offset-2">
                <div className="col-sm-12" style={styles.space}>
                    <button className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
                        Initate battle
                    </button>
                </div>
                <div className="col-sm-12" style={styles.space}>
                    <Link to="/playerOne">
                        <button className="btn btn-lg btn-danger">
                            Reselect Players
                        </button>
                    </Link>
                </div>
            </div>
        </MainContainer>

}

ConfirmBattle.PropsTypes = {
    isLoading:PropsTypes.bool.isRequired,
    onInitiateBattle:PropsTypes.func.isRequired,
    playerInfo:PropsTypes.array.isRequired
};

module.exports = ConfirmBattle;