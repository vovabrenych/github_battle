var React = require('react');
var PropsTypes = React.PropTypes;
var Link = React.Link;
var styles = require('../styles/index');
var MainContainer = require('../containers/MainContainer');

var UserDetails = require('./UserDetail');
var UserDetailWrapper = require('./UserDetailWrapper');

function Result(props) {
    if(props.isLoading === true){
        return (
            <p> LOADING </p>
        )
    }

    if(props.scores[0] === props.scores[1]){
        return (
           <MainContainer>
               <h1>It's tie</h1>
               <div className="col-sm-8 col-sm-offset-2" style={styles.space}>
                   <Link to='/playerOne'>
                       <button type="button" className="btn btn-lg btn-danger">
                           Start Over
                       </button>
                   </Link>
               </div>
           </MainContainer>
        )
    }
    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;
    return(
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailWrapper header="Winner">
                    <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
                </UserDetailWrapper>
                <UserDetailWrapper header="Loser">
                    <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
                </UserDetailWrapper>
            </div>
            <div className="col-sm-8 col-sm-offset-2" style={styles.space}>
                <Link to='/playerOne'>
                    <button type="button" className="btn btn-lg btn-danger">
                        Start Over
                    </button>
                </Link>
            </div>
        </MainContainer>
    )
}

Result.PropTypes = {
    isLoading:PropsTypes.bool.isRequired,
    scores:PropsTypes.array.isRequired,
    playersInfo:PropsTypes.array.isRequired
};

module.exports = Result;