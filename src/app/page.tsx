import TodoCard from "@/components/todo-card";

const mockTodos = [
	{
		id: "001",
		title: "Q2 Project Proposal",
		description:
			"Draft the initial scope and budget for the upcoming marketing campaign.",
		priority: "High",
		due_date: "2026-04-15",
		status_indicator: "In Progress",
		tags: ["work", "finance"],
	},
	{
		id: "002",
		title: "Quarterly HVAC Service",
		description:
			"Schedule a technician to replace filters and check the thermostat.",
		priority: "Medium",
		due_date: "2026-03-20",
		status_indicator: "Pending",
		tags: ["home", "maintenance"],
	},
	{
		id: "003",
		title: "Update Portfolio",
		description:
			"Upload the three newest case studies to the personal website.",
		priority: "Low",
		due_date: "2026-05-01",
		status_indicator: "Completed",
		tags: ["creative", "career"],
	},
];

const HomePage = () => {
	return (
		<main className="mx-auto w-full container p-4">
			<section data-testid="test-todo-card">
				<ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{mockTodos.map((todo) => (
						<TodoCard key={todo.id} todo={todo} />
					))}
				</ul>
			</section>
		</main>
	);
};

export default HomePage;
