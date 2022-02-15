export interface IPageData {
  title: string;
  loaded?: boolean;
  breadcrumbs?: IBreadcrumb[] | null;
  fullFilled?: boolean;
}

export interface IBreadcrumb {
  title: string;
  route?: string;
}
