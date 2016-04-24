block('root').replace()(function() {
    return {
        block: 'page',
        title: 'shri-one',
        head: [
            { elem: 'css', url: 'index.min.css' },
            {
                elem: 'css',
                url: 'https://fonts.googleapis.com/css?family=Open+Sans:400,300italic,300,700'
            }
        ],
        scripts: [
            { elem: 'js', url: 'index.min.js' }
        ],
        mods: { theme: 'islands' }
    };
});
