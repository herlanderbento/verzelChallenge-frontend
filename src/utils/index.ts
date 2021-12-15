export function styleHyphenFormat(propertyName: string) {
  return propertyName
    .split("-")
    .join("")
    .replace(/[a-zA-Z]/g, "");
}
