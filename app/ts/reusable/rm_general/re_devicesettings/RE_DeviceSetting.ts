import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_DeviceSettings extends rmEntity.rm_general.R_Entity
                                 implements amDeviceSetting.am_general.AE_DeviceSetting
  {
    _value: any;
    _timestamp: number;
    _bInherited: boolean;
    _strRiskLevel: string;
    _strOrigin: string;
    _strUser: string;

    constructor()
    {
      super();

      this._value         = null;
      this._timestamp     = 0;
      this._bInherited    = true;
      this._strRiskLevel  = "Low";
      this._strOrigin     = "System default";
      this._strUser       = "";
  
    }

    public setValue(value: any)
    {
      this._value = value
    }
    public getValue() : any
    {
      return this._value;
    }

    public setTimestamp(timestamp: number)
    {
      this._timestamp = timestamp;
    }
    public getTimestamp() : number
    {
      return this._timestamp;
    }

    public setInherited(bInherited: boolean)
    {
      this._bInherited = bInherited
    }
    public getInherited() : boolean
    {
      return this._bInherited;
    }

    public setRiskLevel(strRiskLevel: string)
    {
      this._strRiskLevel = strRiskLevel;
    }
    public getRiskLevel() : string
    {
      return this._strRiskLevel;
    }

    public setOrigin(strOrigin: string) : void
    {
      this._strOrigin = strOrigin;
    }
    public getOrigin() : string
    {
      return this._strOrigin;
    }

    public setUser(strUser: string): void
    {
      this._strUser = strUser;
    }
    public getUser(): string
    {
      return this._strUser;
    }
  }
} 