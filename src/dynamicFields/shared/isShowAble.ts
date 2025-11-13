export function compareValues(operation: string, a: any, b: any): boolean {
  switch (operation) {
    case "==":
      return a == b;
    case "===":
      return a === b;
    case "!=":
      return a != b;
    case "!==":
      return a !== b;
    case ">":
      return a > b;
    case "<":
      return a < b;
    case ">=":
      return a >= b;
    case "<=":
      return a <= b;
    case "includes":
      return typeof a === "string" && a.includes(b);
    case "in":
      return Array.isArray(b) && b.includes(a);
    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}
