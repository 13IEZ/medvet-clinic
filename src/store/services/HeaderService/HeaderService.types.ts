interface IServiceHeader {
  key: string;
  title: string;
}

export interface IHeaders {
  id: string;
  title: string;
  key: string;
  services?: IServiceHeader[];
}
