import { Button } from "./ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import TimeAgo from "javascript-time-ago";
import "javascript-time-ago/locale/en";

interface TodoProps {
	id: string;
	title: string;
	description: string;
	priority: string;
	due_date: string;
	status_indicator: string;
	tags: string[];
}

const formatedDate = (dateStr: string) => {
	const date = new Date(dateStr);
	return date
		.toLocaleDateString("en-US", {
			month: "short",
			day: "2-digit",
			year: "numeric",
		})
		.replace(",", "");
};

const TodoCard = ({ todo }: { todo: TodoProps }) => {
	const timeAgo = new TimeAgo("en");

	return (
		<li className="list-none">
			<Card className="has-checked:bg-muted/40 has-checked:border-l-muted has-checked:[&_.todo-title]:text-muted-foreground w-full transition-all duration-300 hover:shadow-md has-checked:[&_.todo-desc]:line-through has-checked:[&_.todo-desc]:opacity-50 has-checked:[&_.todo-title]:line-through">
				<article data-testid="test-todo-card" className="flex flex-col">
					<CardHeader className="pb-3">
						<div className="flex items-start justify-between gap-4">
							<div className="space-y-1">
								<CardTitle>
									<h2
										data-testid="test-todo-title"
										className="todo-title text-lg leading-none font-bold"
									>
										{todo.title}
									</h2>
								</CardTitle>
								<CardDescription>
									<p
										data-testid="test-todo-description"
										className="todo-desc text-sm line-clamp-2 text-muted-foreground"
									>
										{todo.description}
									</p>
								</CardDescription>
							</div>
							<CardAction className="flex shrink-0 gap-2">
								<Button
									variant="ghost"
									size="sm"
									data-testid="test-todo-edit-button"
									className="h-8 w-8 p-0 md:w-auto md:px-3"
									aria-label="Edit task"
								>
									<span className="">Edit</span>
									
								</Button>
								<Button
									variant="ghost"
									size="sm"
									data-testid="test-todo-delete-button"
									className="text-destructive hover:text-destructive h-8 w-8 p-0 md:w-auto md:px-3"
									aria-label="Delete task"
								>
									<span className="">Delete</span>
								
								</Button>
							</CardAction>
						</div>
					</CardHeader>

					<CardContent className="space-y-4">
						<div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
							{/* Metadata Section */}
							<div className="space-y-3">
								<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
									<div className="flex items-center gap-1.5">
										<span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
											Priority
										</span>
										<strong
											data-testid="test-todo-priority"
											className="text-xs"
										>
											{todo.priority}
										</strong>
									</div>
									<div className="flex items-center gap-1.5">
										<span className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
											Status
										</span>
										<strong
											data-testid="test-todo-status"
											className="text-xs tracking-tight uppercase"
										>
											{todo.status_indicator}
										</strong>
									</div>{" "}
								</div>

								<div className="text-muted-foreground flex items-center gap-2 text-sm">
									<p
										data-testid="test-todo-due-date"
										className="flex items-center"
									>
										Due {formatedDate(todo.due_date)}
									</p>
									<span aria-hidden="true" className="opacity-40">
										|
									</span>
									<p
										data-testid="test-todo-time-remaining"
										className="text-foreground font-medium"
									>
										<time dateTime={todo.due_date}>
											{timeAgo.format(new Date(todo.due_date))}
										</time>
									</p>
								</div>

								{/* Tags Section */}
								<div data-testid="test-todo-tags">
									<ul className="flex flex-wrap gap-2" role="list">
										{todo.tags.map((tag) => (
											<li
												key={tag}
												data-testid={`test-todo-tag-${tag.toLowerCase()}`}
												className="bg-secondary text-secondary-foreground border-border rounded-md border px-2 py-0.5 text-[11px] font-medium"
											>
												{tag}
											</li>
										))}
									</ul>
								</div>
							</div>

							{/* Toggle Section */}
							<div className="bg-muted/30 has-checked:border-primary/20 flex items-center gap-3 rounded-lg border border-transparent p-2 px-3 transition-colors">
								<input
									type="checkbox"
									id={`todo-${todo.id}`}
									data-testid="test-todo-complete-toggle"
									className="peer border-input bg-background accent-primary focus-visible:ring-primary h-5 w-5 cursor-pointer rounded outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
								/>
								<label
									htmlFor={`todo-${todo.id}`}
									className="peer-checked:text-primary cursor-pointer text-sm font-semibold select-none"
								>
									Completed
								</label>
							</div>
						</div>
					</CardContent>
				</article>
			</Card>
		</li>
	);
};

export default TodoCard;
