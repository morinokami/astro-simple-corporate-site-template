import 'highlight.js/styles/hybrid.css';

import cheerio from 'cheerio';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import hljs from 'highlight.js';

export const formatDate = (date: string) => {
  const utcDate = new Date(date);
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
  return format(jstDate, 'yyyy/MM/dd');
};

export const formatRichText = (richText: string) => {
  const $ = cheerio.load(richText);
  $('pre code').each((_, elm) => {
    const lang = $(elm).attr('class');
    const res = lang
      ? hljs.highlight($(elm).text(), { language: lang?.replace(/^language-/, '') || '' })
      : hljs.highlightAuto($(elm).text());
    $(elm).html(res.value);
  });
  return $.html();
};
