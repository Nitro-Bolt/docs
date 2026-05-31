module.exports = {
    sidebar: [
        'intro',
        {
            type: 'category',
            label: 'Website',
            collapsed: false,
            items: [
                'website/embedding',
                'website/javascript',
                'website/url-parameters'
            ]
        },
        {
            type: 'category',
            label: 'Extension APIs',
            collapsed: false,
            items: [
                'extensions/sandbox',
                'extensions/duplicate-on-drag',
                'extensions/switches'
            ]
        },
        {
            type: 'category',
            label: 'Custom Addons',
            collapsed: false,
            items: [
                'addons/introduction',
                'addons/getting-started',
                'addons/assorted-apis'
            ]
        }
    ]
};