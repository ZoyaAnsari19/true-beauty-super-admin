import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClientsTable } from "@/components/tables/ClientsTable";

const clientStats = [
  { label: "Total Clients", value: "142" },
  { label: "Active Clients", value: "118" },
  { label: "Inactive Clients", value: "24" },
  { label: "Expiring Subscriptions", value: "9" },
];

export default function ClientManagementPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <main className="beauty-scroll flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-[1400px] p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
                Client Management
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Monitor all businesses running on the True Beauty platform.
              </p>
            </div>
            <Button size="sm">Add New Client</Button>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {clientStats.map((stat) => (
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
                  <p className="text-xl font-semibold text-gray-900">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="rounded-xl border border-gray-100 bg-white shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between gap-2">
              <div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  Clients
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  All businesses currently onboarded on True Beauty.
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Export list
              </Button>
            </CardHeader>
            <CardContent>
              <ClientsTable />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

