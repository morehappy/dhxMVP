var user={__v:$dhx.ui.mvp.model.helpers.schema.defaults.__v,_id:$dhx.ui.mvp.model.helpers.schema.defaults._id,first_name:{type:"string","default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:"NotEmpty"},ui:{form:{label:"First name",type:"input"},grid:{header:"First name",align:"left",coltype:"ro",width:"120"}}},last_name:{type:"string","default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:""},ui:{form:{label:"Last name",type:"input"},grid:{header:"Last name",align:"left",coltype:"ro",width:"120"}}},title:{type:"string","default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:""},ui:{form:{label:"Title",type:"input"},grid:{header:"Title",align:"",coltype:"ro",width:""}}},picture:{type:"string","default":null,unique:!1,validate:{required:!1,mask_to_use:void 0,rules:""},ui:{form:{label:"Picture",type:"container"},grid:{header:"Picture",align:"left",coltype:"ro",width:"0"}}},phone:{type:"string","default":null,unique:!1,validate:{required:!1,mask_to_use:"us_phone",rules:""},ui:{form:{label:"Phone",type:"input"},grid:{header:"Phone",align:"right",coltype:"ro",width:"0"}}},address:{type:"string","default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:""},ui:{form:{label:"Address",type:"input"},grid:{header:"Address",align:"left",coltype:"ro",width:"0"}}},city:{type:"string","default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:""},ui:{form:{label:"City",type:"input"},grid:{header:"City",align:"left",coltype:"ro",width:"0"}}},state:{type:"string","default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:""},ui:{form:{label:"State",type:"input"},grid:{header:"State",align:"left",coltype:"ro",width:"0"}}},country:{type:"string","default":"USA",unique:!1,validate:{required:!0,mask_to_use:void 0,rules:""},ui:{form:{label:"Country",type:"input"},grid:{header:"Country",align:"left",coltype:"ro",width:"0"}}},username:{type:"string","default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:"NotEmpty"},ui:{form:{label:"Username",type:"input"},grid:{header:"Username",align:"left",coltype:"ro",width:"120"}}},resume:{type:"string","default":null,unique:!1,validate:{required:!1,mask_to_use:void 0,rules:""},ui:{form:{label:"Resume",type:"hidden"},grid:{header:"Resume",align:"left",coltype:"ro",width:"0"}}}};"function"==typeof define&&define.amd?define(function(){return user}):"undefined"!=typeof module&&module.exports&&(module.exports=user);