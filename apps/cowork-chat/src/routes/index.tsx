import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: ChatIndexPage,
});

function ChatIndexPage() {
  return (
    <div className="p-2">
      <h3>Welcome Chat!</h3>
      <Link to="/example" className="[&.active]:font-bold">
        Example
      </Link>
    </div>
  );
}
