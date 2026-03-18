import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlatformUsersTable } from "@/components/tables/PlatformUsersTable";

export default function UserManagementPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <main className="beauty-scroll flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-[1400px] p-4 sm:p-6 lg:p-8">
          <div className="mb-6 space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
              User Management
            </h1>
            <p className="text-sm text-gray-500">
              View users registered across all client websites on the platform.
            </p>
          </div>

          <Card className="rounded-xl border border-gray-100 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">
                Platform Users Overview
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                Users grouped by the client websites where they registered.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PlatformUsersTable />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

