import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SubAdminsTable } from "@/components/tables/SubAdminsTable";

export default function SubAdminManagementPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <main className="beauty-scroll flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-[1400px] p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
                Sub Admin Management
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Create and manage internal admins for the True Beauty platform.
              </p>
            </div>
            <Button size="sm">Create Sub Admin</Button>
          </div>

          <Card className="mb-6 rounded-xl border border-gray-100 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-gray-800">
                Quick Create Sub Admin
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                Assign roles and permissions to internal team members.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder form layout */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">Full Name</label>
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-pink-100 focus:ring-2"
                    placeholder="Enter full name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">Email Address</label>
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-pink-100 focus:ring-2"
                    placeholder="admin@truebeauty.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">Phone Number</label>
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-pink-100 focus:ring-2"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">Role / Permissions</label>
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-pink-100 focus:ring-2"
                    placeholder="Platform Manager, Finance, Support..."
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">Department</label>
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-pink-100 focus:ring-2"
                    placeholder="Operations, Sales, Support..."
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-600">Status</label>
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-pink-100 focus:ring-2"
                    placeholder="Active / Inactive"
                  />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-xs font-medium text-gray-600">Password</label>
                  <input
                    type="password"
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none ring-pink-100 focus:ring-2"
                    placeholder="Set temporary password"
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button size="sm">Save Sub Admin</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border border-gray-100 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">
                Internal Admins
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                All sub admins with access to the True Beauty Super Admin panel.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SubAdminsTable />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

