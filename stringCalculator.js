function add(input) {

    if (input === "") return 0;

    // split by comma OR newline
    const parts = input.split(/,|\n/);
    return parts.reduce((sum, n) => sum + Number(n), 0);

}
module.exports = { add };