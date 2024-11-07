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
    define(['ApiClient', 'model/UserInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NewUsersDefinition = factory(root.Docusign.ApiClient, root.Docusign.UserInformation);
  }
}(this, function(ApiClient, UserInformation) {
  'use strict';


  /**
   * The NewUsersDefinition model module.
   * @module model/NewUsersDefinition
   */

  /**
   * Constructs a new <code>NewUsersDefinition</code>.
   * @alias module:model/NewUsersDefinition
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NewUsersDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewUsersDefinition} obj Optional instance to populate.
   * @return {module:model/NewUsersDefinition} The populated <code>NewUsersDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('newUsers')) {
        obj['newUsers'] = ApiClient.convertToType(data['newUsers'], [UserInformation]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/UserInformation>} newUsers
   */
  exports.prototype['newUsers'] = undefined;



  return exports;
}));

