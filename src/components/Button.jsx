export function Btn({ text, event}) {
  return (
    <button className="bg-[#242742] text-white py-4 rounded-lg text-md font-bold transition-colors duration-300 hover:bg-[#ff6257] hover:shadow-2xl" onClick={event}>
      {text}
    </button>
  );
}
