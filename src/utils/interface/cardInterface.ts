export interface cardInterface {
  urlToImage: string;
  title: string;
  description: string;
  publishedAt: string;
  content?:string;
  url?:string
  cardDetail: React.MouseEventHandler;
}
