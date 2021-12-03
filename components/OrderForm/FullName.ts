export default function (fullName: string): string {
  if (fullName.length < 3) {
    return "ФИО неможет быть меньше 3 символов";
  }
  return "";
}
