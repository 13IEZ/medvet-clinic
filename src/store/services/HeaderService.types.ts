interface IServiceHeader {
  key: string;
  title: string;
}

export interface HeaderServiceTypes {
  id: string;
  title: string;
  key: string;
  services?: IServiceHeader[];
}
