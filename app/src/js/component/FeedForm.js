var React = require('React');

var FeedForm = React.createClass({

  formSubmit: function(e){
    e.preventDefault();
    var url = this.refs.url.value;
    this.props.apiCall(url);
    this.refs.feedForm.reset();
  },

  render: function(){
    return(
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <form id="feedForm" ref="feedForm" onSubmit={this.formSubmit}>
            <div className="col-md-6 col-md-offset-3 form-group">
              <input ref="url" className="form-control" type="text" name="topic" placeholder="Add A link" />
              <br/>
              <button type="Crawl" className="btn btn-primary btn-block">Add</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = FeedForm;
