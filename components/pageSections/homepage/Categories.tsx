const Category = () => {
  const categories = [
    { id: 1, name: "All", color: "gray" },
    { id: 2, name: "React", color: "cyan" },
    { id: 3, name: "Next", color: "red" },
    { id: 4, name: "Tailwind", color: "yellow" },
    { id: 5, name: "CSS", color: "amber" },
    { id: 6, name: "JavaScript", color: "green" },
    { id: 7, name: "TypeScript", color: "blue" },
    { id: 8, name: "Node", color: "indigo" },
    { id: 9, name: "Express", color: "purple" },
    { id: 10, name: "MongoDB", color: "pink" },
    { id: 11, name: "Mongoose", color: "fuchsia" },
    { id: 12, name: "GraphQL", color: "teal" },
    { id: 13, name: "Apollo", color: "lime" },
    { id: 14, name: "React Native", color: "orange" },
    { id: 15, name: "Flutter", color: "rose" },
    { id: 16, name: "Dart", color: "violet" },
    { id: 17, name: "Firebase", color: "sky" },
    { id: 18, name: "AWS", color: "teal" },
    { id: 20, name: "Docker", color: "cyan" },
    { id: 21, name: "Git", color: "yellow" },
    { id: 22, name: "GitHub", color: "green" },
    { id: 23, name: "Discord", color: "blue" },
    { id: 24, name: "Zoom", color: "indigo" },
    { id: 25, name: "Socket.io", color: "purple" },
  ];
  return (
    <>
      <div className="flex flex-col border-r-[1px] border-solid border-white/10 sticky top-0">
        <ul className="pr-2 py-2">
          {categories.map((category) => (
            <li
              key={category.id}
              className={`cursor-pointer text-${category.color}-500 hover:bg-${category.color}-500/10 px-4 text-base rounded-md py-1.5`}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Category;
