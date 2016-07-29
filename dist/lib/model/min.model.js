$dhx.ui.mvp.models.declare({model:function(){"strict";var e=function(){var e={database:{id:"dhxMVP",description:"dhxMVP demo database",nolog:!0,migrations:[]},versions:{1:{questions:{item:"question",defaults:{__v:{type:Number,"default":0,unique:!1,validate:{required:!0,mask_to_use:"",rules:""},ui:{form:{label:"__v",type:"hidden"},grid:{header:"__v",align:"left",coltype:"ro",width:"0"}}},_id:{type:String,"default":0,unique:!0,validate:{required:!0,mask_to_use:"",rules:""},ui:{form:{label:"_id",type:"hidden"},grid:{header:"_id",align:"left",coltype:"ro",width:"0"}}},question:{type:String,"default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:"NotEmpty"},ui:{form:{label:"Question",type:"input"},grid:{header:"Question",align:"left",coltype:"ro",width:"*"}}},answer:{type:String,"default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:"NotEmpty"},ui:{form:{label:"Answer",type:"input"},grid:{header:"Answer",align:"left",coltype:"ro",width:"0"}}}}},users:{item:"user",defaults:{_id:{type:String,"default":0,unique:!0,validate:{required:!0,mask_to_use:"",rules:""},ui:{form:{label:"_id",type:"hidden"},grid:{header:"_id",align:"left",coltype:"ro",width:"0"}}},phone:{type:String,"default":null,unique:!1,validate:{required:!1,mask_to_use:"us_phone",rules:""},ui:{form:{label:"Phone",type:"input"},grid:{header:"Phone",align:"right",coltype:"ro",width:"0"}}},first_name:{type:String,"default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:"NotEmpty"},ui:{form:{label:"First name",type:"input"},grid:{header:"First name",align:"left",coltype:"ro",width:"120"}}},last_name:{type:String,"default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:""},ui:{form:{label:"Last name",type:"input"},grid:{header:"Last name",align:"left",coltype:"ro",width:"120"}}},title:{type:String,"default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:""},ui:{form:{label:"Title",type:"input"},grid:{header:"Title",align:"",coltype:"ro",width:""}}},picture:{type:String,"default":null,unique:!1,validate:{required:!1,mask_to_use:void 0,rules:""},ui:{form:{label:"Picture",type:"container"},grid:{header:"Picture",align:"left",coltype:"ro",width:"0"}}},address:{type:String,"default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:""},ui:{form:{label:"Address",type:"input"},grid:{header:"Address",align:"left",coltype:"ro",width:"0"}}},city:{type:String,"default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:""},ui:{form:{label:"City",type:"input"},grid:{header:"City",align:"left",coltype:"ro",width:"0"}}},state:{type:String,"default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:""},ui:{form:{label:"State",type:"input"},grid:{header:"State",align:"left",coltype:"ro",width:"0"}}},country:{type:String,"default":"USA",unique:!1,validate:{required:!0,mask_to_use:void 0,rules:""},ui:{form:{label:"Country",type:"input"},grid:{header:"Country",align:"left",coltype:"ro",width:"0"}}},username:{type:String,"default":null,unique:!1,validate:{required:!0,mask_to_use:void 0,rules:"NotEmpty"},ui:{form:{label:"Username",type:"input"},grid:{header:"Username",align:"left",coltype:"ro",width:"120"}}},resume:{type:String,"default":null,unique:!1,validate:{required:!1,mask_to_use:void 0,rules:""},ui:{form:{label:"Resume",type:"hidden"},grid:{header:"Resume",align:"left",coltype:"ro",width:"0"}}}}}}}},t={database:e.database,versions:e.versions};return t}();return e.data=function(){var t={},r={},o={_collections:t,start:function(){var d=function(){};for(var i in t)r[t[i].item]=Backbone.Model.extend({database:e.database,storeName:i,nolog:!0,defaults:t[i].defaults,initialize:d}),r[i]=Backbone.Collection.extend({model:r[t[i].item],database:e.database,nolog:!0,storeName:i}),o[t[i].item]=function(e){return function(o){return $dhx.debug.log(e),$dhx.debug.log(t[e].item),new r[t[e].item](o)}}(i),o[i]=function(e){return $dhx.debug.log(e),function(){return $dhx.debug.log(e),$dhx.debug.log(t[e].item),new r[e]}}(i)}};return o}(),e.schema=function(){var t={setup:function(r){var o,d=t,i=null,n=function(){for(i in e.versions){var t=Object.keys(e.versions[i]);t.forEach(function(t){$dhx.debug.log("store name: ",t);var r=e.versions[i][t],o={};for(var d in r.defaults){var n=r.defaults[d];o[d]=n["default"]}e.data._collections[t]={item:r.item,defaults:o}}),o={version:parseInt(i),migrate:function(t,r){var o=[],d=Object.keys(e.versions[i]),n=d.length,a=0;$dhx.debug.log("store_names: ",d),d.forEach(function(r){var d=e.versions[i][r];o[r]=null,t.db.objectStoreNames.contains(r)||(o[r]=t.db.createObjectStore(r)),o[r]=t.objectStore(r);for(var u in d.defaults){var l=d.defaults[u];o[r].createIndex(u,u,{unique:l.unique||!1})}t.addEventListener("complete",function(t){a+=1,$dhx.debug.log(a,n),a==n&&$dhx.debug.log(e.data._collections)}),t.onsuccess=function(e){$dhx.debug.log(e)},t.addEventListener("success",function(e){$dhx.debug.log(e)})}),r()}},e.database.migrations.push(o)}d.create_database(r,e)};try{var a=window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.msIndexedDB,u=a.deleteDatabase(e.database.id);u.onsuccess=function(t){$dhx.debug.log("indexedDB: "+e.database.id+" deleted"),n()},u.onerror=function(e){$dhx.debug.error("indexedDB.delete Error: "+e.message),n()}}catch(l){$dhx.debug.error("Error: "+l.message),n()}},get_collection_meta:function(t,r){var o=Object.keys(e.versions[t]),d=!1;return o.forEach(function(o){o==r&&($dhx.debug.log("store name: ",o),d=e.versions[t][o])}),d},get_collection_item:function(t,r){var o=Object.keys(e.versions[t]),d=!1;return $dhx.debug.log("model.versions: ",e.versions),$dhx.debug.log("version: ",t),$dhx.debug.log("model.versions[ version ]: ",e.versions[t]),o.forEach(function(o){o==r&&($dhx.debug.log(o,r),d=e.versions[t][o].item)}),d},set_start_data:function(e){var r=t;return $dhx.isObject(e)?void(r.start_data=e):void alert("The start data does not have a valid format.\nApplication will not start.")},get_start_data:function(){var e=t;return e.start_data},create_database:function(e,r){var o=t,d=Object.keys(o.get_start_data()),i=(d.length,[]),n=[],a=[],u=[],l=null,s=function(e,t,r){$dhx.debug.log(t),$dhx.debug.log(r);var d=r.shift();collection_name=t.shift(),t.length>0&&r.length>0?($dhx.debug.log("XXXXXXXXXX> "+d,collection_name),o.insert_records_into_table(i[d],collection_name,function(o,d){s(e,t,r)})):0===t.length&&0===r.length?($dhx.debug.log("XXXXXXXXXX> "+d,collection_name),o.insert_records_into_table(i[d],collection_name,function(t,r){e&&e()})):e&&e()};$dhx.debug.log(d),d.forEach(function(e,t){l=r.schema.get_collection_item(1,e),i[l]=Backbone.Model.extend({database:r.database,storeName:e}),n[e]=Backbone.Collection.extend({database:r.database,storeName:e,model:i[l]}),a.push(e),u.push(l),$dhx.debug.log("--"),$dhx.debug.log("item: ",l),$dhx.debug.log("collection: ",e),$dhx.debug.log("models[ item ]: ",i[l]),$dhx.debug.log("collections[ collection ]: ",n[e]),$dhx.debug.log("c_names: ",a),$dhx.debug.log("m_names: ",u)}),s(function(){e.onSetup&&e.onSetup()},a,u)},insert_records_into_table:function(e,r,o){var d=t,i=d.get_start_data()[r].shift();if($dhx.debug.warn(" ---------------- "),$dhx.debug.log("adding records to: ",r),i){$dhx.debug.log(i),$dhx.debug.log("adding records to: ",r);var n=new e;$dhx.debug.log("record: ",i),$dhx.debug.log("model: ",n),n.save(i,{success:function(){$dhx.debug.info("success inserting record: ",i),$dhx.debug.warn("props: ",Object.keys(i).length),$dhx.debug.log(arguments),d.insert_records_into_table(e,r,o)},error:function(e,t){$dhx.debug.error(t.srcElement.error.message),$dhx.debug.error("error inserting record: ",i),$dhx.debug.warn("props: ",Object.keys(i).length),$dhx.debug.log(e,t)}})}else $dhx.debug.log("done inserting records into: ",r),$dhx.debug.warn(" ---------------- "),o(e,r)},start:function(r){var o=t;r.onSetup=function(){try{$dhx.debug.log("model.schema setup is done!"),e.data.start(),e.data.questions().fetch({success:function(e,t,o){$dhx.debug.log(e),r.onSuccess&&r.onSuccess(),$dhx.debug.log(e.models)},error:function(e,t,r){$dhx.debug.log(e)}})}catch(t){$dhx.debug.log(t.stack)}},o.setup(r)},io:{users:{put:function(t){var r="string"==typeof t.record?JSON.parse(t.record):t.record,o=r._id?{id:r._id}:{},d=new e.data.user(o);d.save(r,{success:function(){t.onSuccess&&t.onSuccess()},error:function(e,r){dhtmlx.alert({text:"Error saving model data locally",type:"alert-error"}),t.onFail&&t.onFail()}})}},questions:{put:function(t){var r="string"==typeof t.record?JSON.parse(t.record):t.record,o=r._id?{id:r._id}:{},d=new e.data.user(o);d.save(r,{success:function(){t.onSuccess&&t.onSuccess()},error:function(e,r){dhtmlx.alert({text:"Error saving model data locally",type:"alert-error"}),t.onFail&&t.onFail()}})}}}};return API={start:t.start,questions:function(){return t.questions},get_collection_meta:t.get_collection_meta,get_collection_item:t.get_collection_item,set_start_data:t.set_start_data,get_start_data:t.get_start_data,io:t.io},API}(),e}()});