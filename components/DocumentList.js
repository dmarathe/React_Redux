var React = require('react');
var PropTypes = React.PropTypes;
var DocumentCard = require('./DocumentCard');

var DocumentList = React.createClass({
  propTypes: {
    documents: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  },


  render: function() {
    var cards = [];
    var actions = this.props.actions;
    if (this.props.documents) {
      this.props.documents.forEach(function(document) {
        cards.push(<DocumentCard {...document} key={document.id} actions={actions} />);
      });
    }
    
    return (
      <div id="wrapper">
        <h2>Trap List</h2>
         <div id="columns">
        {cards}
       </div>
      </div>
    );
  }
});

module.exports = DocumentList;
