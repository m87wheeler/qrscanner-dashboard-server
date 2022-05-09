export enum SocketEvent {
  connection = "connection",
  record_item = "add_item",
  item_recorded = "item_recorded",
}

export type SocketResponseType = { success: boolean; data: any };
