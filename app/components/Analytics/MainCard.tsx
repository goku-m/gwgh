import PieChart from "./PieChart";

export type Stats = {
  totalFarmers: number;
  totalPrefinance: number;
  totalKgBrought: number;
  totalAmount: number;
  recoveryRate: number;
};

function formatNumber(value?: number, fractionDigits = 0) {
  return Number(value ?? 0).toLocaleString("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}

function LabelValue({
  label,
  value,
  color = "text-lime-900",
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="flex w-full items-center justify-between gap-4 border-b border-gray-100 py-3 last:border-0">
      <span className="text-sm font-medium text-gray-600">{label}</span>
      <span className={`text-right text-sm font-bold ${color}`}>{value}</span>
    </div>
  );
}

export default function MainCard({
  value,
  title,
}: {
  value: Stats | null;
  title?: string;
}) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      {title && <h2 className="mb-5 text-xl font-bold text-lime-950">{title}</h2>}
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div>
          <LabelValue
            label="Total Pre-Finance (GH₵)"
            value={formatNumber(value?.totalPrefinance, 2)}
            color="text-orange-600"
          />
          <LabelValue label="Total Nuts (Kg)" value={formatNumber(value?.totalKgBrought)} />
          <LabelValue
            label="Total Value (GH₵)"
            value={formatNumber(value?.totalAmount, 2)}
            color="text-green-600"
          />
          <LabelValue label="Total Farmers" value={formatNumber(value?.totalFarmers)} />
          <LabelValue
            label="Recovery Rate"
            value={`${formatNumber(value?.recoveryRate, 2)}%`}
          />
        </div>
        <div className="mx-auto w-full max-w-sm">
          <PieChart
            labels={["Pre-Finance", "Recovered"]}
            values={[value?.totalPrefinance ?? 0, value?.totalAmount ?? 0]}
          />
        </div>
      </div>
    </section>
  );
}
