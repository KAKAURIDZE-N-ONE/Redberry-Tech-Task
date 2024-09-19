export default function (dataUrl, filename) {
  // Split the data URL into metadata and data parts
  const [metadata, data] = dataUrl.split(",");
  // Extract the MIME type from metadata
  const mime = metadata.match(/:(.*?);/)[1];
  // Decode the base64 data
  const byteString = atob(data);
  // Convert byte string to ArrayBuffer
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uintArray = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    uintArray[i] = byteString.charCodeAt(i);
  }
  // Create a Blob from the ArrayBuffer
  const blob = new Blob([uintArray], { type: mime });
  // Create a File from the Blob
  return new File([blob], filename, { type: mime });
}
