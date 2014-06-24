var input = require('../lib/console').getConsole(process);

input.on('get',function(data) {

console.log(
'     * * *             * * *             * * *\n' +
'  *         *       *         *       *         *\n' +
'*             *   *             *   *             *\n' +
'*             * * *             * * *             *\n' +
'*          *  *   *  *       *  *   *  *          *\n' +
'  *      *  *       *  *   *  *       *  *      *\n' +
'     * * *             * * *             * * *\n' +
'         *             *   *             *\n' +
'           *         *       *         *\n' +
'              * * *             * * *'
);

});