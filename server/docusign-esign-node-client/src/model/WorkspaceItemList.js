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
    define(['ApiClient', 'model/WorkspaceItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkspaceItem'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkspaceItemList = factory(root.Docusign.ApiClient, root.Docusign.WorkspaceItem);
  }
}(this, function(ApiClient, WorkspaceItem) {
  'use strict';


  /**
   * The WorkspaceItemList model module.
   * @module model/WorkspaceItemList
   */

  /**
   * Constructs a new <code>WorkspaceItemList</code>.
   * Provides properties that describe the items contained in a workspace.
   * @alias module:model/WorkspaceItemList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WorkspaceItemList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkspaceItemList} obj Optional instance to populate.
   * @return {module:model/WorkspaceItemList} The populated <code>WorkspaceItemList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [WorkspaceItem]);
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Array.<module:model/WorkspaceItem>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));

