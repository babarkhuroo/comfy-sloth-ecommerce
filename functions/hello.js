// domain/.netlify/functions/hello

const items = [
  { id: 1, name: 'hello' },
  { id: 2, name: 'world' },
]

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  }
}
