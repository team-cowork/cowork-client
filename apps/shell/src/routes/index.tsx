import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const ProfileApp = lazy(() => import("cowork_profile/App"));
const IssueApp = lazy(() => import("cowork_issue/App"));
const ChatApp = lazy(() => import("cowork_chat/App"));

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      <section className="border rounded p-2">
        <Suspense fallback={<div>Loading Profile...</div>}>
          <ProfileApp />
        </Suspense>
      </section>
      <section className="border rounded p-2">
        <Suspense fallback={<div>Loading Issue...</div>}>
          <IssueApp />
        </Suspense>
      </section>
      <section className="border rounded p-2">
        <Suspense fallback={<div>Loading Chat...</div>}>
          <ChatApp />
        </Suspense>
      </section>
    </div>
  );
}
