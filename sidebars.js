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
                'extensions/switches',
                'extensions/branches',
                'extensions/extendables',
                {
                    type: 'category',
                    label: 'Advanced',
                    collapsed: true,
                    items: [
                        'extensions/advanced/objects-and-arrays',
                        'extensions/advanced/extra-block-types',
                        'extensions/advanced/menu-accept-text',
                        'extensions/advanced/block-metadata',
                        'extensions/advanced/extension-metadata',
                        'extensions/advanced/extension-storage'
                    ]
                }
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