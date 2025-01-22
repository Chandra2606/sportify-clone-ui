export function ButtonWhite({ children }) {
  return (
    <button className="bg-white text-black p-2 rounded-full font-spotify text-sm">
      {children}
    </button>
  );
}
export function ButtonBlack({ children }) {
  return (
    <button className="bg-black text-white p-2 rounded-full font-spotify text-sm flex items-center">
      {children}
    </button>
  );
}
