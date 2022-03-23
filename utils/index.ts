export function toBase64(files: FileList) {
  const fileReaderPromise = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };
  return Promise.all(Array.from(files).map((file) => fileReaderPromise(file)));
}
