'use strict';

/**
 *
 * @constructor
 */
function SchemaType() {
}

/**
 * @param value
 * @throws
 */
SchemaType.prototype.validateValue = function(value) {
  throw new Error('virtual function called');
};

module.exports = SchemaType;