"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rmGeneralRemoteService = require("../../../../../app/ts/reusable/rm_general/r_service/IImpl_RemoteService_R");
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_RemoteService_SDKClient = (function (_super) {
        __extends(IImpl_RemoteService_SDKClient, _super);
        function IImpl_RemoteService_SDKClient(owner) {
            var _this = _super.call(this, owner) || this;
            _this._owner = owner;
            return _this;
        }
        IImpl_RemoteService_SDKClient.prototype.setRemoteUrl = function (url) {
        };
        IImpl_RemoteService_SDKClient.prototype.send = function (socket, params) {
        };
        IImpl_RemoteService_SDKClient.prototype.receive = function (socket, params) {
            var owner = this._owner;
            this._owner._socket.on('sdk.filesystem.ret-get-file-list', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileList(null, null, ctx, null);
                    return;
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-get-file-list2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileList2(null, null, null, ctx, null);
                    return;
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-get-nb-files2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getNbFiles2(null, null, null, ctx, null);
                    return;
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-read-text-file2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_readTextFile2(null, null, null, null, ctx, null);
                    return;
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-read-binary-file', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_readBinaryFile(null, null, null, null, ctx, null);
                    return;
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-file-exists2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_fileExists2(null, null, null, null, ctx, null);
                    return;
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-write-text-file2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_writeTextFile2(null, null, null, null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-append-text-file', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_appendTextToFile(null, null, null, null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-remove-file2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_removeFile2(null, null, null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-copy-file2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_copyFile2(null, null, null, null, null, null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-move-file2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_moveFile2(null, null, null, null, null, null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-download-file2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_downloadFile2(null, null, null, null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-upload-file2', function (ctx) {
                owner._aSDKConsumer._iNotify_SDKFileSystem.notify_uploadFile2(null, null, null, null, null, null, null, ctx, null);
            });
            this._owner._socket.on('sdk.filesystem.ret-unzip-file2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_unzipFile2(null, null, null, null, null, null, ctx, null);
                    return;
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-zip-file2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_zipFile2(null, null, null, null, null, null, null, ctx, null);
                    return;
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-create-folder2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_createFolder2(null, null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-delete-folder2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_deleteFolder2(null, null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-copy-folder2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_copyFolder2(null, null, null, null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-move-folder2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_moveFolder2(null, null, null, null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-zip-folder2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_zipFolder2(null, null, null, null, null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-getlastmodified', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getLastModified(null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-computefilesha2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_computeFileSha2(null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.filesystem.ret-computeandsavefilesha2', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFileSystem.notify_computeFileShaAndSaveShaFile2(null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.audiosetup.ret-get-volume', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKAudioSetup.notify_getVolumeLevel(null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.audiosetup.ret-set-volume', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKAudioSetup.notify_setVolumeLevel(null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.audiosetup.ret-get-mute', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKAudioSetup.notify_getMute(null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.audiosetup.ret-set-mute', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKAudioSetup.notify_setMute(null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.hardwaresetup.ret-get-networkinfo', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKHardwareSetup.notify_getNewtworkInfo(null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.hardwaresetup.ret-get-systemusageinfo', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKHardwareSetup.notify_getSystemUsageInfo(null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.hardwaresetup.ret-get-cpuinfo', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKHardwareSetup.notify_getCPUInfo(null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.generalconfiguration.ret-get-screenproperties', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKGeneralConfiguration.notify_promise_getScreenProperties(null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.generalconfiguration.ret-set-screenproperties', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKGeneralConfiguration.notify_setScreenProperties(null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.generalconfiguration.ret-get-language', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKGeneralConfiguration.notify_getOSDLanguages(null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.generalconfiguration.ret-set-language', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKGeneralConfiguration.notify_setOSDLanguages(null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.generalconfiguration.ret-get-uptime', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKGeneralConfiguration.notify_getUpTime(null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.firmwaresetup.ret-get-firmwareversion', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKFirmwareSetup.notify_getFirmwareVersion(null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.hardwaresetup.ret-get-serialnumber', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKHardwareSetup.notify_getSerialNumber(null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.timesetup.ret-set-date', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_setCrtDateTime(null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.timesetup.ret-get-date', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_getCrtDateTime(null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.timesetup.ret-get-timezoneoffset', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_getTimeZoneOffset(null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.timesetup.ret-set-ntpserver', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_setNTPServer(null, null, null, ctx);
                }
            });
            this._owner._socket.on('sdk.timesetup.ret-get-ntpserver', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_getNTPServer(null, null, ctx);
                }
            });
            this._owner._socket.on('sdk.timesetup.ret-set-usentp', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_setUseNTP(null, null, null, ctx);
                }
            });
            this._owner._socket.on('sdk.timesetup.ret-get-usentp', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_getUseNTP(null, null, ctx);
                }
            });
            this._owner._socket.on('sdk.timesetup.ret-get-timezone', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_getTimeZone(null, null, ctx);
                }
            });
            this._owner._socket.on('sdk.timesetup.ret-set-timezone', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_setTimeZone(null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.tvsignagesetup.ret-capture-screen', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKTvSignageSetup.notify_captureScreen(null, null, ctx, null);
                }
            });
            this._owner._socket.on('sdk.powersetup.ret-exec-cmd', function (ctx) {
                if (!owner._iService.runCallback(ctx)) {
                    owner._aSDKConsumer._iNotify_SDKPowerSetup.notify_executePowerCommand(null, null, ctx, null);
                }
            });
        };
        IImpl_RemoteService_SDKClient.prototype.startup_withConnectClient = function (remoteServerUrl) {
            return this._owner.startup_withConnectClient(remoteServerUrl);
        };
        IImpl_RemoteService_SDKClient.prototype.startup = function (socket) {
            return this._owner.startup(socket);
        };
        return IImpl_RemoteService_SDKClient;
    }(rmGeneralRemoteService.rm_general.IImpl_RemoteService_R));
    rm_transversalservices.IImpl_RemoteService_SDKClient = IImpl_RemoteService_SDKClient;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_RemoteService_SDKClient.js.map