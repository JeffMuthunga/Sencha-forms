Ext.define('Demo1.view.examples.KitchenSink', {
    extend: 
        'Ext.Container',
       
    xtype: 'split-buttons',

    

    
    // listeners: {
    //     itemclick: function(view, record, item, index, e, eOpts) {
    //         var clickedRecordID = record.get('id'); 

    //         var rowIndex = view.getStore().indexOf(record)
    //         var updateMenuItem = this.up('panel').query('splitbutton menuitem[text=Update]')[rowIndex]
            

    //         if (updateMenuItem) {
    //             updateMenuItem.on('click', function() {
    //                 console.log(updateMenuItem)

    //                 function haha (clickedRecordID) {
    //                     var addDataForm = Ext.create('Demo1.view.examples.AddDataForm')
                       
    //                     Ext.Ajax.request({
    //                         url: `http://127.0.0.1:8000/api/drugs/${clickedRecordID}/`,
    //                         method: "GET",
    //                         headers: {
    //                             'Accept': 'application/json',
    //                             'Content-Type': 'application/json'
    //                         },
    //                         success: function (response) {
    //                             var jsonResponse = Ext.decode(response.responseText);
    //                             var returnDataToForm = jsonResponse.drug
    //                             if (addDataForm){
    //                                 addDataForm.down('form').getForm().setValues(returnDataToForm)
    //                                 addDataForm.show()
    //                             }else{
    //                                 Ext.Msg.alert('Error', 'Error Occurred.');
    //                             }
                                
                                
    //                         },
    //                         failure: function (response) {
    //                             // Handle the failure, e.g., show an error message
    //                             Ext.Msg.alert('Error', 'Failed to retrieve data.');
    //                         }
                           
                    
    //                     }
    //                     )
                    
    //                     // Ext.Ajax.request({
    //                     //     url: `http://127.0.0.1:8000/api/drugs/${id}/`,
    //                     //     method: "PATCH",
    //                     //     headers: {
    //                     //         'Accept': 'application/json',
    //                     //         'Content-Type': 'application/json'
    //                     //     },
    //                     //    body: 
                    
    //                     // }
    //                     // )
    //                 }
    //                 haha(clickedRecordID);


    //             });
    //         }
    //     }
    // },
    
    // listeners: {
    //     itemclick: function(view, record, item, index, e, eOpts) {
    //         var clickedRecordID = record.get('id'); 

    //         var rowIndex = view.getStore().indexOf(record)
    //         var updateMenuItem = this.up('panel').query('splitbutton menuitem[text=Update]')[rowIndex]
            

    //         if (updateMenuItem) {
    //             updateMenuItem.on('click', function() {
    //                 console.log(updateMenuItem)

    //                 function haha (clickedRecordID) {
    //                     var addDataForm = Ext.create('Demo1.view.examples.AddDataForm')
                       
    //                     Ext.Ajax.request({
    //                         url: `http://127.0.0.1:8000/api/drugs/${clickedRecordID}/`,
    //                         method: "GET",
    //                         headers: {
    //                             'Accept': 'application/json',
    //                             'Content-Type': 'application/json'
    //                         },
    //                         success: function (response) {
    //                             var jsonResponse = Ext.decode(response.responseText);
    //                             var returnDataToForm = jsonResponse.drug
    //                             if (addDataForm){
    //                                 addDataForm.down('form').getForm().setValues(returnDataToForm)
    //                                 addDataForm.show()
    //                             }else{
    //                                 Ext.Msg.alert('Error', 'Error Occurred.');
    //                             }
                                
                                
    //                         },
    //                         failure: function (response) {
    //                             // Handle the failure, e.g., show an error message
    //                             Ext.Msg.alert('Error', 'Failed to retrieve data.');
    //                         }
                           
                    
    //                     }
    //                     )
                    
    //                     // Ext.Ajax.request({
    //                     //     url: `http://127.0.0.1:8000/api/drugs/${id}/`,
    //                     //     method: "PATCH",
    //                     //     headers: {
    //                     //         'Accept': 'application/json',
    //                     //         'Content-Type': 'application/json'
    //                     //     },
    //                     //    body: 
                    
    //                     // }
    //                     // )
    //                 }
    //                 haha(clickedRecordID);


    //             });
    //         }
    //     }
    // },
    

    items: [{
        xtype: 'splitbutton',
        text: 'Small',
        menu: [{
            text: 'Edit'
        }, {
            text: 'Update'
        }, {
            text: 'Delete'
        }],
        
        
    }]
});