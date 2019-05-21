module.exports.handler = async (event) => {
    console.log(JSON.stringify(event, 2));
    return "Echoing your message: " + event.echo;
};