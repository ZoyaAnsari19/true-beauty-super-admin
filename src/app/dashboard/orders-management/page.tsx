import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { OrdersTable } from "@/components/tables/OrdersTable";

const orderStats = [
  { label: "Total Orders", value: "12,482" },
  { label: "Completed Orders", value: "10,921" },
  { label: "Pending Orders", value: "724" },
  { label: "Return Requests", value: "118" },
  { label: "Refund Requests", value: "64" },
  { label: "Total Revenue", value: "₹92,43,120" },
];

export default function OrdersManagementPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <main className="beauty-scroll flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-[1400px] p-4 sm:p-6 lg:p-8">
          <div className="mb-6 space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
              Orders Management
            </h1>
            <p className="text-sm text-gray-500">
              Track orders across all client storefronts on the platform.
            </p>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {orderStats.map((stat) => (
              <Card
                key={stat.label}
                className="rounded-xl border border-pink-100/60 bg-white shadow-sm"
              >
                <CardHeader className="pb-2">
                  <CardDescription className="text-xs font-medium uppercase tracking-[0.16em] text-gray-400">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="rounded-xl border border-gray-100 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">
                All Platform Orders
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                Unified view of orders from all client stores.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <OrdersTable />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

