export interface INews {
  id?: string;
  author:{
    name: string;
    image: string;
    nickname: string;
    checked: boolean;
  }
  content: {
    description: string;
    image: string;
  };
  reply: number;
  liked: number;
  share: string;
}
