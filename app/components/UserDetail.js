var React = require('react');
var PropTypes = React.PropTypes;

function UserDetail(user) {
    return (
        <div>
            {!!user.score && <li className="list-group-item"><h3>Score: {user.score}</h3></li>}
            <li className="list-group-item"><img className="img-rounded img-responsive" src={user.info.avatar_url}/></li>
            {user.info.name && <li className="list-group-item">Name: {user.info.name}</li>}
            <li className="list-group-item">Username: {user.info.login}</li>
            {user.info.location && <li className="list-group-item">Location: {user.info.location}</li>}
            {user.info.company && <li className="list-group-item">Company: {user.info.company}</li>}
            <li className="list-group-item">Name: {user.info.followers}</li>
            <li className="list-group-item">Name: {user.info.following}</li>
            <li className="list-group-item">Name: {user.info.public_repos}</li>
            {user.info.blog && <li className="list-group-item">Name: {user.info.blog}</li>}
        </div>
    )
}

UserDetail.PropTypes = {
    score:PropTypes.number,
    info:PropTypes.shape({
        avatar_url:PropTypes.string.isRequired,
        blog:PropTypes.string,
        company:PropTypes.string,
        followers:PropTypes.string.isRequired,
        following : PropTypes.string.isRequired,
        public_repos : PropTypes.string.isRequired,
        login : PropTypes.string.isRequired,
        location:PropTypes.string,
        name:PropTypes.string
    })

};

module.exports = UserDetail;