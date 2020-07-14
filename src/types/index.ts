/**
 * Miscellaneous Types
 */

export type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';


/**
 * Model Types & Interfaces
 */

export interface IProject {
  strapiId: string | any;
  name: string;
  content: string;
  cover: string;
  images: string[];
  publishedAt: Date | string;
  tags: ITag[];
  overview: string;
}

export interface ITag {
  id: string | any;
  name: string;
}

export interface IPost {
  strapiId: string | any;
  title: string;
  content: string;
  cover: string;
  images: string[];
  publishedAt: Date | string;
  tags: ITag[];
  summary: string;
}
