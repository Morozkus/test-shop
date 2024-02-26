import md5 from 'md5'
import axios from 'axios';
import { formatDate } from '../utils/formatedDate';
import { fieldsParams, fieldsResponse, filterParams, filterResponse, idsParams, idsResponse, itemsParams, itemsResponse } from '../models/APIModel';

const instance = axios.create({
  baseURL: 'https://api.valantis.store:41000',
  headers: {
    'X-Auth': md5('Valantis_' + formatDate(new Date()))
  }
})

class API {

  static async getIds({ limit, offset }: idsParams) {
    const { data } = await instance.post<idsResponse>('/', {
      action: "get_ids",
      params: { limit, offset }
    })

    return data
  }

  static async getItems({ ids }: itemsParams) {
    const { data } = await instance.post<itemsResponse>('/', {
      action: "get_items",
      params: { ids }
    })

    return data
  }

  static async getFields({ field, limit, offset }: fieldsParams) {
    const params: fieldsParams = { field }

    if (limit) params.limit = limit
    if (offset) params.offset = offset

    const { data } = await instance.post<fieldsResponse>('/', {
      action: "get_fields",
      params: { ...params }
    })

    return data
  }

  static async filter({ brand, id, price, product }: filterParams) {
    const params: filterParams = {}

    if (id) params.id = id
    if (brand) params.brand = brand
    if (price) params.price = price
    if (product) params.product = product
    console.log(params)

    const { data } = await instance.post<filterResponse>('/', {
      action: "filter",
      params: { ...params }
    })

    return data
  }

}

export default API