import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music Club Admin',
  description: 'Admin dashboard for managing Music Club content',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">Music Club Admin</h1>
        </div>
      </header>
      <main className="py-6">
        {children}
      </main>
      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
        <p>Music Club Admin Dashboard - For authorized users only</p>
      </footer>
    </div>
  );
} 