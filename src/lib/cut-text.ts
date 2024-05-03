export const cutText = (text: string, quantityWords: number) => {
  // Divide el text en palabras individuales
  const palabras = text.split(" ");

  // Recorta el array de palabras al número deseado
  const palabrasRecortadas = palabras.slice(0, quantityWords);

  // Une las palabras recortadas en una cadena y agrega tres puntos suspensivos al final
  return palabrasRecortadas.join(" ") + "...";
};
