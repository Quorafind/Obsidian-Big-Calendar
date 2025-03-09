interface TDuration {
  from: number;
  to: number;
}

interface Query {
  tag: string;
  duration: TDuration | null;
  type: EventSpecType | '';
  text: string;
  filter: string;
}

type AppRouter = '/' | '/explore' | '/manage' | '/event' | '/setting';

interface AppLocation {
  pathname: AppRouter;
  hash: string;
  query: Query;
}
