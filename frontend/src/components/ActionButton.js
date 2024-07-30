function ActionButton({ label, onClickFunction }) {
  const isWatchNow = label === "Watch Now" || label === "Watch";

  return (
    <button
      onClick={onClickFunction}
      className={`inline-block px-4 py-2 rounded text-white no-underline transition-colors duration-300 ${
        isWatchNow
          ? "bg-teal-500 hover:bg-teal-600"
          : "bg-gray-800 hover:bg-gray-700"
      } ${isWatchNow ? "mr-2" : ""}`}
    >
      {label}
    </button>
  );
}

export default ActionButton;
