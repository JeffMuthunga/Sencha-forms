/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Demo1.Application', {
    extend: 'Ext.app.Application',

    name: 'Demo1',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    // launch: function () {
    //     var addButton = Ext.create('Ext.button.Button', {
    //         text: 'Add Button',

    //     })
    //     var mainView = Ext.componentQuery.query('mainview')[0];
    //     mainView.down('toolbar').add(addButton);
    // }
});
