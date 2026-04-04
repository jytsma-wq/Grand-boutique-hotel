import { type SchemaTypeDefinition } from 'sanity'
import barPage from '../../../sanity/schemas/barPage'
import chatbotKnowledge from '../../../sanity/schemas/chatbotKnowledge'
import experience from '../../../sanity/schemas/experience'
import galleryImage from '../../../sanity/schemas/galleryImage'
import homePage from '../../../sanity/schemas/homePage'
import offer from '../../../sanity/schemas/offer'
import popup from '../../../sanity/schemas/popup'
import restaurantPage from '../../../sanity/schemas/restaurantPage'
import room from '../../../sanity/schemas/room'
import siteSettings from '../../../sanity/schemas/siteSettings'
import spaTreatment from '../../../sanity/schemas/spaTreatment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    barPage, chatbotKnowledge, experience, galleryImage, homePage,
    offer, popup, restaurantPage, room, siteSettings, spaTreatment
  ],
}
