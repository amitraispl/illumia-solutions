import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Illumia Solutions",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[9000] bg-stone-50 overflow-auto">
      {children}
    </div>
  );
}
