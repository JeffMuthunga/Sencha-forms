

Ext.define('Demo1.view.examples.AddDataForm',{
    extend: 'Ext.window.Window',
    xtype: "adddataform",
    title: "Add new Drug Shop",
    width: 400, 

    requires: [
        "Demo1.store.DrugShops",
    
    ],

    store: {
        type: 'drugshops'
    },
    
    items: [
        {
            xtype: 'form',
            reference: 'addDataForm', 
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Reference No',
                    name: 'referenceNo',
                    allowBlank: false 
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Premises Name',
                    name: 'premisesName',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Physical Address',
                    name: 'physicalAddress',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Region Name',
                    name: 'regionName',
                    allowBlank: false
                },
                {
                    xtype: 'datefield', // Use 'datefield' for date input
                    fieldLabel: 'Date Added',
                    name: 'dateAdded',
                    format: 'Y-m-d', // Adjust the date format as needed
                    allowBlank: false
                },
                {
                    xtype: 'datefield', // Use 'datefield' for date input
                    fieldLabel: 'Submission Date',
                    name: 'submissionDate',
                    format: 'Y-m-d', // Adjust the date format as needed
                    allowBlank: false
                },
            ]
        }
    ],
  
    buttons: [
        {
            text: 'Update',
            handler: 
            function (button) {
                    var id = button.up('adddataform').config.updateId
                    console.log(id)
                    var form = button.up('window').down('form');
                    var drugstore = Ext.getStore('drugshops');
                    var formData = form.getValues()
                    var jsonData = Ext.encode(formData)
                    console.log(formData)
                    console.log(jsonData)

                    Ext.Ajax.request({
                        url: `http://127.0.0.1:8000/api/drugs/${id}/`,
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        params: jsonData,
                        success: function (response) {
                            var jsonResponse = Ext.decode(response.responseText);
                            Ext.Msg.alert('Success', 'Data updated successfully.');
                            form.reset();
                            // Close the form or perform other actions as needed
                            button.up('window').close();
                        },
                        failure: function (response) {
                            Ext.Msg.alert('Error', 'Data could not be updated.');
                        }
                });
            },
            reference: 'updateButton',
            hidden: true,
            scope: this 

        },
        {
            text: 'Add',
            reference: 'addButton',
            hidden: true,
            handler: function(button) {
                var form = button.up('window').down('form');
                
                var drugstore = Ext.getStore('drugshops');

                var formData = form.getValues()
                var jsonData = Ext.encode(formData)
                
                    
                  
                    console.log("formData")
                        Ext.Ajax.request({
                            url: 'http://127.0.0.1:8000/api/drugs',
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            params: jsonData,
                            success: function (response) {
                                var jsonResponse = Ext.decode(response.responseText);
                                Ext.Msg.alert('Success', 'Data added successfully.');
                                form.reset();
                                // Close the form or perform other actions as needed
                                button.up('window').close();
                            },
                            failure: function (response) {
                                Ext.Msg.alert('Error', 'Data could not be added.');
                            }
                        })
                                       
                    
                

            }
        },
        {
            text: 'Cancel Application',
            handler: function() {
                this.up('form').close()
            }

        }
    ],
   

     
    closeAction: 'hide'
}); 