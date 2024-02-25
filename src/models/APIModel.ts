export interface idsParams {
  offset?: number;
  limit?: number;
}

export interface idsResponse {
  result: string[];
}

export interface itemsParams {
  ids: string[];
}

export interface item {
  brand: null | string;
  id: string;
  price: number;
  product: string;
}

export interface itemsResponse {
  result: item[]
}

export type itemsVariableResponse = null | itemsResponse[]

export interface fieldsParams {
  field: string;
  offset?: number;
  limit?: number;
}

export interface fieldsResponse {
  result: (null | string)[]
}

export interface filterParams {
  brand?: string;
  id?: string;
  price?: number;
  product?: string;
}

export interface filterResponse {
  result: string[];
}