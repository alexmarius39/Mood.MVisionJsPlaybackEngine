import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_rebootservice/AI_RebootServiceRun");


import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_rebootservice/RS_RebootService");
                                                     
                                                     

export module rm_nonrenderingservices
{
  export class RI_RebootServiceRun implements amNonRenderingServices.am_nonrenderingservices.AI_RebootServiceRun
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.RS_RebootService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.RS_RebootService)  
    {
      this._owner = owner;  
    }
  }
} 