/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Demo1.Application',

    name: 'Demo1',

    requires: [
        // This will automatically load all classes in the Demo1 namespace
        // so that application classes do not need to require each other.
        'Demo1.*'
    ],
   

    // The name of the initial view to create.
    mainView: 'Demo1.view.main.Main'
});
