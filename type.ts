export type Question = {
  title: string;
  dscr: string;
  user: string;
  votes: string;
  answers: string;
  time: string;
  link: string;
  tags: string[];
};

export type TheNews = {
  title: string;
  link: string;
  user: string;
  time: string;
  points: string;
  comments: string;
};

export type Post = {
  title: string;
  user: string;
  time: string;
  tags: string[];
  timeline: string;
  comments: string;
  readTime: string;
  reactions: string;
  avatarImage: string;
};
