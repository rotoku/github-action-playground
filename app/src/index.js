module.exports = ({github, context}) => {
    return JSON.stringify(github.context.payload, undefined, 2);
}