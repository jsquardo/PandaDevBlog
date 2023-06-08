export function Container({ children }) {
  return (
    <div className="bg-ctp-base min-h-screen">
      <div className="max-w-2xl mx-auto py-10 px-6">{children}</div>
    </div>
  );
}
