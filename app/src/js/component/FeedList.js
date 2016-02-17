var React = require('React'),
    FeedItem = require('./FeedItem')

var FeedList = React.createClass({

  render: function(){

    console.log(this.props.FeedData);

    var feedItem = this.props.FeedData.map(function(item){
          <FeedItem image={item.mediaGroups} heading={item.title} desc={item.content} />
    });

    return(
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <ul className="list-group">
            { feedItem }
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = FeedList;
