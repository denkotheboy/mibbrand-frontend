export default function (phone: string): string {
  if (phone.length < 17) {
    return "Телефон не может быть таким коротким";
  }
  return "";
}
