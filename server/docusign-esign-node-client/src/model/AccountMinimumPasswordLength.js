/**
 * Docusign eSignature REST API
 * The Docusign eSignature REST API provides you with a powerful, convenient, and simple Web services API for interacting with Docusign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccountMinimumPasswordLength = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The AccountMinimumPasswordLength model module.
   * @module model/AccountMinimumPasswordLength
   */

  /**
   * Constructs a new <code>AccountMinimumPasswordLength</code>.
   * @alias module:model/AccountMinimumPasswordLength
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccountMinimumPasswordLength</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountMinimumPasswordLength} obj Optional instance to populate.
   * @return {module:model/AccountMinimumPasswordLength} The populated <code>AccountMinimumPasswordLength</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('maximumLength')) {
        obj['maximumLength'] = ApiClient.convertToType(data['maximumLength'], 'String');
      }
      if (data.hasOwnProperty('minimumLength')) {
        obj['minimumLength'] = ApiClient.convertToType(data['minimumLength'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} maximumLength
   */
  exports.prototype['maximumLength'] = undefined;
  /**
   * 
   * @member {String} minimumLength
   */
  exports.prototype['minimumLength'] = undefined;



  return exports;
}));

