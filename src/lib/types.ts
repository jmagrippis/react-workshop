export interface TodoItem {
  id: string
  title: string
  address: string
}

export enum WidgetType {
  Tasks,
  PendingDeals,
  HotApplicants,
  Letters,
}

export interface Widget {
  id: WidgetType
  title: string
  items: TodoItem[]
  info?: string
}
