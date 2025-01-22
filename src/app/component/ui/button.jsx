export function ButtonWhite({ children }) {
  return (
    <button className="bg-white text-black p-2 rounded-full font-spotify text-sm hover:scale-105 transition-all duration-300 ease-in-out">
      {children}
    </button>
  );
}
export function ButtonBlack({ children }) {
  return (
    <button className="bg-black text-white p-2 rounded-full font-spotify text-sm flex items-center hover:scale-105 transition-all duration-300 ease-in-out">
      {children}
    </button>
  );
}
