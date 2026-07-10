import Link from "next/link"

interface FilterOption {
  label: string
  href: string
}

interface ProductSortControlsProps {
  sortBy: string
  onSortChange: (value: string) => void
  productsCount: number
  categoryLabel: string
  accentColor: string
  filterOptions: FilterOption[]
}

export default function ProductSortControls({
  sortBy,
  onSortChange,
  productsCount,
  categoryLabel,
  accentColor,
  filterOptions,
}: ProductSortControlsProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <p className={`text-sm font-semibold uppercase tracking-[0.24em] text-${accentColor}-700`}>
          {categoryLabel}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">
          Navegue pelos melhores modelos
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          {productsCount} opções disponíveis com estilo, conforto e durabilidade.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="inline-flex rounded-full bg-slate-100 p-2 text-sm text-slate-600 shadow-inner">
          <span className="font-semibold text-slate-900 p-2">Ordenar por:</span>
          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className={`ml-3 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-${accentColor}-500 focus:ring-2 focus:ring-${accentColor}-100`}
          >
            <option value="featured">Mais relevantes</option>
            <option value="price-asc">Preço: menor primeiro</option>
            <option value="price-desc">Preço: maior primeiro</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-${accentColor}-300 hover:bg-${accentColor}-50`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
