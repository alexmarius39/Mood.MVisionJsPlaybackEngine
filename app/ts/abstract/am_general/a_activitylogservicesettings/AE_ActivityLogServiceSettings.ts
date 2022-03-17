import amGeneral = require("../a_entity/A_Entity");
import amGeneralActivityLogVerbosityTypes = require("../../am_general/a_activitylogservicesettings/AE_ActivityLogVerbosityTypes");

export module am_general {
     export interface AE_ActivityLogServiceSettings extends amGeneral.am_general.A_Entity {
        getActivityLogEnable(): boolean;
        setActivityLogEnable(value: boolean);

        getAutoUploadIntervalSeconds(): number
        setAutoUploadIntervalSeconds(value: number)

        getAutoUploadEnabled(): boolean
        setAutoUploadEnabled(value: boolean)
        
        setFileEnabled(value: boolean)
        getFileEnabled(): boolean


        getSendBufferMaxSizeKb(): number
        setSendBufferMaxSizeKb(value: number)

        getLocalSentPath(): string
        setLocalSentPath(value: string)

        getLocalSentBaseName(): string
        setLocalSentBaseName(value: string)


        getSaveBufferMaxSizeKb(): number
        setSaveBufferMaxSizeKb(value: number)

        getLocalSavePath(): string
        setLocalSavePath(value: string)

        getLocalSaveBaseName(): string
        setLocalSaveBaseName(value: string)

        getLocalSplitSizeInMb(): number
        setLocalSplitSizeInMb(value: number)


        getServerEndpoint(): string
        setServerEndpoint(value: string)

        setServerEndpointPath(value: string)
        getServerEndpointPath(): string

        getVerbosityType(): amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType;
        setVerbosityType(value: amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType);
    }
}