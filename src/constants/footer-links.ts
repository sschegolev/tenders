import {
  ROUTE_ABOUT,
  ROUTE_BLOG,
  ROUTE_GROUP_TENDERS,
  ROUTE_HOME_PAGE,
  ROUTE_HOW_TO_CREATE_TENDER
} from './router-links';

interface IFooterLink {
  text: string;
  link: string;
}

export const FOOTER_FIRST_COLUMN: IFooterLink[] = [
  {
    text: 'Главная',
    link: ROUTE_HOME_PAGE
  },
  {
    text: 'Предстоящие тендеры',
    link: ROUTE_HOME_PAGE
  },
  {
    text: 'Групповые тендеры',
    link: ROUTE_GROUP_TENDERS
  },
  {
    text: 'Блог',
    link: ROUTE_BLOG
  }
];

export const FOOTER_SECOND_COLUMN: IFooterLink[] = [
  {
    text: 'Электроника',
    link: '#'
  },
  {
    text: 'Мебель',
    link: '#'
  },
  {
    text: 'Услуги',
    link: '#'
  }
];

export const FOOTER_THIRD_COLUMN: IFooterLink[] = [
  {
    text: 'Как создать тендер',
    link: ROUTE_HOW_TO_CREATE_TENDER
  },
  {
    text: 'FAQ',
    link: '#'
  },
  {
    text: 'Рекламодателям',
    link: '#'
  },
  {
    text: 'Как с нами связаться',
    link: ROUTE_ABOUT
  }
];
