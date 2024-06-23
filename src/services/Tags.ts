import { ErrorProps, PageProps } from "../types";
import { api } from "./api";
import mockResponse from "./mock";

class Tags {
  // O manual está disponível em: https://api.stackexchange.com/docs
  async getTagsByPage(
    page: number,
    fromdate: number,
    todate: number
  ): Promise<PageProps | ErrorProps> {
    const params = {
      order: "desc",
      site: "stackoverflow",
      sort: "popular",
      fromdate,
      todate,
      page,
      pagesize: process.env.REACT_APP_PAGE_SIZE
    };

    try {
      const { data } = await api.get("/", { params });
      return data;
    } catch (error: any) {
      return mockResponse;
      //return { message: error.message };
    }
  }
}

const tags = new Tags();
export default tags;
