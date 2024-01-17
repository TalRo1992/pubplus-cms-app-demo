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

export interface StaticPagesPrivacyPolicy extends Schema.Component {
  collectionName: 'components_static_pages_privacy_policies';
  info: {
    displayName: 'privacyPolicy';
    description: '';
  };
  attributes: {
    privacyNoticeName: Attribute.String;
    privacyNoticeUrl: Attribute.String;
  };
}

export interface StaticPagesTermsOfService extends Schema.Component {
  collectionName: 'components_static_pages_terms_of_services';
  info: {
    displayName: 'Terms Of Service';
  };
  attributes: {
    website: Attribute.String;
    privacy_policy_url: Attribute.String;
    info_mail: Attribute.Email;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article-components.item': ArticleComponentsItem;
      'static-pages.privacy-policy': StaticPagesPrivacyPolicy;
      'static-pages.terms-of-service': StaticPagesTermsOfService;
    }
  }
}
