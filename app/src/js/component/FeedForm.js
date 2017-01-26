var React = require('react');

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
              <input ref="url" className="form-control" type="text" name="topic" placeholder="Please enter RSS link here.." />
              <br/>
              <button type="Crawl" className="btn btn-success btn-block">Crawl</button>
            </div>
            <div className="col-md-8 col-md-offset-2 text-center">
              <br/>
             <b>For Example:</b> https://www.technologyreview.com/topnews.rss?from=feedstr
            </div>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = FeedForm;
