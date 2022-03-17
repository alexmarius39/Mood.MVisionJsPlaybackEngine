import rmGeneralEntity                         = require("../r_entity/R_Entity");
import amGeneralActivityLogServiceSettings     = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogServiceSettings");
import amGeneralActivityLogVerbosityTypes      = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogVerbosityTypes");

export module rm_general
{
    export class R_ActivityLogServiceSettings extends rmGeneralEntity.rm_general.R_Entity implements amGeneralActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings {
        _activityLogEnable: boolean;
        _autoUploadIntervalSeconds: number;
        _autoUploadEnabled: boolean;
        _fileEnabled: boolean;


        _sendBufferMaxSizeKb: number;
        _sendLocalSentPath: string;
        _sendLocalBaseName: string;

        _saveBufferMaxSizeKb: number;
        _saveLocalPath: string;
        _saveLocalBaseName: string;
        _saveLocalFileSplitSizeInMb: number;


        _serverEndpoint: string;
        _serverEndpointPath: string;
        _verbosityType: amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType;

        constructor() {
            super();

            this._activityLogEnable = false;
            this._autoUploadIntervalSeconds = 7200;
            this._autoUploadEnabled = false;
            this._fileEnabled = false;


            this._sendBufferMaxSizeKb = 5120;
            this._sendLocalSentPath = "/moodmedia/send_activitylogs/";
            this._sendLocalBaseName = "activityLog";

            this._saveBufferMaxSizeKb = 2048;
            this._saveLocalPath = "/moodmedia/save_activitylogs/";
            this._saveLocalBaseName = "activityLog";
            this._saveLocalFileSplitSizeInMb = 100;


            this._serverEndpoint = "FilesHandler.ashx";
            this._serverEndpointPath = "tcv5\\server_received_files\\";
            this._verbosityType = amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType.All;
        }

        public getActivityLogEnable(): boolean {
            return this._activityLogEnable;
        }
        public setActivityLogEnable(value: boolean) {
            this._activityLogEnable = value;
        }

        public getAutoUploadIntervalSeconds(): number {
            return this._autoUploadIntervalSeconds;
        }
        public setAutoUploadIntervalSeconds(value: number) {
            this._autoUploadIntervalSeconds = value;
        }

        public getAutoUploadEnabled(): boolean {
            return this._autoUploadEnabled;
        }
        public setAutoUploadEnabled(value: boolean) {
            this._autoUploadEnabled = value;
        }
        
        public setFileEnabled(value: boolean) {
            this._fileEnabled = value;
        }
        public getFileEnabled(): boolean {
            return this._fileEnabled;
        }



        public getSendBufferMaxSizeKb(): number {
            return this._sendBufferMaxSizeKb;
        }
        public setSendBufferMaxSizeKb(value: number) {
            this._sendBufferMaxSizeKb = value;
        }

        public getLocalSentPath(): string {
            return this._sendLocalSentPath;
        }
        public setLocalSentPath(value: string) {
            this._sendLocalSentPath = value;
        }

        public getLocalSentBaseName(): string {
            return this._sendLocalBaseName;
        }
        public setLocalSentBaseName(value: string) {
            this._sendLocalBaseName = value;
        }



        public getSaveBufferMaxSizeKb(): number {
            return this._saveBufferMaxSizeKb;
        }
        public setSaveBufferMaxSizeKb(value: number) {
            this._saveBufferMaxSizeKb = value;
        }

        public getLocalSavePath(): string {
            return this._saveLocalPath;
        }
        public setLocalSavePath(value: string) {
            this._saveLocalPath = value;
        }

        public getLocalSaveBaseName(): string {
            return this._saveLocalBaseName;
        }
        public setLocalSaveBaseName(value: string) {
            this._saveLocalBaseName = value;
        }

        public getLocalSplitSizeInMb(): number {
            return this._saveLocalFileSplitSizeInMb;
        }
        public setLocalSplitSizeInMb(value: number) {
            this._saveLocalFileSplitSizeInMb = value;
        }





        public getServerEndpoint(): string {
            return this._serverEndpoint;
        }
        public setServerEndpoint(value: string) {
            this._serverEndpoint = value;
        }

        public setServerEndpointPath(value: string) {
            this._serverEndpointPath = value;
        }
        public getServerEndpointPath(): string {
            return this._serverEndpointPath;
        }

        public getVerbosityType(): amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType {
            return this._verbosityType;
        };
        public setVerbosityType(value: amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType) {
            this._verbosityType = value;
        };
    }
}