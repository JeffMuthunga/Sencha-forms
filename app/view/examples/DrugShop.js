Ext.define('Demo1.view.examples.DrugShop', {
    extend: 'Ext.grid.Panel',
    xtype: 'drugshop',
    controller: 'main', 



    tbar: [
        {
            xtype: 'button',
            text: '+ Add Data',
            handler: function() {
                var form = Ext.create('Demo1.view.examples.AddDataForm'); // Create the form instance
                form.down('button[reference=addButton]').show(); // Hide "Add" button
                form.down('button[reference=updateButton]').hide(); 
                form.show();
            },
          
        }
    ],

    requires: [
            "Demo1.store.DrugShops",
            "Demo1.view.examples.AddDataForm"
        ],

    store: {
        type: 'drugshops',
        pageSize: 20,
      
    },

    
    title: "Drug Shops Application",
   

    columns: [
        { text: 'index', dataIndex: 'id', flex: 1},
        { text: 'Reference No', dataIndex: 'referenceNo', flex: 1 },
        { text: 'Premises Name', dataIndex: 'premisesName', flex: 1 },
        { text: 'Physical Address', dataIndex: 'physicalAddress', flex: 1 },
        { text: 'Region Name', dataIndex: 'regionName', flex: 1 },
        { text: 'Date Added', dataIndex: 'dateAdded', flex: 1 },
        { text: 'Submission Date', dataIndex: 'submissionDate', flex: 1 },
        {
            text: 'Options',
            xtype: 'widgetcolumn',
            widget: {
                textAlign: 'left',
                xtype: 'splitbutton',
                iconCls: 'fa fa-bars',
                menu: {
                    xtype: 'menu',
                    items: [
                        {
                            text: 'Update',
                            iconCls: 'fa fa-wrench',
                            tooltip: 'Update',
                            handler: function() {
                                var selectedId = this.up('gridpanel').selectedId;
                                var form = Ext.create('Demo1.view.examples.AddDataForm')
                                form.config.updateId = selectedId;
                                
                                console.log(selectedId)
                                Ext.Ajax.request({
                                    url: `http://127.0.0.1:8000/api/drugs/${selectedId}/`,
                                    method: "GET",
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    success: function (response) {
                                        var jsonResponse = Ext.decode(response.responseText);
                                        var returnDataToForm = jsonResponse.drug;
                                        
                                        
                                        
                                        
                                        if (form) {
                                            // Set the form fields with the retrieved data
                                            form.down('form').getForm().setValues(returnDataToForm);
                                            form.down('button[reference=addButton]').hide(); // Hide "Add" button
                                            form.down('button[reference=updateButton]').show(); 
                                            
                                            form.show();
                                        }
                                    },
                                    failure: function (response) {
                                        // Handle the failure, e.g., show an error message
                                        Ext.Msg.alert('Error', 'Failed to retrieve data.');
                                    }
                                });
                               
                            }

                            
                                                                          
                        },
                        {
                            text: 'Delete',
                            iconCls: 'fa fa-trash',
                            tooltip: 'Delete',
                            handler: function() {
                                var selectedId = this.up('gridpanel').selectedId;

                                Ext.Ajax.request({
                                    url: `http://127.0.0.1:8000/api/drugs/${selectedId}/`,
                                    method: "DELETE",
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    success: function (response) {
                                                                          
                                        if (response && response.status === 200) {
                                            Ext.toast('Data Deleted Successfully', 'Success');
                                        } else {
                                            Ext.toast('Failed to delete data. Please try again.', 'Error');
                                        }
                                    },
                                    failure: function (response) {
                                        // Handle the failure, e.g., show an error message
                                        Ext.toast('Delete Action failed.', 'Error');
                                    }
                                });

                            
                            }
                        },
                    
                    ]
                }
            }
        }
    ],
    selectedId: null,

    listeners: {
        itemclick: function(grid, record, item, index, e, eOpts) {
            this.selectedId = record.get('id');             
        }
    },
     
    



});


