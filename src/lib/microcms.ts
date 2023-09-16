import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';

// カテゴリーの型定義
export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// ニュースの型定義
export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category: Category;
};

// メンバーの型定義
export type Member = {
  name: string;
  position: string;
  profile: string;
  image?: MicroCMSImage;
};

// 事業内容の型定義
export type Business = {
  logo?: MicroCMSImage;
  description: string;
  image?: MicroCMSImage;
  link: string;
};

// メタ情報の型定義
export type Meta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: MicroCMSImage;
  canonical?: string;
};

export type Article = News & MicroCMSContentId & MicroCMSDate;

if (!import.meta.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!import.meta.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// ニュース一覧を取得
export const getNewsList = async (queries: MicroCMSQueries = {}) => {
  return await client.getList<News>({
    endpoint: 'news',
    queries,
  });
};

// ニュースの詳細を取得
export const getNewsDetail = async (contentId: string, queries: MicroCMSQueries = {}) => {
  return await client.getListDetail<News>({
    endpoint: 'news',
    contentId,
    queries,
  });
};

// カテゴリーの一覧を取得
export const getCategoryList = async (queries: MicroCMSQueries = {}) => {
  return await client.getList<Category>({
    endpoint: 'categories',
    queries,
  });
};

// カテゴリーの詳細を取得
export const getCategoryDetail = async (contentId: string, queries: MicroCMSQueries = {}) => {
  return await client.getListDetail<Category>({
    endpoint: 'categories',
    contentId,
    queries,
  });
};

// メンバー一覧を取得
export const getMembersList = async (queries: MicroCMSQueries = {}) => {
  return await client.getList<Member>({
    endpoint: 'members',
    queries,
  });
};

// 事業内容一覧を取得
export const getBusinessList = async (queries: MicroCMSQueries = {}) => {
  return await client.getList<Business>({
    endpoint: 'business',
    queries,
  });
};

// メタ情報を取得
export const getMeta = async (queries: MicroCMSQueries = {}) => {
  return await client.getObject<Meta>({
    endpoint: 'meta',
    queries,
  });
};
