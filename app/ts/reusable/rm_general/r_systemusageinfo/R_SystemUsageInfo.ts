import amGeneralSystemStorageInfo = require("../../../../../app/ts/abstract/am_general/a_systemstorageinfo/A_SystemStorageInfo");
import amGeneralSystemUsageInfo     = require("../../../../../app/ts/abstract/am_general/a_systemusageinfo/A_SystemUsageInfo");

import rmGeneralSystemStorageInfo = require("../../../../../app/ts/reusable/rm_general/r_systemstorageinfo/R_SystemStorageInfo");
import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_SystemUsageInfo  extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralSystemUsageInfo.am_general.A_SystemUsageInfo
  {
    //--- properties
    _totalMemory: number;
    _availableMemory: number;
    _systemStorageUnits: Array<amGeneralSystemStorageInfo.am_general.A_SystemStorageInfo>;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._totalMemory = 0;
      this._availableMemory = 0;
      this._systemStorageUnits = new Array<amGeneralSystemStorageInfo.am_general.A_SystemStorageInfo>();
    }

    public copyFromJson(jsonSystemUsageInfo: any): void
    {
      if (jsonSystemUsageInfo != null) {
        this._totalMemory = jsonSystemUsageInfo._totalMemory;
        this._availableMemory = jsonSystemUsageInfo._availableMemory;
        for (let i = 0; i < jsonSystemUsageInfo._systemStorageUnits.length; i++) {
          const storageInfo: amGeneralSystemStorageInfo.am_general.A_SystemStorageInfo = new rmGeneralSystemStorageInfo.rm_general.R_SystemStorageInfo();
          storageInfo.copyFromJson(jsonSystemUsageInfo._systemStorageUnits[i]);
          this._systemStorageUnits.push(storageInfo); 
        }
      }
    }

    public getTotalMemory(): number
    {
      return this._totalMemory;
    }

    public setTotalMemory(totalMemory: number): void
    {
      this._totalMemory = totalMemory;
    }

    public getAvailableMemory(): number
    {
      return this._availableMemory;
    }

    public setAvailableMemory(availableMemory: number): void
    {
      this._availableMemory = availableMemory;
    }

    public getSystemStorageUnits(): Array<amGeneralSystemStorageInfo.am_general.A_SystemStorageInfo>
    {
      return this._systemStorageUnits;
    } 

    public setSystemStorageUnits(systemStorageUnits: Array<amGeneralSystemStorageInfo.am_general.A_SystemStorageInfo>): void
    {
      this._systemStorageUnits = [...systemStorageUnits];
    }

    public addSystemStorage(systemStorage: amGeneralSystemStorageInfo.am_general.A_SystemStorageInfo)
    {
      this._systemStorageUnits.push(systemStorage);
    }
  }
} 