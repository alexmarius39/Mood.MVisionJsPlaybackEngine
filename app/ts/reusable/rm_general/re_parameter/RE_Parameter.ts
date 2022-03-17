import amGeneral     = require("../../../../../app/ts/abstract/am_general/ae_parameter/AE_Parameter");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class RE_Parameter    extends rmGeneralEntity.rm_general.R_Entity
                               implements amGeneral.am_general.AE_Parameter
  {
    //--- properties
    _paramType:  string;
    _paramName:  string;
    _paramValue: string;
  
    //----------- constructor 
    constructor()  
    {  
      super();
      this._paramType  = "";
      this._paramName  = "";
      this._paramValue = "";
    }


    //---------------------------
    public getParameterType()  : string
    {
      return this._paramType; 
    }
    //------------------------------
    public setParameterType(paramType: string) : void
    {
      this._paramName = paramType;
    }

    //---------------------------
    public getParameterName()  : string
    {
      return this._paramName; 
    }
    //------------------------------
    public setParameterName(paramName: string) : void
    {
      this._paramName = paramName;
    }

    //---------------------------
    public getParameterValue()  : string
    {
      return this._paramValue; 
    }
    //------------------------------
    public setParameterValue(paramValue: string) : void
    {
      this._paramValue = paramValue;
    }

    //------------------------------------------------
    public copyFromJson(jsonParameter : any) : number
    {
      if (jsonParameter == null)
        return 1;
      //--------------------  
      this.setParameterType(jsonParameter.param_type);

      //--------------------  
      this.setParameterName(jsonParameter.param_name);

      //--------------------  
      this.setParameterValue(jsonParameter.param_value);

      return 0;
    }
  }
} 

/*

               {
                 "param_type" :  "number",
                 "param_name" :  "p1",
                 "param_value":  "10"
               },
*/