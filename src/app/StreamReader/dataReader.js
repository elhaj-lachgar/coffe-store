


// handler data of stream


export default async function getObjectFromRequestBodyStream(target) {
    const input = await target.getReader().read();
    const decoder = new TextDecoder();
    const string = decoder.decode(input.value);
    return JSON.parse(string);
  }