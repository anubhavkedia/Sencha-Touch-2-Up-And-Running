var data = [{ 
    title: 'Template',
    url: 'Chapter_Template',
    chapter: '02. Getting Started'
},{ 
    title: 'SDK-Generated app',
    url: 'Chapter_02_Getting_Started/MyApp',
    chapter: '02. Getting Started'
}, { 
    title: 'Forms',
    url: 'Chapter_05_Forms',
    chapter: '05. Forms'
}, { 
    title: 'Universal Application',
    url: 'Chapter_12_Universal_App',
    chapter: '12. Deployment in Devices'
}];

var store = Ext.create('Ext.data.Store', {
    data: data,
    grouper: {
        groupFn: function(record) {
            return record.get('chapter');
        }
    }
});

Ext.application({
    name: 'SenchaTouch2UpAndRunning',
    icon: {
        57: 'img/Icon.png',
        72: 'img/Icon-iPad.png',
        114: 'img/Icon@2x.png',     // Retina iPhone
        144: 'img/Icon-iPad@2x.png' // Retina iPad
    },

    // http://www.sencha.com/forum/showthread.php?199382-phoneStartupScreen-doesn-t-work
    startupImage: {
        '320x460': 'img/Default.png',
        '640x920': 'img/Default@2x.png', // Retina iPhone
        '640x1096': 'img/Default-568@2x.png', // Retina 4-inch iPhone
        '768x1004': 'img/Default-Portrait.png',
        '748x1024': 'img/Default-Landscape.png',
        '1536x2008': 'img/Default-Portrait@2x.png', // Retina iPad, Portrait
        '1496x2048': 'img/Default-Landscape@2x.png' // Retina iPad, Landscape
    },

    launch: function () {
        Ext.Viewport.add({
            xtype: 'list',
            pinHeaders: false,
            fullscreen: true,
            itemTpl: '{title}',
            store: store,
            grouped: true,
            indexBar: {
                letters: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            },
            items: [{
                xtype: 'titlebar',
                docked: 'top',
                title: 'Sencha Touch 2 Book Code'
            }, {
                xtype: 'titlebar',
                docked: 'bottom',
                title: 'by Adrian Kosmaczewski'
            }],
            ui: 'round',
            listeners: {
                itemtap: function(list, index, target, record, e, eOpts) {
                    location.href = record.get('url');
                }
            }
        });
    }
});
