/**/

require.config({
    paths : {
        //create alias to plugins (not needed if plugins are on the baseUrl)
        text : 'lib/requirejs-plugins/lib/text',
        async: 'lib/requirejs-plugins/src/async',
        depend: 'lib/requirejs-plugins/src/depend',
        font: 'lib/requirejs-plugins/src/font',
        goog: 'lib/requirejs-plugins/src/goog',
        image: 'lib/requirejs-plugins/src/image',
        json: 'lib/requirejs-plugins/src/json',
        noext: 'lib/requirejs-plugins/src/noext',
        mdown: 'lib/requirejs-plugins/src/mdown',
        propertyParser : 'lib/requirejs-plugins/src/propertyParser'//,
        //markdownConverter : 'lib/Markdown.Converter'
    }
});

define([
		'json!data/list.json'
	,	'lib/d3/d3.v2'
	], function (reports, d3) {
		//console.log(reports);
		//debugger;
});