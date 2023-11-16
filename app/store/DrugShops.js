Ext.define('Demo1.store.DrugShops', {
    extend: 'Ext.data.Store',
    model: 'Demo1.model.DrugShopModel',
    alias: 'store.drugshops',

    
    proxy: {
        type: 'ajax',
        url: "http://127.0.0.1:8000/api/drugs/",
        reader: {
            type: 'json',
            rootProperty: 'drugs'
        }
    },
    autoLoad: true,

});
