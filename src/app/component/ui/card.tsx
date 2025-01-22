export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div className={`bg-[rgb(18,18,18)] rounded-xl p-4 ${className}`}>
      {children}
    </div>
  );
}
