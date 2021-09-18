export enum QueryName {
  listFarms = 'listFarms',
}

export type QueryNames = keyof typeof QueryName;

export type ItemsResponse<T> = {
  items: T[]
};

export type QueryItemsResponse<T> = Record<QueryNames, ItemsResponse<T>>;
export type QueryItemResponse<T> = Record<QueryNames, T>;
