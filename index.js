module.exports.handler = async (event) => {
    console.log(JSON.stringify(event, 2));
    return {
        body: "Echoing your message: " + event.echo
    };
};
