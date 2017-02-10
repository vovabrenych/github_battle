var axios = require('axios');

var id = '';
var sec = '';
var param = '?client_id=' +id + '&client_secret='+ sec;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param)
}

function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos' + param +'&per_page=100')
}

function getTotalStart(repos) {
    return repos.data.reduce(function (prev,current) {
        return prev + current.stargazers_count
    },0);
}

function getPlayersData(player){
    return getRepos(player.login).then(getTotalStart).then(function (totalStars) {
        return{
            followers: player.followers,
            totalStarts:totalStars
        }
    });
}

function calculateScores(player) {
    return [
        player[0].followers * 3 + player[0].totalStarts,
        player[1].followers * 3 + player[1].totalStarts
    ]
}

var helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function (username) {
            return getUserInfo(username)
        })).then(function (info) {
            return info.map(function (user) {
               return user.data;
            });
        }).catch(function (err) {
            console.warn(err);
        });
    },
    battle: function (players) {
        var playerOneData = getPlayersData(players[0]);
        var playerTwoData = getPlayersData(players[1]);
        return axios.all([playerOneData,playerTwoData]).then(calculateScores).catch(function (err) {
            console.warn(err);
        })
    }
};

module.exports = helpers;