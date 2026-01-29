export function toWaMeNumber(value: string) {
  return value.replace(/\D/g, "");
}

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
