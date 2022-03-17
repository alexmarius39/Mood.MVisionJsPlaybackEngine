"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_Utils_SignalR_R = (function () {
        function IImpl_Utils_SignalR_R(owner) {
            this._owner = owner;
            this._nStartConnectionAttempts = 0;
            this._nMaxStartConnectionAttempts = 0;
            this._connection = null;
        }
        IImpl_Utils_SignalR_R.prototype.getConnection = function () {
            return this._connection;
        };
        IImpl_Utils_SignalR_R.prototype.setConnection = function (connection) {
            this._connection = connection;
        };
        IImpl_Utils_SignalR_R.prototype.resetStartConnectionAttempts = function () {
            this._nStartConnectionAttempts = 0;
        };
        IImpl_Utils_SignalR_R.prototype.setMaxStartConnectionAttempts = function (nMaxStartConnectionAttempts) {
            this._nMaxStartConnectionAttempts = nMaxStartConnectionAttempts;
        };
        IImpl_Utils_SignalR_R.prototype.createConnection = function (strHubUrl, strAuthToken) {
            var self = this;
            var strHttps = "https://";
            var strHttp = "http://";
            var indexHttps = strHubUrl.indexOf(strHttps);
            var indexHttp = strHubUrl.indexOf(strHttp);
            var reqPart1 = "";
            var reqPart2 = "";
            try {
                if (indexHttps == 0) {
                    reqPart1 = strHubUrl.substring(0, strHttps.length);
                    reqPart2 = strHubUrl.substring(strHttps.length);
                }
                else if (indexHttp == 0) {
                    reqPart1 = strHubUrl.substring(0, strHttp.length);
                    reqPart2 = strHubUrl.substring(strHttp.length);
                }
                else {
                    reqPart2 = strHubUrl;
                }
                do {
                    var idx = reqPart2.indexOf("//");
                    if (idx == -1)
                        break;
                    reqPart2 = reqPart2.split("//").join("/");
                } while (1);
                strHubUrl = "" + reqPart1 + reqPart2;
            }
            catch (e) { }
            try {
                self._connection = new signalR.HubConnectionBuilder()
                    .withUrl(strHubUrl, { accessTokenFactory: function () { return strAuthToken; } })
                    .configureLogging(signalR.LogLevel.Information)
                    .build();
            }
            catch (e) {
                self._connection = null;
            }
        };
        IImpl_Utils_SignalR_R.prototype.startConnection = function (error, context, callback) {
            var _this = this;
            var self = this;
            if (self._nStartConnectionAttempts == self._nMaxStartConnectionAttempts) {
                error != null && error.setError(9012, "[SignalR]: cannot start connection");
                context != null && context.setError(error);
                callback != null && callback(context);
                return;
            }
            self._connection.start()
                .then(function () {
                context != null && context.setError(error);
                callback != null && callback(context);
            })
                .catch(function (err) {
                setTimeout(function () { return _this.startConnection(error, context, callback); }, 5000);
            });
        };
        return IImpl_Utils_SignalR_R;
    }());
    rm_transversalservices.IImpl_Utils_SignalR_R = IImpl_Utils_SignalR_R;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_Utils_SignalR_R.js.map