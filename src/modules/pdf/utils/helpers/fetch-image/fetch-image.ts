export const fetchImage = async (url: string): Promise<{ base64: string; width: number; height: number }> => {
  const response = await fetch(url);
  const blob = await response.blob();
  const base64: string = await new Promise((resolve) => {
    const reader = new FileReader();
    // @ts-ignore
    reader.onloadend = () => resolve(reader?.result?.split(",")[1]);
    reader.readAsDataURL(blob);
  });

  const image = new Image();
  image.src = URL.createObjectURL(blob);

  return new Promise((resolve) => {
    image.onload = () => {
      resolve({ base64, width: image.naturalWidth, height: image.naturalHeight });
    };
  });
};
