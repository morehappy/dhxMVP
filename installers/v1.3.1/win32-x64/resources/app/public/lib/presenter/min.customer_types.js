$dhx.ui.mvp.presenters.declare({customer_types:function(){"strict";var e="customer_types",o="customer_types",t={start:function(){$dhx.debug.log(e+":PRESENTER: start from presenter defined by user")},destroy:function(){var o=this;o.view;$dhx.debug.log(e+":PRESENTER: destroy from presenter defined by user")},subscriber:function(t,r){var i=$dhx.ui.mvp.presenters.get(e),n=i.view;if(console.log(e+"Child Presenter Received Message: ",r),r.collection==o)if("create"==r.method){var s=[];n._settings.grid.id.forEach(function(e){s.push(r.model[e])}),console.log(r),n.grid.addRow(r.model.id||r.model._id,s,0)}else if("update"==r.method){if(n._settings.grid.id.forEach(function(e,o){n.grid.cells(r.model.id,n.grid.getColIndexById(e)).setValue(r.model[e])}),n.form_item){setTimeout(function(){i.show_item()},300)}}else"destroy"==r.method&&n.grid.deleteRow(r.model.id);else"providers"==r.collection&&("create"==r.method||"update"==r.method||"destroy"==r.method)},toolbarOnClickHandler:function(o){var t=$dhx.ui.mvp.presenters.get(e);view=t.view,"destroy"!=o?t.mount_form_input_ui(o):"destroy"==o&&(this.disableItem("destroy"),t.delete_item({onSuccess:function(){t.destroy_item()},onFail:function(){view.form.unlock()}}))},form_process:function(){var t,r=$dhx.ui.mvp.presenters.get(e),i=r.view,n=i.form.getFormData();if(i.form.check()){i.form.lock(),t={};for(var s in n)t[s]=n[s];"update"==i.form.action&&(t.id=i.grid.getSelectedRowId()),console.log(i.form.action),r.model.schema.io[o][i.form.action]({record:t,onSuccess:function(){i.form.isItemChecked("close_on_save")?i.window.close():(i.form.reset(),i.form.unlock())},onFail:function(){i.form.unlock()}})}},formOnButtonClickHandler:function(o){"save"==o?$dhx.ui.mvp.presenters.get(e).form_process():"reset"==o&&view.form.reset()},formOnEnterHandler:function(){$dhx.ui.mvp.presenters.get(e).form_process()},mount_form_input_ui:function(t){var r=$dhx.ui.mvp.presenters.get(e),i=r.view,n=i._window();i.window.setText(("create"==t?"Add new":"Edit")+" Customer Type"),i._form(n,t),"update"==t?(i.form.lock(),r.model.schema.io[o].read({record:{id:i.grid.getSelectedRowId()},onSuccess:function(e){var o=e.toJSON();delete o.id,delete o._id,delete o.__v,i.form.setFormData(o),i.form.unlock(),i.form.setFocusOnFirstActive()},onFail:function(){}})):(i.form.unlock(),i.form.setFocusOnFirstActive())},delete_item:function(t){var r=$dhx.ui.mvp.presenters.get(e);view=r.view,r.model.schema.io[o].destroy({record:{id:view.grid.getSelectedRowId()},onSuccess:function(e){t.onSuccess&&t.onSuccess()},onFail:function(){t.onFail&&t.onFail()}})},gridOnRowSelectHandler:function(o){var t=$dhx.ui.mvp.presenters.get(e);view=t.view,t.show_item()},toolbar_itemOnClickHandler:function(o){var t=$dhx.ui.mvp.presenters.get(e);t.view;"close"==o&&t.destroy_item()},show_item:function(){var e=this,t=e.view;t.layout.cells("b").progressOn(),e.model.schema.io[o].read({record:{id:t.grid.getSelectedRowId()},onSuccess:function(e){$dhx.ui.mvp.ui.isMobile?(t.layout.cells("a").collapse(),t.layout.cells("b").expand()):t.layout.cells("b").expand(),t._toolbar_item(),t._form_item(e),t.toolbar.enableItem("update"),t.toolbar.enableItem("destroy"),t.layout.cells("b").progressOff()},onFail:function(){}})},destroy_item:function(){var e=this,o=e.view;o.layout.cells("b").collapse(),o.form_item&&(o.form_item.unload(),o.form_item=null)},fill_grid:function(e){var t=this,r=t.view;t.model.data[o]().fetch({sort:{index:"type",order:1},success:function(o,t,i){o.models.forEach(function(e){var o=[];r._settings.grid.id.forEach(function(t){o.push($dhx.strip_tags(e.get(t)))}),r.grid.addRow(e.get("id"),o)}),r.grid.adjustColumnSize(r.grid.getColIndexById("type")),e&&e()},error:function(e,o,t){}})}};return t}()});