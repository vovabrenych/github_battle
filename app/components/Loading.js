var React = require('react');

var style = {
  container:{
      position:'fixed',
      top:0,
      bottom:0,
      right:0,
      left:0,
      fontStyle : '55px'
  },
  content:{
      textAlign : 'center',
      position: 'absolute',
      width: '100%',
      marginTop: '30px'
  }
};

var Loading = React.createClass({
    getInitialState:function () {
        this.originText = 'Loading';
        return{
            text:'Loading'
        }
    },
    componentDidMout:function () {
        var stopper = this.originText +  '...';
        this.interval = setInterval(function () {
            if(this.state.text === stopper){
                this.setState({
                    text:this.originText
                });
            }
            else {
                this.setState({
                    text:this.originText + '.'
                });
            }
        }.bind(this),300)
    },
    componentWillUnmout:function () {
      clearInterval(this.interval);
    },
    render:function () {
        return(
            <div style={style.container}>
                <p style={style.content}>{this.props.text}</p>
            </div>
        )
    }
});

module.exports = Loading;