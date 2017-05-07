var React =     require('react'),
    FeedForm =  require('./FeedForm'),
    $ =         require('jquery'),
    FeedList =  require('./FeedList');

var Feed = React.createClass({

  getInitialState : function(){

    var feeddata = [];

    return {FeedData:feeddata}
  },

  apiCall : function(url){
    var feed = 'https://morning-earth-19323.herokuapp.com/?feedURL=';
    $.ajax({
        url: [feed, url.trim()].join(''),
        method: "GET",
        success: function(response) {

            if(response.items == null) {

              alert("An error occurred.");

            } else {
              var apiData = response.items;
              var newData = this.state.FeedData.concat(apiData);
              this.setState({
                FeedData:newData
              });
            }
        }.bind(this)
    });
  },

  render: function(){
    console.log(this.state.FeedData);
    return(

      <div>
        <FeedForm apiCall={this.apiCall} />
        <br/>
        <FeedList FeedData={this.state.FeedData} />
      </div>
    )
  }
})

module.exports = Feed;
