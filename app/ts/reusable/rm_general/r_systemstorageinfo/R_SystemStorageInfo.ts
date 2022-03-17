import amSystemStorageInfo = require("../../../../../app/ts/abstract/am_general/a_systemstorageinfo/A_SystemStorageInfo");
import rmEntity            = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_SystemStorageInfo extends rmEntity.rm_general.R_Entity
                                   implements amSystemStorageInfo.am_general.A_SystemStorageInfo
  {
    //--- properties
    _type: string;
    _capacity: number;
    _availableCapacity: number;    

    //----------- constructor 
    constructor()  
    {  
      super();
      this._type = null;
      this._capacity = null;
      this._availableCapacity = null;
    }

    public copyFromJson(jsonSystemStorageInfo: any): void
    {
      this._type = jsonSystemStorageInfo._type;
      this._capacity = jsonSystemStorageInfo._capacity;
      this._availableCapacity = jsonSystemStorageInfo._availableCapacity;
    }

    public getType()
    {
      return this._type;
    }

    public setType(type: string)
    {
      this._type = type;
    }

    public getCapacity()
    {
      return this._capacity;
    }

    public setCapacity(capacity: number)
    {
      this._capacity = capacity;
    }

    public getAvailableCapacity()
    {
      return this._availableCapacity;
    }

    public setAvailableCapacity(availableCapacity: number)
    {
      this._availableCapacity = availableCapacity;
    }
  }
} 