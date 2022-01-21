interface IServiceHeader {
  key: string;
  title: string;
}

export interface IHeader {
  id: string;
  title: string;
  key: string;
  services?: IServiceHeader[];
  error?: string;
}
