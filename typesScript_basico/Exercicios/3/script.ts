function toNumber(value: string | number) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return value;
  } else {
    throw new Error("Value deve ser um número ou uma string");
  }
}

console.log(toNumber(1));
