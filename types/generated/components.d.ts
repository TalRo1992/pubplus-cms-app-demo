import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleComponentsItem extends Schema.Component {
  collectionName: 'components_article_components_items';
  info: {
    displayName: 'item';
    description: '';
  };
  attributes: {
    image_url: Attribute.String;
    caption_url: Attribute.String;
    caption_description: Attribute.String;
    title: Attribute.String;
    post_image_text: Attribute.Text;
    pre_image_text: Attribute.Text;
    type: Attribute.Enumeration<['INTRO', 'BASIC']>;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article-components.item': ArticleComponentsItem;
    }
  }
}
