import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: ProfileIndexPage,
});

function ProfileIndexPage() {
  return (
    <div className="p-2">
      <h3>Welcome Profile!</h3>
      <Link to="/example" className="[&.active]:font-bold">
        Example
      </Link>
    </div>
  );
}
