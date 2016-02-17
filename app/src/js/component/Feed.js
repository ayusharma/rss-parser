var React =     require('React'),
    FeedForm =  require('./FeedForm'),
    $ =         require('jquery'),
    FeedList =  require('./FeedList');

var Feed = React.createClass({

  getInitialState : function(){

    var feeddata = [];

    return {FeedData:feeddata}
  },

  apiCall : function(url){

    $.ajax({
        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q='+url,
        jsonp: "callback",
        dataType: "jsonp",
        success: function(response) {
            var apiData = response.responseData.feed.entries;
            console.log(response.responseData);
            var newData = this.state.FeedData.concat([apiData])
            this.setState({
              FeedData:newData
            });
        }.bind(this)
    });
  },

  render: function(){
    return(
      <div>
        <FeedForm apiCall={this.apiCall} />
        <FeedList FeedData={this.state.FeedData} />
      </div>
    )
  }
})

module.exports = Feed;
