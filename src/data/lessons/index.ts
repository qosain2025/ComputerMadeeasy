import { Lesson } from '../../types';
import { lessonWhatIsAComputer } from './lesson-1-what-is-a-computer';
import { lessonPartsOfAComputer } from './lesson-2-parts-of-a-computer';
import { lessonTypesOfComputers } from './lesson-3-types-of-computers';
import { lessonInputDevices } from './lesson-4-input-devices';
import { lessonOutputDevices } from './lesson-5-output-devices';
import { lessonWhatIsMsOffice } from './lesson-6-what-is-ms-office';
import { lessonWhatIsMicrosoftExcel } from './lesson-7-what-is-microsoft-excel';
import { lessonWhatIsAWebsite } from './lesson-8-what-is-a-website';
import { lessonWhatIsAi } from './lesson-9-what-is-ai';
import { lessonTypesOfAi } from './lesson-10-types-of-ai';
import { lessonCareersInComputerFields } from './lesson-11-careers-in-computer-fields';

export const allLessons: Lesson[] = [
  lessonWhatIsAComputer,
  lessonPartsOfAComputer,
  lessonTypesOfComputers,
  lessonInputDevices,
  lessonOutputDevices,
  lessonWhatIsMsOffice,
  lessonWhatIsMicrosoftExcel,
  lessonWhatIsAWebsite,
  lessonWhatIsAi,
  lessonTypesOfAi,
  lessonCareersInComputerFields,
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return allLessons.find((lesson) => lesson.slug === slug);
}

export function getAdjacentLessons(slug: string): {
  previous?: { slug: string; title: string };
  next?: { slug: string; title: string };
} {
  const index = allLessons.findIndex((l) => l.slug === slug);
  if (index === -1) return {};

  const previous = index > 0 ? { slug: allLessons[index - 1].slug, title: allLessons[index - 1].shortTitle } : undefined;
  const next = index < allLessons.length - 1 ? { slug: allLessons[index + 1].slug, title: allLessons[index + 1].shortTitle } : undefined;

  return { previous, next };
}

export function getRelatedLessons(slugs: string[]): Lesson[] {
  return allLessons.filter((l) => slugs.includes(l.slug));
}
