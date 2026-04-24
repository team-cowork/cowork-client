import { lazy, Suspense } from 'react';

import { createFileRoute } from '@tanstack/react-router';

const ChatApp = lazy(() => import('cowork_chat/App'));

export const Route = createFileRoute('/chat')({
  component: ChatRoute,
});

function ChatRoute() {
  return (
    <Suspense fallback={<div>Loading Chat...</div>}>
      <ChatApp basepath="/chat" />
    </Suspense>
  );
}
