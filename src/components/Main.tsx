export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 items-center bg-blue-100 p-4 text-center">
      {children}
    </main>
  );
}
