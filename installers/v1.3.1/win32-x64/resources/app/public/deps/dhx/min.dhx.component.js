!function(e){"use strict"}(window.$dhx=window.$dhx||{}),$dhx.component=$dhx.component||{checkCommomConfiguration:function(e,t){var n;return e.parent?!!e.settings||(n="settings is missing when creating "+t+" component",$dhx.debug.error(n),dhtmlx.message({type:"error",text:n}),!1):(n="parent is missing when creating "+t+" component",$dhx.debug.error(n),dhtmlx.message({type:"error",text:n}),!1)},form:function(e){var t=null,n=$dhx.component,a=function(t){var n;for(var a in t)"_id"!=a&&"__v"!=a&&(n={type:t[a].ui.form.type,name:a,label:t[a].ui.form.label,value:t[a]["default"]||"",required:t[a].validate.required||!1,validate:t[a].validate.rules||"",mask_to_use:t[a].validate.mask_to_use||""},t[a].ui.note&&t[a].ui.note.length>0&&(n.note={text:t[a].ui.note},n.tooltip=t[a].ui.note,n.info=!0),t[a].ui.form.options&&(n.options=t[a].ui.form.options),t[a].ui.maxLength&&$dhx.isNumber(t[a].ui.maxLength)&&parseInt(t[a].ui.maxLength)>0&&(n.maxLength=t[a].ui.maxLength),e.settings.template.push(n));e.settings.template.push({type:"block",list:[{type:"settings",position:"label-right",offsetLeft:0},{type:"checkbox",name:"close_on_save",label:"Close on save",checked:!0}]}),e.settings.template.push({type:"block",list:[{type:"button",name:"save",value:"Save item"},{type:"newcolumn"},{type:"button",name:"reset",value:"Reset form"}]})};if(n.checkCommomConfiguration(e,"form"))return e.defaults&&a(e.defaults),t="string"==typeof e.parent?new dhtmlXForm(e.parent,e.settings.template):e.parent.attachForm(e.settings.template),t._dhx_form_id=e.id,$dhx.dhtmlx.prepareForm(e.id,e.settings,t),t.fields=$dhx.dhtmlx.getFormFields(e.id),t.getFields=function(){$dhx.dhtmlx.getFormFields(e.id)},t.getField=function(t){$dhx.dhtmlx.getFormItem(t,e.id)},t.getFieldsName=function(){$dhx.dhtmlx.getFormFields(e.id)},t.reset=function(){try{var e={},n=t.getFormData();for(var a in n)e[a]="";t.setFormData(e)}catch(i){console.log(i.stack)}},t.check=function(){return $dhx.dhtmlx.validateForm(e.id,t)},t.validate=function(){return $dhx.dhtmlx.validateForm(e.id,t)},t.setFieldMandatory=function(e,t){},t.getFormDataO=t.getFormData,t.getFormData=function(){var e=t.getFormDataO(),n={};for(var a in e)e.hasOwnProperty(a)&&("string"==typeof e[a]?n[a]=e[a].replace(/\&/g,encodeURIComponent("&")):n[a]=e[a]);return t.fields.forEach(function(e){if("combo"==e.type&&"checkbox"==e.comboType){var a=t.getCombo(e.name),i=a.getChecked();n[e.name]=i.join(", ")}"input"==e.type&&"currency"==e.mask_to_use&&(n[e.name]=n[e.name].toString().replace(/,/g,""),$dhx.isNumber(n[e.name])||(n[e.name]=0)),"input"==e.type&&"can_currency"==e.mask_to_use&&(n[e.name]=n[e.name].toString().replace(/,/g,""),$dhx.isNumber(n[e.name])||(n[e.name]=0)),"input"==e.type&&"br_currency"==e.mask_to_use&&(n[e.name]=n[e.name].toString().replace(/./g,""),n[e.name]=n[e.name].toString().replace(/,/g,"."),$dhx.isNumber(n[e.name])||(n[e.name]=0)),"input"==e.type&&"timestamp without time zone"==e.sql_type&&(n[e.name]=n[e.name].toString().replace(/,/g,""),$dhx.isNumber(n[e.name])||delete n[e.name]),"input"==e.type&&"integer"==e.sql_type&&(n[e.name]=n[e.name].toString().replace(/,/g,""),$dhx.isNumber(n[e.name])||(n[e.name]=0))}),n},t.fill=function(e){t.fields.forEach(function(t){"input"==t.type&&"br_currency"==t.mask_to_use?(""!==e[t.name]&&null!==e[t.name]||(e[t.name]=0),e[t.name]=Number(parseFloat(e[t.name])).formatMoney(2,"",".",",")):"input"==t.type&&"can_currency"==t.mask_to_use?(""!==e[t.name]&&null!==e[t.name]||(e[t.name]=0),e[t.name]=Number(parseFloat(e[t.name])).formatMoney(2,"",",",".")):"input"==t.type&&"currency"==t.mask_to_use&&(""!==e[t.name]&&null!==e[t.name]||(e[t.name]=0),e[t.name]=Number(parseFloat(e[t.name])).formatMoney(2,"",",",".")),"date"==t.type&&(""!==e[t.name]&&null!==e[t.name]||delete e[t.name]),"time"==t.type&&(""!==e[t.name]&&null!==e[t.name]||delete e[t.name])}),t.setFormData(e),t.fields.forEach(function(n){if("btn2state"==n.type||"checkbox"==n.type)"undefined"==typeof e[n.name]?t.uncheckItem(n.name):1==e[n.name]?t.checkItem(n.name):"1"==e[n.name]?t.checkItem(n.name):t.uncheckItem(n.name);else if("combo"==n.type&&"checkbox"==n.comboType){var a=t.getCombo(n.name);if(e[n.name]=e[n.name]||"",""!==e[n.name]){var i=e[n.name].split(", ");a.forEachOption(function(e){""!==e.value&&i.contains(e.value)&&a.setChecked(e.index,!0)})}}})},t.on=function(e,n){"change"==e&&t.attachEvent("onChange",function(e,t,n){})},t},toolbar:function(e){var t=null,n=$dhx.component;if(n.checkCommomConfiguration(e,"toolbar"))return"string"==typeof e.parent?(e.settings.parent=e.parent,t=new dhtmlXToolbarObject(e.settings)):(delete e.settings.parent,t=e.parent.attachToolbar(e.settings)),e.iconSize&&t.setIconSize(parseInt(e.iconSize)),t},menu:function(e){var t=null,n=$dhx.component;if(n.checkCommomConfiguration(e,"menu"))return"string"==typeof e.parent?(e.settings.parent=e.parent,t=new dhtmlXMenuObject(e.settings)):(delete e.settings.parent,t=e.parent.attachMenu(e.settings)),t},tree:function(e){var t=null,n=($dhx.component,e.width?n:"100%"),a=e.height?e.height:"100%",i=e.rootId?e.rootId:0;return t="string"==typeof e.parent?dhtmlXTreeObject(e.parent,n,a,i):e.parent.attachTree(),e.setImagePath&&t.setImagePath(e.setImagePath),e.enableDragAndDrop&&t.enableDragAndDrop(!0),e.setDragBehavior&&t.setDragBehavior("complex"),e.enableItemEditor&&t.enableItemEditor(!0),e.enableKeyboardNavigation,t},grid:function(e){var t=null,n=$dhx.component;if(n.checkCommomConfiguration(e,"toolbar"))return"string"==typeof e.parent?t=new dhtmlXGridObject(e.parent):(delete e.settings.parent,t=e.parent.attachGrid(e.settings)),e.settings.header&&t.setHeader($dhx.isArray(e.settings.header)?e.settings.header.join(","):e.settings.header),e.settings.id&&t.setColumnIds($dhx.isArray(e.settings.id)?e.settings.id.join(","):e.settings.id),e.settings.width&&t.setInitWidths($dhx.isArray(e.settings.width)?e.settings.width.join(","):e.settings.width),e.settings.align&&t.setColAlign($dhx.isArray(e.settings.align)?e.settings.align.join(","):e.settings.align),e.settings.type&&t.setColTypes($dhx.isArray(e.settings.type)?e.settings.type.join(","):e.settings.type),e.settings.sorting&&t.setColSorting($dhx.isArray(e.settings.sorting)?e.settings.sorting.join(","):e.settings.sorting),t.setDateFormat("%Y-%m-%d","%Y-%m-%d"),e.beforeInit&&e.beforeInit(),t.init(),t}};