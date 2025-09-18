function add(input) {

    if (input === "") return 0;

    // split by comma and convert each piece to number
    const parts = input.split(",");
    return parts.reduce((sum, n) => sum + Number(n), 0);

}
module.exports = { add };