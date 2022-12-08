export interface Page {
  title: string;
  content: string;
}

export interface PagesLists {
  [id: string]: PageApi;
}