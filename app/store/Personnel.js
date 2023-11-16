Ext.define('Demo1.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'Demo1.model.Personnel',

    data: { items: [
        { name: 'Jeff Wainaina', email: "jeffmuthunga@gmail.com", phone: "555-111-1111" },
        { name: 'Toto Wolf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
