!function(e){"use strict"}(window.$dhx=window.$dhx||{}),$dhx.excells=$dhx.excells||{env:window,init:function(){var e=$dhx.excells;e.env.eXcell_UScurrency=e.us.currency,e.env.eXcell_UScurrency.prototype=new eXcell,e.env.eXcell_ssn=e.us.ssn,e.env.eXcell_ssn.prototype=new eXcell,e.env.eXcell_USphone=e.us.phone,e.env.eXcell_USphone.prototype=new eXcell,e.env.eXcell_BRcurrency=e.br.currency,e.env.eXcell_BRcurrency.prototype=new eXcell,e.env.eXcell_BRphone=e.br.phone,e.env.eXcell_BRphone.prototype=new eXcell,e.env.eXcell_cep=e.br.cep,e.env.eXcell_cep.prototype=new eXcell,e.env.eXcell_cpf=e.br.cpf,e.env.eXcell_cpf.prototype=new eXcell,e.env.eXcell_cnpj=e.br.cnpj,e.env.eXcell_cnpj.prototype=new eXcell,e.env.eXcell_integer=e.numbers.integer,e.env.eXcell_integer.prototype=new eXcell,e.env.eXcell_time=e.numbers.time,e.env.eXcell_time.prototype=new eXcell},numbers:{integer:function(e){e&&(this.cell=e,this.grid=this.cell.parentNode.grid),this.setValue=function(e){e=e||0,this.setCValue(parseInt(e))},this.getValue=function(){return this.cell.innerHTML},this.edit=function(){this.input_id="eXcell_integer."+window.dhx4.newId(),this.val=this.getValue(),this.cell.innerHTML="<input maxlength='10' type='text' id='"+this.input_id+"' style='width:100%;'>",document.getElementById(this.input_id).onkeydown=function(e){$dhx.ui.form.input.mask.integer(this)},this.cell.firstChild.value=this.val,this.cell.childNodes[0].onclick=function(e){(e||event).cancelBubble=!0}},this.detach=function(){return this.setValue(this.cell.childNodes[0].value),this.val!=this.getValue()}},time:function(e){e&&(this.cell=e,this.grid=this.cell.parentNode.grid),this.setValue=function(e){e=e||"00:00:00",2==e.toString().split(" ").length&&(e=e.toString().split(" ")[1]),this.setCValue("<span>"+e+"</span><span> h</span>",e)},this.getValue=function(){return this.cell.childNodes[0].innerHTML},this.edit=function(){this.input_id="eXcell_time."+window.dhx4.newId(),this.val=this.getValue(),this.cell.innerHTML="<input maxlength='8' type='text' id='"+this.input_id+"' style='width:100%;'>",document.getElementById(this.input_id).onkeydown=function(e){$dhx.ui.form.input.mask.time(this,e)},this.cell.firstChild.value=this.val,this.cell.childNodes[0].onclick=function(e){(e||event).cancelBubble=!0}},this.detach=function(){return this.setValue(this.cell.childNodes[0].value),this.val!=this.getValue()}}},br:{currency:function(e){e&&(this.cell=e,this.grid=this.cell.parentNode.grid),this.setValue=function(e){if(e=e||0,2==e.toString().split(",").length&&1==e.toString().split(".").length)e=e.toString().replace(/\./g,""),e=e.toString().replace(/,/g,".");else if(2==e.toString().split(",").length&&2==e.toString().split(".").length){var t=e.indexOf(","),i=e.indexOf(".");i<t&&(e=e.toString().replace(/\./g,""),e=e.toString().replace(/,/g,"."))}else 2==e.toString().split(",").length&&e.toString().split(".").length>2?(e=e.toString().replace(/\./g,""),e=e.toString().replace(/,/g,".")):e=e.toString().replace(/,/g,"");this.setCValue("<span>R$ </span><span>"+Number(parseFloat(+e)).formatMoney(2,"",".",",")+"</span>",e)},this.getValue=function(){var e=this.cell.childNodes[1].innerHTML;return e=e.toString().replace(/\./g,""),e=e.toString().replace(/,/g,".")},this.edit=function(){this.input_id="eXcell_BRcurrency."+window.dhx4.newId(),this.val=this.getValue(),this.cell.innerHTML="<input maxlength='34' type='text' id='"+this.input_id+"' style='width:100%;'>",$dhx.ui.form.input.mask.currency(document.getElementById(this.input_id),{precision:2,separator:",",delimiter:".",unit:"",suffixUnit:"",zeroCents:!1}),this.val=this.val||0,this.val=this.val.replace(/./g,""),this.val=this.val.replace(/,/g,"."),this.cell.firstChild.value=this.val,this.cell.childNodes[0].onclick=function(e){(e||event).cancelBubble=!0}},this.detach=function(){return this.setValue(this.cell.childNodes[0].value),this.val!=this.getValue()}},phone:function(e){e&&(this.cell=e,this.grid=this.cell.parentNode.grid),this.setValue=function(e){e=e||"",this.setCValue("<span>"+e+"</span>",e)},this.getValue=function(){return this.cell.childNodes[0].innerHTML},this.edit=function(){this.input_id="eXcell_BRphone."+window.dhx4.newId(),this.val=this.getValue(),this.cell.innerHTML="<input maxlength='16' type='text' id='"+this.input_id+"' style='width:100%;'>",document.getElementById(this.input_id).onkeydown=function(e){$dhx.ui.form.input.mask.br_phone(this,e)},this.cell.firstChild.value=this.val,this.cell.childNodes[0].onclick=function(e){(e||event).cancelBubble=!0}},this.detach=function(){return this.setValue(this.cell.childNodes[0].value),this.val!=this.getValue()}},cpf:function(e){e&&(this.cell=e,this.grid=this.cell.parentNode.grid),this.setValue=function(e){e=e||"",this.setCValue("<span>"+e+"</span>",e)},this.getValue=function(){return this.cell.childNodes[0].innerHTML},this.edit=function(){this.input_id="eXcell_cpf."+window.dhx4.newId(),this.val=this.getValue(),this.cell.innerHTML="<input maxlength='14' type='text' id='"+this.input_id+"' style='width:100%;'>",document.getElementById(this.input_id).onkeydown=function(e){$dhx.ui.form.input.mask.cpf(this,e)},this.cell.firstChild.value=this.val,this.cell.childNodes[0].onclick=function(e){(e||event).cancelBubble=!0}},this.detach=function(){return this.setValue(this.cell.childNodes[0].value),this.val!=this.getValue()}},cnpj:function(e){e&&(this.cell=e,this.grid=this.cell.parentNode.grid),this.setValue=function(e){e=e||"",this.setCValue("<span>"+e+"</span>",e)},this.getValue=function(){return this.cell.childNodes[0].innerHTML},this.edit=function(){this.input_id="eXcell_cnpj."+window.dhx4.newId(),this.val=this.getValue(),this.cell.innerHTML="<input maxlength='18' type='text' id='"+this.input_id+"' style='width:100%;'>",document.getElementById(this.input_id).onkeydown=function(e){$dhx.ui.form.input.mask.cnpj(this,e)},this.cell.firstChild.value=this.val,this.cell.childNodes[0].onclick=function(e){(e||event).cancelBubble=!0}},this.detach=function(){return this.setValue(this.cell.childNodes[0].value),this.val!=this.getValue()}},cep:function(e){e&&(this.cell=e,this.grid=this.cell.parentNode.grid),this.setValue=function(e){e=e||"",this.setCValue("<span>"+e+"</span>",e)},this.getValue=function(){return this.cell.childNodes[0].innerHTML},this.edit=function(){this.input_id="eXcell_cep."+window.dhx4.newId(),this.val=this.getValue(),this.cell.innerHTML="<input maxlength='9' type='text' id='"+this.input_id+"' style='width:100%;'>",document.getElementById(this.input_id).onkeydown=function(e){$dhx.ui.form.input.mask.cep(this,e)},this.cell.firstChild.value=this.val,this.cell.childNodes[0].onclick=function(e){(e||event).cancelBubble=!0}},this.detach=function(){return this.setValue(this.cell.childNodes[0].value),this.val!=this.getValue()}}},us:{currency:function(e){e&&(this.cell=e,this.grid=this.cell.parentNode.grid),this.setValue=function(e){e=e||0,this.setCValue("<span>USD </span><span>"+Number(parseFloat(e.toString().replace(/,/g,""))).formatMoney(2,"",",",".")+"</span>",e)},this.getValue=function(){var e=this.cell.childNodes[1].innerHTML;return e=e.toString().replace(/,/g,"")},this.edit=function(){this.input_id="eXcell_UScurrency."+window.dhx4.newId(),this.val=this.getValue(),this.cell.innerHTML="<input maxlength='34' type='text' id='"+this.input_id+"' style='width:100%;'>",$dhx.ui.form.input.mask.currency(document.getElementById(this.input_id),{precision:2,separator:".",delimiter:",",unit:"",suffixUnit:"",zeroCents:!1}),this.cell.firstChild.value=this.val,this.cell.childNodes[0].onclick=function(e){(e||event).cancelBubble=!0}},this.detach=function(){return this.setValue(this.cell.childNodes[0].value),this.val!=this.getValue()}},phone:function(){cell&&(this.cell=cell,this.grid=this.cell.parentNode.grid),this.setValue=function(e){e=e||"",this.setCValue("<span>"+e+"</span>",e)},this.getValue=function(){return this.cell.childNodes[0].innerHTML},this.edit=function(){this.input_id="eXcell_USphone."+window.dhx4.newId(),this.val=this.getValue(),this.cell.innerHTML="<input maxlength='13' type='text' id='"+this.input_id+"' style='width:100%;'>",document.getElementById(this.input_id).onkeydown=function(e){$dhx.ui.form.input.mask.us_phone(this,e)},this.cell.firstChild.value=this.val,this.cell.childNodes[0].onclick=function(e){(e||event).cancelBubble=!0}},this.detach=function(){return this.setValue(this.cell.childNodes[0].value),this.val!=this.getValue()}},ssn:function(e){e&&(this.cell=e,this.grid=this.cell.parentNode.grid),this.setValue=function(e){e=e||"",this.setCValue("<span>"+e+"</span>",e)},this.getValue=function(){return this.cell.childNodes[0].innerHTML},this.edit=function(){this.input_id="eXcell_ssn."+window.dhx4.newId(),this.val=this.getValue(),this.cell.innerHTML="<input maxlength='11' type='text' id='"+this.input_id+"' style='width:100%;'>",document.getElementById(this.input_id).onkeydown=function(e){$dhx.ui.form.input.mask.ssn(this,e)},this.cell.firstChild.value=this.val,this.cell.childNodes[0].onclick=function(e){(e||event).cancelBubble=!0}},this.detach=function(){return this.setValue(this.cell.childNodes[0].value),this.val!=this.getValue()}}}};