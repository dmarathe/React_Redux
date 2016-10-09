var React = require('react');
var PropTypes = React.PropTypes;

var DocumentCard = React.createClass({
  propTypes: {
    mediaUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    pined: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired

  },

  handleDelete: function(text) {
    this.props.actions.deleteDoc(this.props.id);
  },

  onClickButton: function(event) {
    if (this.props.pined) {
      this.props.actions.unpinDoc(this.props.id);
    } else {
      this.props.actions.pinDoc(this.props.id);
    }
  },

  render: function() {
    return (
        <div className="pin">
            <span onClick={this.handleDelete}>X</span>
            <img src={this.props.mediaUrl} />
            <p>
              {this.props.title}
            </p>
            <input type='button' className='button' onClick={this.onClickButton} value={this.props.pined ? 'UnPine it' : 'Pine it'}/>
        </div>
    );
  }
});

module.exports = DocumentCard;
