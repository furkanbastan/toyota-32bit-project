export async function delay(ms: number = 1500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
