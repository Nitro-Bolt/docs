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
        }
    ],
    development: [
        'development/home',
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