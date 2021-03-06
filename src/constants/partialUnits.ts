export const PARTIAL_PRODUCTS: {
  tagId: number;
  name: string;
  sort: 'priority' | '-created_at';
  labelType?: 'new';
  moreHref?: {
    pathname: 'newItemList';
  };
}[] = [
  {
    tagId: Number(process.env.NEXT_PUBLIC_BOOMING_POPULARITY_TAG_ID),
    name: 'ð¥äººæ°æ²¸é¨°ä¸­',
    sort: 'priority',
  },
  {
    tagId: Number('222'),
    name: 'NEW ARRIVAL',
    sort: 'priority',
    labelType: 'new',
    moreHref: { pathname: 'newItemList' },
  },
  {
    tagId: Number('377'),
    name: 'äººæ°ã®éå½ã³ã¹ã¡ rom&ndç¹é',
    sort: 'priority',
  },
  {
    tagId: Number('363'),
    name: 'æ¢é¨ãä¹ãåããã¢ã±ã¢ã¢ã¤ãã ',
    sort: 'priority',
  },
  {
    tagId: Number('364'),
    name: 'å´©ãç¥ããï¼å¤ã¡ã¤ã¯ã®å¿éå',
    sort: 'priority',
  },
];

export const FIRST_SALE_UNITS = {
  springSale: {
    title: null,
    tagId: Number(process.env.NEXT_PUBLIC_SPRING_SALE_TAG_ID),
    unitIds:
      process.env.NEXT_PUBLIC_SPRING_SALE_UNIT_IDS?.split(' ').map((id) =>
        Number(id)
      ) || [],
  },
  hallOfFame: {
    title: 'æ®¿å å¥ãã³ã¹ã¡',
    tagId: null,
    unitIds:
      process.env.NEXT_PUBLIC_HALL_OF_FAME_UNIT_IDS?.split(' ').map((id) =>
        Number(id)
      ) || [],
  },
  hotTopicOnSns: {
    title: 'SNSã§è©±é¡ã®ã³ã¹ã¡',
    tagId: null,
    unitIds:
      process.env.NEXT_PUBLIC_HOT_TOPIC_ON_SNS_UNIT_IDS?.split(' ').map((id) =>
        Number(id)
      ) || [],
  },
};
