var React = require('react');
var bindActionCreators = require('redux').bindActionCreators;
var connect=require("react-redux").connect;
var DocumentList = require('../components/DocumentList');
var TodoActions = require('../actions/Actions');
var $ = require('jquery');

var TrapitApp = React.createClass({
  actions: null,
  componentDidMount() {
    var _that = this;
    // TODO understand Redux better to make ajax call in actions
    $.ajax({
      type: "GET",
      url: "http://curate.trap.it/api/v4/tc/traps/95ebae1c435f4dccabbf835685f3bf8f/atom/",
      cache: false,
      dataType: "xml",
      success: function(xml) {
        var entries = [];
        var index = 1;
        // Convert xml to json
        $(xml).find('entry').each(function() {
          var _this = $(this);
          var title = _this.find('title').text();
          var mediaUrl = _this.find('[url]').attr('url');
          var id = _this.find('id').text();
          entries.push({
            id: id,
            title: title,
            mediaUrl: mediaUrl,
            pined : false
          });
        });

        if (_that.actions) {
          _that.actions.receivedDocs(entries);
        }
        
      }
    });
  },
  render: function() {
    var dispatch=this.props.dispatch;
    var documents=this.props.documents;
    var actions = bindActionCreators(TodoActions, dispatch);
    this.actions = actions;
    return (
      <div>
        <DocumentList documents={documents} actions={actions} />
      </div>
    );
  },

});

function mapStateToProps(state) {
  return {
    documents: state
  };
}

module.exports = connect(mapStateToProps)(TrapitApp);
