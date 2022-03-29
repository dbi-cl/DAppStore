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

export const getRandomNum = (Min: number, Max: number) => {
  let Range = Max - Min;
  let Rand = Math.random();
  return Min + Math.round(Rand * Range);
};

export const splitNumber = (digit: number | string) => {
  const reg = /(?!^)(?=(\d{3})+(.\d{2})?$)/g;
  return digit.toString().replace(reg, ",");
};
