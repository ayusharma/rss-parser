var React = require('React');

var FeedItem = React.createClass({

  render: function(){
    //console.log(this);
    return(
      <li className="list-group-item">
        <div className="media">
          <div className="media-left media-middle">
            <a href="#">
              <img className="media-object" src={this.props.image} alt="" />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{this.props.heading}</h4>
            {this.props.desc}
          </div>
        </div>
      </li>
    )
  }
})

module.exports = FeedItem;
