BxrExtra.window.CreateUpdateItem = function(config) {
    config = config || {};
    this.ident = config.ident || 'bxrextra-mecitem'+Ext.id();
    Ext.applyIf(config,{
        id: this.ident
        ,height: 150
        ,width: 475
        ,closeAction: 'close'
        ,url: BxrExtra.config.connectorUrl
        ,action: (config.isUpdate)? 'mgr/item/update' : 'mgr/item/create'
        ,fields: [{
            xtype: 'textfield'
            ,name: 'id'
            ,id: this.ident+'-id'
            ,hidden: true
        },{
            xtype: 'textfield'
            ,fieldLabel: _('name')
            ,name: 'name'
            ,id: this.ident+'-name'
            ,anchor: '100%'
            ,itemCls: 'required'
        },{
            xtype: 'textarea'
            ,fieldLabel: _('description')
            ,name: 'description'
            ,id: this.ident+'-description'
            ,anchor: '100%'
        },{
            xtype: 'textfield'
            ,name: 'position'
            ,id: this.ident+'-position'
            ,hidden: true
        }]
    });
    BxrExtra.window.CreateUpdateItem.superclass.constructor.call(this,config);
};
Ext.extend(BxrExtra.window.CreateUpdateItem,MODx.Window);
Ext.reg('bxrextra-window-item-create-update',BxrExtra.window.CreateUpdateItem);

