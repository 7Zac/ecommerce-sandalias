export function parsePrice(value: string): number {
  return Number.parseFloat(
    value.replace("R$", "").replace(".", "").replace(",", ".").trim()
  )
}
