export default class Request {
  /**
   * Tipo de objeto aceito por XMLHttpRequest
   *
   * @typedef {Object} RequestOptions
   * @property {string} url
   * @property {"GET"|"POST"|"PUT"|"DELETE"} [method]
   * @property {CallableFunction|undefined} [callback]
   * @property {Object} [headers]
   */

  /**
   *
   * @param {XMLHttpRequest} request
   */
  constructor(request) {
    /** @type {XMLHttpRequest} @private */
    this._request = request;
  }

  /**
   *
   * @param {RequestOptions} options
   * @return Request
   */
  static create(options) {
    let objXMLHttpRequest = new XMLHttpRequest();

    options.method = options.method || "GET";

    objXMLHttpRequest.open(options.method, options.url);

    if (options.callback instanceof Function) {

      objXMLHttpRequest.onreadystatechange = function () {
        options.callback(objXMLHttpRequest.response);
      }

    }

    return new Request(objXMLHttpRequest);
  }

  /**
   * @param {string} url
   * @param {CallableFunction} callback
   * @param {Object|undefined} options
   */
  static get(url, callback, options = {}) {
    let request = Request.create({ url: url, callback: callback, method: "GET" });
    request.send();
  }

  send() {
    this._request.send();
  }
}
