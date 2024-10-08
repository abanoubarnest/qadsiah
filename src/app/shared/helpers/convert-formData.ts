export function convertToFormData(body: any): FormData {
  let payLoad = new FormData();
  for (let key in body) {
    if (body.hasOwnProperty(key)) {
      payLoad.append(key.trim(), body[key]);
    }
  }
  return payLoad;
}
