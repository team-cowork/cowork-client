import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/example')({
  component: ChatExamplePage,
});

function ChatExamplePage() {
  return (
    <div className="p-2">
      <h3>Chat Example Page</h3>
    </div>
  );
}
