interface IToolbarItemService {
  key: string;
  title: string;
}

export interface IAppToolbarItem {
  path: string;
  title: string;
  services: IToolbarItemService[] | [];
}
