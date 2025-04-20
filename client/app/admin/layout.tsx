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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="py-6">
        {children}
      </main>
    </div>
  );
} 