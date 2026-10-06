module.exports = {
    sidebar: [
        'intro',
        'translate',
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
                'extensions/switches',
                'extensions/custom-types',
                'extensions/custom-shapes',
                {
                    type: 'category',
                    label: 'Inputs',
                    collapsed: true,
                    items: [
                        'extensions/inputs/string-inputs',
                        'extensions/inputs/slider-inputs',
                        'extensions/inputs/objects-and-arrays',
                        'extensions/inputs/duplicate-on-drag',
                        'extensions/inputs/extendables',
                        'extensions/inputs/branches'
                    ]
                },
                {
                    type: 'category',
                    label: 'Advanced',
                    collapsed: true,
                    items: [
                        'extensions/advanced/extra-menu-properties',
                        'extensions/advanced/dependent-dropdowns',
                        'extensions/advanced/mutator-dropdowns',
                        'extensions/advanced/dual-blocks',
                        'extensions/advanced/extra-block-types',
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
