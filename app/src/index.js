module.exports = ({github, context}) => {
    return JSON.stringify(context.payload, undefined, 2);
}