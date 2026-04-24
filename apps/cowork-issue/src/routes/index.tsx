import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: IssueIndexPage,
});

function IssueIndexPage() {
  return (
    <div className="p-2">
      <h3>Welcome Issue!</h3>
      <Link to="/example" className="[&.active]:font-bold">
        Example
      </Link>
    </div>
  );
}
