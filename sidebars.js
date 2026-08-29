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
                'website/url-parameters',
                'website/packs'
            ]
        },
        {
            type: 'category',
            label: 'Extension APIs',
            collapsed: false,
            items: [
                'extensions/sandbox',
                'extensions/string-inputs',
                'extensions/duplicate-on-drag',
                'extensions/switches',
                'extensions/branches',
                'extensions/extendables',
                {
                    type: 'category',
                    label: 'Advanced',
                    collapsed: true,
                    items: [
                        'extensions/advanced/extra-menu-properties',
                        'extensions/advanced/dependent-dropdowns',
                        'extensions/advanced/objects-and-arrays',
                        'extensions/advanced/extra-block-types',
                        'extensions/advanced/slider-inputs',
                        'extensions/advanced/block-metadata',
                        'extensions/advanced/extension-storage',
                        'extensions/advanced/compiler'
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
