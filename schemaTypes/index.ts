import { page } from "./page";
import about from "./about";
import advantages from "./advantages";
import { caseItem, casesSection } from "./cases";
import { faqItem, faqSection } from "./faq";
import footer from "./footer";
import header from "./header";
import hero from "./hero";
import siteSettings from "./siteSettings";
import { pricing, pricingSection } from "./pricing";
import { reviewItem, reviewsSection } from "./reviews";
import { service, servicesSection } from "./service";
import { step, processSection } from "./step";
import quizSection from "./quiz";
import { modalContact, modalDiscuss, modalReels, modalAudit } from "./modals";
import { privacyPage } from "./privacyPage";
import { consentPage } from "./consentPage";

export const schemaTypes = [
  page,
  header,
  hero,
  advantages,
  about,
  servicesSection,
  service,
  pricingSection,
  pricing,
  casesSection,
  caseItem,
  processSection,
  step,
  quizSection,
  reviewsSection,
  reviewItem,
  faqSection,
  faqItem,
  footer,
  siteSettings,
  modalContact,
  modalDiscuss,
  modalReels,
  modalAudit,
  privacyPage,
  consentPage,
];
