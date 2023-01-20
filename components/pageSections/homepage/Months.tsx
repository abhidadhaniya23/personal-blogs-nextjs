const Months = () => {
  const months = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];
  return (
    <>
      <ul className="px-2 flex flex-row justify-between gap-1 overflow-auto hide-scrollbar">
        {months.map((month) => (
          <li
            key={month.id}
            className="cursor-pointer text-white/70 hover:text-white hover:bg-white/10 px-2 text-sm rounded-md py-1.5"
          >
            {month.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Months;
