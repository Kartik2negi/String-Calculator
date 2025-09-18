function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function add(input) {
    if (input === "") return 0;

    let numbersPart = input;
    let separator = /,|\n/;

    // custom delimiter support
    if (input.startsWith('//')) {
        const [delim, rest] = input.slice(2).split('\n');
        separator = new RegExp(escapeRegExp(delim));
        numbersPart = rest;
    }

    const nums = numbersPart.split(separator).map(n => Number(n.trim()));
    const negatives = nums.filter(n => n < 0);

    if (negatives.length) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return nums.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };