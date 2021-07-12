// Interface details here: https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion
// deno-lint-ignore-file

export interface GithubDiscussions {
  readonly action: GithubDiscussionsActions;
  readonly discussion: {
    readonly id: string;
    readonly node_id: string;
    readonly repository_url: string;
    readonly html_url: string; // link to discussion
    readonly title: string; // link to discussion
    readonly category: GithubDiscussionsCategory;
  };
}

type GithubDiscussionsActions =
  | "created"
  | "edited"
  | "deleted"
  | "pinned"
  | "unpinned"
  | "locked"
  | "unlocked"
  | "transferred"
  | "category_changed"
  | "answered"
  | "unanswered";

interface GithubDiscussionsCategory {
  readonly id: number;
  readonly repository_id: number;
  readonly emoji: string;
  readonly name: string;
  readonly description: string;
  readonly created_at: string;
  readonly updated_at: string;
  readonly slug: string;
  readonly is_answerable: boolean;
}

interface GithubUser {
  readonly id: number;
  readonly login: string;
  readonly html_url: string;
  readonly avatar_url: string;
}
