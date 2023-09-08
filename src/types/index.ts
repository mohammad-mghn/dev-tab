export type Question = {
  dscr: string;
  user: string;
  time: string;
  link: string;
  title: string;
  votes: string;
  tags: string[];
  answers: string;
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
  user: string;
  time: string;
  link: string;
  title: string;
  tags: string[];
  comments: string;
  readTime: string;
  reactions: string;
  avatarImage: string;
  thumbnail: string | undefined;
};
