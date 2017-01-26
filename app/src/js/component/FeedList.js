var React = require('react'),
    FeedItem = require('./FeedItem')

var FeedList = React.createClass({

  render: function(){


    var feedItem = this.props.FeedData.map(function(item){
      //    console.log(item);
          var imageStatus;
          if (item.mediaGroups){
            imageStatus = item.mediaGroups[0].contents[0].thumbnails[0].url
          } else {
            imageStatus = "";
          }
          return <FeedItem image={imageStatus} heading={item.title} desc={item.content} />
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
