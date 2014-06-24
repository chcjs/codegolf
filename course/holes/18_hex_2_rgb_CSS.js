var input = require('../lib/console').getConsole(process),
	COLOR_NAMES = {
        aqua: '#00ffff',
        black: '#000000',
        blue: '#0000ff',
        fuchsia: '#ff00ff',
        gray: '#808080',
        green: '#008000',
        lime: '#00ff00',
        maroon: '#800000',
        navy: '#000080',
        olive: '#808000',
        purple: '#800080',
        red: '#ff0000',
        silver: '#c0c0c0',
        teal: '#008080',
        white: '#ffffff',
        yellow: '#ffff00'
	};

function hex2rgbCSS( colour ) {
    if ( COLOR_NAMES[colour.toLowerCase()]) {
    	colour = COLOR_NAMES[colour.toLowerCase()];
    }

    var r,
    	g,
    	b;

    if ( colour.charAt(0) === '#' ) {
		colour = colour.substring(1);
    }

    if ( colour.length === 6 ) {
    	r = colour.charAt(0) + colour.charAt(1);
    	g = colour.charAt(2) + colour.charAt(3);
    	b = colour.charAt(4) + colour.charAt(5);
    }
    else if ( colour.length === 3 ) {
    	r = colour.charAt(0) + colour.charAt(0);
    	g = colour.charAt(1) + colour.charAt(1);
    	b = colour.charAt(2) + colour.charAt(2);
    }
    else {
        return false;
    }

    r = parseInt(r,16);
    g = parseInt(g,16);
    b = parseInt(b,16);

    return "rgb(" + r + ',' + g + ',' + b + ")";
}


input.on('get',function(data) {
	console.log(hex2rgbCSS(data));
});