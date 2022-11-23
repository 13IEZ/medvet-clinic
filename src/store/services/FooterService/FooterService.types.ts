interface IFooterList {
  title: string;
  url: string;
}

interface IFooterLinksList {
  title: string;
  key: string;
}

export interface IFooterService {
  list: IFooterList[];
  linksList: IFooterLinksList[];
}
