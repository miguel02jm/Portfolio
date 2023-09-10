const fetchProjects = async () => {
  const response = await fetch("http://localhost:5173/projects");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default fetchProjects;
