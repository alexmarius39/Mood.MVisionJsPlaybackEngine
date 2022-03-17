import amServerCommand = require("../../../abstract/am_general/ae_livecommands/AE_ServerCommand");
import rmEntity = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_ServerCommand extends rmEntity.rm_general.R_Entity
                                 implements amServerCommand.am_general.AE_ServerCommand
  {
    //--- properties
    _nId: number;
    _strName: string;
    _strParams: any;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._nId = -1;
      this._strParams = null;
    }

    public copyFromJson(jsonSystemStorageInfo: any): void
    {
      this._nId  = jsonSystemStorageInfo._nId;
      this._strName = jsonSystemStorageInfo._strName;
      this._strParams   = jsonSystemStorageInfo._strParams;
    }

    public getId()
    {
      return this._nId;
    }

    public setId(nId: number)
    {
      this._nId = nId;
    }

    public getName()
    {
      return this._strName;
    }

    public setName(strName: string)
    {
      this._strName = strName;
    }

    public getParams(): any
    {
      return this._strParams;
    }

    public setParams(strParams: any): void
    {
      this._strParams = strParams;
    }

  }
} 