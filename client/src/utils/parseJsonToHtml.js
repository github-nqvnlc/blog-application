import { generateHTML } from '@tiptap/html';
import parse from 'html-react-parser';
import { extensions } from '../constants/tiptapExtensions';

const parseJsonToHtml = json => {
  if (!json) {
    return '<div>Empty content</div>';
  }

  try {
    const html = generateHTML(json, extensions);
    const parsed = parse(html);
    // Ensure we always return a defined value
    return parsed || html || '<div>Default content</div>';
  } catch (error) {
    console.warn('parseJsonToHtml error:', error);
    return '<div>Error parsing content</div>';
  }
};

export default parseJsonToHtml;
