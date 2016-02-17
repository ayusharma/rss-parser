var React = require('React');

var FeedItem = React.createClass({

  render: function(){
    return(
      <li className="list-group-item">
        <div className="media">
          <div className="media-left media-middle">
            <a href="#">
              <img className="media-object" src="http://pthumbnails.5min.com/10382039/519101935_c_210_158.jpg" alt="" />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{this.props.title}</h4>
            {this.props.desc}
          </div>
        </div>
      </li>
    )
  }
})

module.exports = FeedItem;
