module.exports = {
    sidebar: [
        'intro',
        {
            type: 'category',
            label: 'API Reference',
            collapsed: false,
            items: [
                'api/runtime',
                'api/vm'
            ]
        },
        {
            type: 'category',
            label: 'Website',
            collapsed: false,
            items: [
                'website/embedding',
                'website/javascript',
                'website/url-parameters'
            ]
        }
    ],
    development: [
        'development/home',
        {
            type: 'category',
            label: 'Custom Extension APIs',
            collapsed: false,
            items: [
                'development/extensions/duplicate-on-drag',
            ]
        },
        {
            type: 'category',
            label: 'Custom Addons',
            collapsed: false,
            items: [
                'development/addons/introduction',
                'development/addons/getting-started',
                'development/addons/assorted-apis'
            ]
        }
    ]
};