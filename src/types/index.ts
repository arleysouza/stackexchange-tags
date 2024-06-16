export interface TagContextProps {
  tags: PageProps | null;
  error: string | null;
  getTags: (page: number, fromdate: number, todate: number) => Promise<void>;
  setError: (value: string | null) => void;
}

export interface TagProps {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  name: string;
  count: number;
}

export interface PageProps {
  items: TagProps[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export interface ErrorProps {
  message: string;
}

