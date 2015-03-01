var React = require('react');
var _     = require('lodash');

function format(node) {
  if (_.isArray(node)) {
    var nodeName = _.first(node);
    var findProp = _.partial(_.find, _.rest(node));
    var props = _.mapValues({
      attrs: _.isPlainObject,
      children: _.isArray,
      compiled: React.isValidElement,
      text: _.isString
    }, findProp);

    var child = props.text || props.compiled || _.map(props.children, format);

    return React.createElement(nodeName, props.attrs, child);
  } else {
    return node;
  }
}

module.exports = format;
