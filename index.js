var motivate = require('motivate');

var quote = motivate();
var ascii = [];

ascii.push('       MMM.           .MMM');
ascii.push('       MMMMMMMMMMMMMMMMMMM');
ascii.push('       MMMMMMMMMMMMMMMMMMM');
ascii.push('      MMMMMMMMMMMMMMMMMMMMM');
ascii.push('     MMMMMMMMMMMMMMMMMMMMMMM    {{body}} - {{source}}');
ascii.push('    MMMMMMMMMMMMMMMMMMMMMMMM   __  __________________');
ascii.push('    MMMM::- -:::::::- -::MMMM    |/');
ascii.push('     MM~:~   ~:::::~   ~:~MM');
ascii.push('.. MMMMM::. .:::+:::. .::MMMMM ..');
ascii.push('      .MM::::: ._. :::::MM.');
ascii.push('         MMMM;:::::;MMMM');
ascii.push('  -MM        MMMMMMM');
ascii.push('  ^  M+     MMMMMMMMM');
ascii.push('      MMMMMMM MM MM MM');
ascii.push('           MM MM MM MM');
ascii.push('           MM MM MM MM');
ascii.push('        .~~MM~MM~MM~MM~~.');
ascii.push('     ~~~~MM:~MM~~~MM~:MM~~~~');
ascii.push('    ~~~~~~==~==~~~==~==~~~~~~');
ascii.push('     ~~~~~~==~==~==~==~~~~~~');
ascii.push('         :~==~==~==~==~~');

ascii[4] = ascii[4].replace('{{body}}', quote.body).replace('{{source}}', quote.source)
console.log(ascii.join('\n'));
