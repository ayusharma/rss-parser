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

    $.ajax({
        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q='+url,
        jsonp: "callback",
        dataType: "jsonp",
        success: function(response) {

            if(response.responseData == null) {

              alert(response.responseDetails);

            } else {
              var apiData = response.responseData.feed.entries;
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
