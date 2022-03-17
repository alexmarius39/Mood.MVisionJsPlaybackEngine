"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_Utils_Web_R = (function () {
        function IImpl_Utils_Web_R(owner) {
            this._extensionsMimeTypeMap = {
                "zip": "application/zip",
                "txt": "text/plain",
                "log": "text/plain",
                "htm": "text/html",
                "html": "text/html",
                "js": "application/javascript",
                "css": "application/css",
                "xml": "text/xml",
                "gif": "image/gif",
                "jpg": "image/jpeg",
                "jpeg": "image/jpeg",
                "png": "image/png",
                "mp4": "video/mp4"
            };
            this._owner = owner;
        }
        IImpl_Utils_Web_R.prototype.addContentDispositionHeaders = function (httpRequest, arrayCDHeaders, callback) {
            if (arrayCDHeaders == null || arrayCDHeaders.length == 0) {
                callback != null && callback();
                return;
            }
            var bAddEndBoundary = false;
            if (arrayCDHeaders.length === 1) {
                bAddEndBoundary = true;
            }
            var aCDHeader = arrayCDHeaders.pop();
            var self = this;
            var headerName = aCDHeader.getHeaderName();
            var headerValue = aCDHeader.getHeaderValue();
            var isHeaderFileBinary = aCDHeader.isHeaderFileBinary();
            var aHeaderFile = aCDHeader.getHeaderFile();
            if (!headerName || !headerName.length)
                return;
            var reqBody = httpRequest.getBody();
            var boundary = httpRequest.getBoundary();
            if (!boundary) {
                httpRequest.setBoundary("380009360982575615081974");
            }
            if (reqBody == null) {
                reqBody = "";
            }
            if (headerValue && headerValue.length > 0) {
                reqBody += "\r\n--" + boundary + "\r\nContent-Disposition: form-data; name=\"" + headerName + "\"\r\n\r\n" + headerValue;
                if (bAddEndBoundary) {
                    reqBody += "\r\n--" + boundary + "--\r\n";
                }
                httpRequest.setBody(reqBody);
                self.addContentDispositionHeaders(httpRequest, arrayCDHeaders, callback);
            }
            else if (aHeaderFile != null && aHeaderFile.getStorage() && aHeaderFile.getPath() && aHeaderFile.getName()) {
                var cbReadFile = function (ctx) {
                    if (ctx != null && !ctx.isError()) {
                        var strBuffer = "";
                        if (isHeaderFileBinary) {
                            var binaryBuffer = ctx.getArrayResult();
                            if (binaryBuffer.length > 0) {
                                strBuffer = self._owner._iUtilsConvertor.convertFromArrayToString(binaryBuffer);
                            }
                        }
                        else {
                            strBuffer = ctx.getResult();
                        }
                        if (strBuffer.length > 0) {
                            reqBody += "\r\n--" + boundary + "\r\nContent-Disposition: form-data; name=\"" + headerName + "\"";
                            reqBody += aHeaderFile.getUrlName() != null ? "; filename=\"" + aHeaderFile.getUrlName() + "\"" : "; filename=\"" + aHeaderFile.getName() + "\"";
                            var fileExt = aHeaderFile.getName().split('.').pop();
                            if (self._extensionsMimeTypeMap.hasOwnProperty(fileExt)) {
                                reqBody += "\r\nContent-Type: " + self._extensionsMimeTypeMap[fileExt];
                            }
                            else {
                                reqBody += "\r\nContent-Type: application/octet-stream";
                            }
                            reqBody += "\r\n\r\n" + strBuffer;
                            if (bAddEndBoundary) {
                                reqBody += "\r\n--" + boundary + "--\r\n";
                            }
                            httpRequest.setBody(reqBody);
                        }
                    }
                    self.addContentDispositionHeaders(httpRequest, arrayCDHeaders, callback);
                };
                var errorReadFile = self._owner._aServiceLocator._iEntityCreation.createDefaultError();
                var contextReadFile = self._owner._aServiceLocator._iEntityCreation.createDefaultContext();
                contextReadFile.setRemoteCallback(true);
                if (isHeaderFileBinary) {
                    self._owner._aSDKService._iSDKFileSystem.readBinaryFile(aHeaderFile.getStorage(), aHeaderFile.getPath(), aHeaderFile.getName(), errorReadFile, contextReadFile, cbReadFile);
                }
                else {
                    self._owner._aSDKService._iSDKFileSystem.readTextFile2(aHeaderFile.getStorage(), aHeaderFile.getPath(), aHeaderFile.getName(), errorReadFile, contextReadFile, cbReadFile);
                }
            }
            else {
                self.addContentDispositionHeaders(httpRequest, arrayCDHeaders, callback);
            }
        };
        IImpl_Utils_Web_R.prototype.sendHttpRequest = function (httpRequest, error, context, callback) {
            var self = this;
            var httpRequestUrlPath = httpRequest.getUrlPath();
            var httpRequestMethod = httpRequest.getMethod();
            var httpRequestHeaders = httpRequest.getHeaders();
            if (httpRequestUrlPath == null || httpRequestMethod == null) {
                error != null && error.setError(2013, "Utils sendHttpRequest missing parameters: url " + httpRequestUrlPath + " method " + httpRequestMethod);
                context != null && context.setError(error);
                callback != null && callback(context);
                return;
            }
            var strHttps = "https://";
            var strHttp = "http://";
            var indexHttps = httpRequestUrlPath.indexOf(strHttps);
            var indexHttp = httpRequestUrlPath.indexOf(strHttp);
            var reqPart1 = "";
            var reqPart2 = "";
            try {
                if (indexHttps == 0) {
                    reqPart1 = httpRequestUrlPath.substring(0, strHttps.length);
                    reqPart2 = httpRequestUrlPath.substring(strHttps.length);
                }
                else if (indexHttp == 0) {
                    reqPart1 = httpRequestUrlPath.substring(0, strHttp.length);
                    reqPart2 = httpRequestUrlPath.substring(strHttp.length);
                }
                else {
                    reqPart2 = httpRequestUrlPath;
                }
                do {
                    var idx = reqPart2.indexOf("//");
                    if (idx == -1)
                        break;
                    reqPart2 = reqPart2.split("//").join("/");
                } while (1);
                httpRequestUrlPath = "" + reqPart1 + reqPart2;
            }
            catch (e) { }
            var cbAddCDHeaders = function () {
                var httpRequestUrl = httpRequestUrlPath;
                var urlParams = JSON.parse(httpRequest.getUrlParams());
                if (urlParams != null) {
                    var firstUrlParams = true;
                    for (var key in urlParams) {
                        httpRequestUrl += firstUrlParams ? "?" : "&";
                        firstUrlParams = false;
                        httpRequestUrl += key + "=" + urlParams[key];
                    }
                }
                var xhr = new XMLHttpRequest();
                xhr.open(httpRequestMethod, httpRequestUrl, true);
                if (httpRequestHeaders != null) {
                    var headers = JSON.parse(httpRequestHeaders);
                    for (var key in headers) {
                        if (headers.hasOwnProperty(key)) {
                            xhr.setRequestHeader(key, headers[key]);
                        }
                    }
                }
                var stringBody = httpRequest.getBody();
                if (stringBody != null && stringBody.length > 0) {
                    var httpRequestBody = self._owner._iUtilsConvertor.convertFromStringToBufferView(stringBody);
                    if (httpRequestBody != null && httpRequestBody.byteLength > 0) {
                        xhr.send(httpRequestBody);
                    }
                }
                else {
                    xhr.send();
                }
                xhr.onreadystatechange = function (e) {
                    if (this.readyState == 4) {
                        if (this.status >= 200 && this.status < 400) {
                            context != null && context.setResult(this.responseText);
                        }
                        else {
                            error.setError(2013, "Error sending request to: " + httpRequestUrl + " status " + this.statusText);
                        }
                        context != null && context.setError(error);
                        callback != null && callback(context);
                    }
                };
            };
            var arrayCDHeaders = httpRequest.getCDHeaders();
            self.addContentDispositionHeaders(httpRequest, arrayCDHeaders, cbAddCDHeaders);
        };
        return IImpl_Utils_Web_R;
    }());
    rm_transversalservices.IImpl_Utils_Web_R = IImpl_Utils_Web_R;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_Utils_Web_R.js.map