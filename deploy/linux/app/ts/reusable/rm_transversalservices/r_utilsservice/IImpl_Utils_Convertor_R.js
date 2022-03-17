"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_Utils_Convertor_R = (function () {
        function IImpl_Utils_Convertor_R(owner) {
            this._owner = owner;
        }
        IImpl_Utils_Convertor_R.prototype.convertFromArrayToString = function (byteArray) {
            var resString = "";
            for (var i = 0; i < byteArray.length; i++) {
                resString += String.fromCharCode(byteArray[i]);
            }
            return resString;
        };
        IImpl_Utils_Convertor_R.prototype.convertFromStringToBufferView = function (strBuffer) {
            var bodyLen = strBuffer.length;
            var bufView = new Uint8Array(bodyLen);
            for (var i = 0; i < bodyLen; i++) {
                bufView[i] = strBuffer.charCodeAt(i);
            }
            return bufView;
        };
        return IImpl_Utils_Convertor_R;
    }());
    rm_transversalservices.IImpl_Utils_Convertor_R = IImpl_Utils_Convertor_R;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_Utils_Convertor_R.js.map