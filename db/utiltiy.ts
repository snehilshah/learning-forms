function toPaise(rupees: number | null | undefined): number | null {
  return rupees ? rupees * 100 : null
}

function toRupees(paise: number | null | undefined): number | null {
  return paise ? paise / 100 : null
}

export { toPaise, toRupees }
