import { type SchemaTypeDefinition } from 'sanity';
import { siteSettings } from './siteSettings';
import { room } from './room';
import { homePage } from './homePage';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, room, homePage],
};
