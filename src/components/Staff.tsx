import { useEffect, useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  Briefcase,
  Mic2,
  Trophy,
  Sparkles,
  Check,
  X,
  ArrowUpRight,
  Linkedin
} from 'lucide-react';
import { STAFF } from '../data/staff.ts';
import type { Staff as StaffMember } from '../types.ts';
import { cn } from '../lib/utils';
import SectionHeader from './SectionHeader.tsx';

const ease = [0.16, 1, 0.3, 1] as const;

const cardActionBase =
  'inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300';

function StaffLinkedInLink({
  url,
  variant = 'card',
  className
}: {
  url: string;
  variant?: 'card' | 'modal';
  className?: string;
}) {
  if (variant === 'modal') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          cardActionBase,
          'bg-[#0A66C2]/10 text-[#0A66C2] ring-1 ring-[#0A66C2]/20 hover:bg-[#0A66C2] hover:text-white hover:ring-[#0A66C2]',
          className
        )}
      >
        <Linkedin className="w-4 h-4 shrink-0" />
        LinkedIn
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        cardActionBase,
        'bg-[#0A66C2]/8 text-[#0A66C2] ring-1 ring-[#0A66C2]/15 hover:bg-[#0A66C2] hover:text-white hover:ring-[#0A66C2] shadow-sm',
        className
      )}
    >
      <Linkedin className="w-4 h-4 shrink-0" />
      LinkedIn
    </a>
  );
}

function StaffViewProfileButton({
  onClick,
  compact = false
}: {
  onClick: () => void;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        cardActionBase,
        'group/btn bg-gray-900 text-white shadow-sm hover:bg-orange-600 hover:shadow-md',
        compact && 'py-2.5 text-xs rounded-lg'
      )}
    >
      View Profile
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
    </button>
  );
}

function StaffCardActions({
  linkedin,
  showViewProfile,
  onViewProfile,
  compact = false
}: {
  linkedin?: string;
  showViewProfile: boolean;
  onViewProfile: () => void;
  compact?: boolean;
}) {
  if (!linkedin && !showViewProfile) return null;

  return (
    <div
      className={cn(
        compact ? 'mt-0 pt-0' : 'pt-3 mt-auto border-t border-gray-100',
        compact && linkedin && showViewProfile && 'grid grid-cols-2 gap-2',
        compact && !(linkedin && showViewProfile) && 'flex flex-col gap-2',
        !compact && 'flex flex-col gap-2.5'
      )}
    >
      {linkedin && (
        <StaffLinkedInLink
          url={linkedin}
          variant="card"
          className={compact ? 'py-2.5 text-xs rounded-lg' : undefined}
        />
      )}
      {showViewProfile && (
        <StaffViewProfileButton onClick={onViewProfile} compact={compact} />
      )}
    </div>
  );
}

function hasFullProfile(member: StaffMember) {
  return Boolean(
    member.sections?.length ||
      member.education ||
      member.experience?.companies?.length ||
      member.experience?.current ||
      member.expertise?.length ||
      member.highlights?.length
  );
}

function StaffHighlightsList({
  featuredHighlight,
  highlights
}: {
  featuredHighlight?: string;
  highlights?: string[];
}) {
  if (!featuredHighlight && !highlights?.length) return null;

  return (
    <div className="space-y-4">
      {featuredHighlight && (
        <div className="rounded-xl border border-orange-200 bg-orange-50/80 px-4 py-3.5">
          <p className="text-sm font-semibold text-orange-900 leading-relaxed">{featuredHighlight}</p>
        </div>
      )}
      {highlights && highlights.length > 0 && (
        <ul className="space-y-2.5">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm text-gray-600 leading-snug">
              <Check className="w-4 h-4 shrink-0 text-orange-500 mt-0.5" strokeWidth={2.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StaffExperienceTimeline({
  companies
}: {
  companies: NonNullable<StaffMember['experience']>['companies'];
}) {
  if (!companies?.length) return null;

  return (
    <div className="space-y-8">
      {companies.map((company, companyIndex) => (
        <div key={company.company} className={cn(companyIndex > 0 && 'pt-8 border-t border-gray-100')}>
          <div className="space-y-1 mb-4">
            <h4 className="text-base font-bold text-gray-900">{company.company}</h4>
            {company.meta && <p className="text-sm text-gray-500">{company.meta}</p>}
          </div>

          <div className="space-y-0">
            {company.roles.map((role, roleIndex) => {
              const isLast = roleIndex === company.roles.length - 1;
              const showTimeline = company.roles.length > 1;

              return (
                <div key={`${role.title}-${role.period}`} className="flex gap-4">
                  {showTimeline ? (
                    <div className="flex flex-col items-center pt-1.5 shrink-0 w-4">
                      <span className="h-2.5 w-2.5 rounded-full bg-gray-300 ring-4 ring-gray-100" />
                      {!isLast && <span className="w-px flex-1 min-h-[2rem] bg-gray-200 mt-1" />}
                    </div>
                  ) : (
                    <div className="w-4 shrink-0" />
                  )}

                  <div className={cn('flex-1 min-w-0', !isLast && 'pb-7')}>
                    <h5 className="text-[15px] font-semibold text-gray-900 leading-snug">{role.title}</h5>
                    <p className="text-sm text-gray-500 mt-0.5">{role.period}</p>
                    {role.location && (
                      <p className="text-sm text-gray-500">{role.location}</p>
                    )}
                    {role.description && (
                      <p className="text-sm text-gray-600 leading-relaxed mt-2">{role.description}</p>
                    )}
                    {role.skills && role.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {role.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200/80 px-2.5 py-1 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function StaffPhoto({
  member,
  className,
  variant = 'preview'
}: {
  member: StaffMember;
  className?: string;
  variant?: 'preview' | 'modal';
}) {
  const isModal = variant === 'modal';

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gray-100',
        isModal
          ? 'rounded-2xl ring-1 ring-gray-200/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]'
          : 'group',
        className
      )}
    >
      <img
        src={member.image}
        alt={member.name}
        className={cn(
          'h-full w-full object-cover object-top',
          isModal
            ? 'grayscale-0'
            : 'grayscale transition-all duration-700 group-hover:grayscale-0 scale-105 group-hover:scale-100'
        )}
      />
    </div>
  );
}

function ProfileSection({
  icon: Icon,
  title,
  children,
  className,
  plainOnMobile = false,
  classic = false
}: {
  icon: typeof GraduationCap;
  title: string;
  children: ReactNode;
  className?: string;
  plainOnMobile?: boolean;
  classic?: boolean;
}) {
  if (classic) {
    return (
      <section className={cn('space-y-3', className)}>
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-orange-500 shrink-0" />
          <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">{title}</h4>
        </div>
        {children}
      </section>
    );
  }

  return (
    <section
      className={cn(
        'space-y-3',
        plainOnMobile && 'pb-6 border-b border-gray-100 last:border-0 last:pb-0',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 border border-orange-100 shrink-0">
          <Icon className="w-4 h-4 text-orange-500" />
        </span>
        <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">{title}</h4>
      </div>
      {plainOnMobile ? (
        <div className="pl-10">{children}</div>
      ) : (
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          {children}
        </div>
      )}
    </section>
  );
}

const imageFocusClass = {
  top: 'object-top',
  center: 'object-center',
  bottom: 'object-bottom'
} as const;

function SectionImageGallery({
  images,
  title,
  layout = 'featured',
  imageFocus,
  galleryAspect = 'video'
}: {
  images: string[];
  title: string;
  layout?: 'gallery' | 'featured';
  imageFocus?: ('top' | 'center' | 'bottom')[];
  galleryAspect?: 'video' | 'portrait';
}) {
  if (images.length === 0) return null;

  const aspectClass =
    galleryAspect === 'portrait' ? 'aspect-[4/5]' : 'aspect-video';

  if (layout === 'gallery') {
    return (
      <div
        className={cn(
          'grid gap-3 mt-4',
          images.length === 1 && 'grid-cols-1 max-w-md mx-auto',
          images.length === 2 && 'grid-cols-1 sm:grid-cols-2',
          images.length >= 3 && 'grid-cols-2 sm:grid-cols-3'
        )}
      >
        {images.map((src, i) => {
          const focus = imageFocus?.[i] ?? 'center';
          return (
            <div
              key={`${title}-${i}`}
              className={cn(
                'relative w-full overflow-hidden rounded-xl border border-gray-100 bg-gray-50 shadow-sm',
                images.length === 1 ? 'aspect-[4/5] max-h-80' : aspectClass
              )}
            >
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                className={cn(
                  'absolute inset-0 h-full w-full object-cover',
                  imageFocusClass[focus]
                )}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <figure className="mt-4 md:mt-0 w-full max-w-sm md:max-w-none mx-auto md:mx-0 shrink-0">
        <img
          src={images[0]}
          alt={title}
          className="block w-full h-auto max-h-64 sm:max-h-72 rounded-xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)] ring-1 ring-gray-200/60"
          loading="lazy"
        />
      </figure>
    );
  }

  return (
    <div
      className={cn(
        'grid gap-4 mt-5 w-full',
        images.length === 2 && 'grid-cols-1 sm:grid-cols-2',
        images.length >= 3 && 'grid-cols-2'
      )}
    >
      {images.map((src, i) => (
        <figure key={`${title}-${i}`} className="overflow-hidden rounded-xl shadow-sm ring-1 ring-gray-200/60">
          <img
            src={src}
            alt={`${title} ${i + 1}`}
            className="block w-full h-44 sm:h-48 object-cover"
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  );
}

function FeaturedSectionImage({
  src,
  alt,
  focus = 'top'
}: {
  src: string;
  alt: string;
  focus?: 'top' | 'center' | 'bottom';
}) {
  return (
    <figure className="mt-4 md:mt-0 w-full max-w-sm md:max-w-none mx-auto md:mx-0 shrink-0">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)] ring-1 ring-gray-200/60">
        <img
          src={src}
          alt={alt}
          className={cn('absolute inset-0 h-full w-full object-cover', imageFocusClass[focus])}
          loading="lazy"
        />
      </div>
    </figure>
  );
}

function StaffProfileSections({
  sections,
  classic = false
}: {
  sections: NonNullable<StaffMember['sections']>;
  classic?: boolean;
}) {
  return (
    <div className={cn(classic ? 'space-y-10' : 'space-y-8')}>
      {sections.map((section) => {
        const isFeaturedSingle =
          section.images?.length === 1 &&
          section.imageLayout !== 'gallery' &&
          !section.featuredImage;
        const isSplitWithFeatured = Boolean(section.featuredImage);

        return (
          <section
            key={section.id}
            className={cn(
              classic
                ? 'rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
                : 'pb-8 border-b border-gray-100 last:border-0 last:pb-0'
            )}
          >
            <div className="space-y-2 mb-4">
              <h4
                className={cn(
                  'font-bold text-gray-900 tracking-tight leading-snug',
                  classic ? 'text-lg' : 'text-base'
                )}
              >
                {section.title}
              </h4>
              {section.subtitle && (
                <p className="text-sm font-medium text-orange-600">{section.subtitle}</p>
              )}
            </div>

            {isFeaturedSingle || isSplitWithFeatured ? (
              <>
                <div className="md:grid md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_260px] md:gap-8 md:items-start">
                  <div className="min-w-0">
                    <p className="text-[15px] text-gray-600 leading-[1.75]">{section.description}</p>
                    {section.items && section.items.length > 0 && (
                      section.id === 'brands' ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {section.items.map((item) => (
                            <span
                              key={item}
                              className="text-xs font-semibold text-gray-800 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <ul className="mt-4 space-y-2">
                          {section.items.map((item) => (
                            <li key={item} className="flex gap-2.5 text-sm text-gray-600 leading-snug">
                              <Check className="w-4 h-4 shrink-0 text-orange-500 mt-0.5" strokeWidth={2.5} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )
                    )}
                  </div>
                  <FeaturedSectionImage
                    src={isSplitWithFeatured ? section.featuredImage! : section.images![0]}
                    alt={section.title}
                    focus={section.id === 'brands' ? 'top' : 'center'}
                  />
                </div>
                {isSplitWithFeatured && section.images && section.images.length > 0 && (
                  <SectionImageGallery
                    images={section.images}
                    title={section.title}
                    layout="gallery"
                    galleryAspect={section.galleryAspect}
                    imageFocus={section.imageFocus}
                  />
                )}
              </>
            ) : (
              <>
                <p className="text-[15px] text-gray-600 leading-[1.75]">{section.description}</p>
                {section.items && section.items.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-gray-600 leading-snug">
                        <Check className="w-4 h-4 shrink-0 text-orange-500 mt-0.5" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.images && section.images.length > 0 && (
                  <SectionImageGallery
                    images={section.images}
                    title={section.title}
                    layout={section.imageLayout}
                    imageFocus={section.imageFocus}
                    galleryAspect={section.galleryAspect}
                  />
                )}
              </>
            )}
          </section>
        );
      })}
    </div>
  );
}

function StaffProfileContent({
  member,
  plainOnMobile = false,
  classic = false
}: {
  member: StaffMember;
  plainOnMobile?: boolean;
  classic?: boolean;
}) {
  const sectionProps = classic
    ? { classic: true }
    : plainOnMobile
      ? { plainOnMobile: true }
      : {};

  if (classic) {
    if (member.sections && member.sections.length > 0) {
      return (
        <div className="space-y-8 pb-2">
          <ProfileSection icon={Sparkles} title="Profile Overview" {...sectionProps}>
            <p className="text-[15px] text-gray-600 leading-[1.75]">{member.bio}</p>
          </ProfileSection>

          {(member.featuredHighlight || (member.highlights && member.highlights.length > 0)) && (
            <ProfileSection icon={Trophy} title="At a Glance" {...sectionProps}>
              <StaffHighlightsList
                featuredHighlight={member.featuredHighlight}
                highlights={member.highlights}
              />
            </ProfileSection>
          )}

          <StaffProfileSections sections={member.sections} classic />
        </div>
      );
    }

    return (
      <div className="space-y-8 pb-2">
        <ProfileSection icon={Sparkles} title="Profile Overview" {...sectionProps}>
          <p className="text-[15px] text-gray-600 leading-[1.75]">{member.bio}</p>
        </ProfileSection>

        {member.education && (
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-5 space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-orange-500 shrink-0" />
              <h4 className="text-sm font-bold text-gray-900">Education</h4>
            </div>
            <p className="text-sm font-semibold text-gray-900 leading-snug">{member.education.degree}</p>
            <p className="text-sm text-gray-500">{member.education.institution}</p>
          </div>
        )}

        {member.experience?.companies && member.experience.companies.length > 0 && (
          <ProfileSection icon={Briefcase} title="Experience" {...sectionProps}>
            <StaffExperienceTimeline companies={member.experience.companies} />
          </ProfileSection>
        )}

        {member.experience?.current && !member.experience.companies?.length && (
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-5 space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-orange-500 shrink-0" />
              <h4 className="text-sm font-bold text-gray-900">Experience</h4>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{member.experience.current}</p>
            {(member.experience.previous?.length ?? 0) > 0 && (
              <ul className="space-y-1.5 border-t border-gray-100 pt-3">
                {member.experience.previous!.map((role) => (
                  <li key={role} className="text-xs text-gray-500 leading-snug">
                    {role}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {member.expertise && member.expertise.length > 0 && (
          <ProfileSection icon={Mic2} title="Key Expertise" {...sectionProps}>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium text-gray-700 bg-white border border-gray-200/90 px-3 py-1.5 rounded-full shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </ProfileSection>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {(member.featuredHighlight || (member.highlights && member.highlights.length > 0)) && (
            <ProfileSection icon={Trophy} title="Highlights" {...sectionProps}>
              <StaffHighlightsList
                featuredHighlight={member.featuredHighlight}
                highlights={member.highlights}
              />
            </ProfileSection>
          )}

          {member.approach && member.approach.length > 0 && (
            <ProfileSection icon={Sparkles} title="Training Approach" {...sectionProps}>
              <ul className="space-y-2.5">
                {member.approach.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-gray-600 leading-snug">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ProfileSection>
          )}
        </div>
      </div>
    );
  }

  if (member.sections && member.sections.length > 0) {
    return (
      <div className="space-y-0 lg:space-y-8 pb-2">
        <ProfileSection icon={Sparkles} title="Profile Overview" {...sectionProps}>
          <p className="text-sm lg:text-[15px] text-gray-600 leading-relaxed lg:leading-[1.75]">{member.bio}</p>
        </ProfileSection>

        {(member.featuredHighlight || (member.highlights && member.highlights.length > 0)) && (
          <ProfileSection icon={Trophy} title="At a Glance" {...sectionProps}>
            <StaffHighlightsList
              featuredHighlight={member.featuredHighlight}
              highlights={member.highlights}
            />
          </ProfileSection>
        )}

        <StaffProfileSections sections={member.sections} />
      </div>
    );
  }

  return (
    <div className="space-y-0 lg:space-y-8 pb-2">
      <ProfileSection icon={Sparkles} title="Profile Overview" {...sectionProps}>
        <p className="text-sm lg:text-[15px] text-gray-600 leading-relaxed lg:leading-[1.75]">{member.bio}</p>
      </ProfileSection>

      {member.education && (
        <div
          className={cn(
            plainOnMobile
              ? 'pb-6 border-b border-gray-100 pl-10'
              : 'rounded-xl border border-gray-100 bg-white p-4 shadow-sm lg:rounded-2xl lg:max-w-xl lg:shadow-none lg:bg-gradient-to-br lg:from-gray-50 lg:to-white lg:p-5 space-y-2'
          )}
        >
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-orange-500 shrink-0" />
            <h4 className="text-sm font-bold text-gray-900">Education</h4>
          </div>
          <p className="text-sm font-semibold text-gray-900 leading-snug">{member.education.degree}</p>
          <p className="text-sm text-gray-500">{member.education.institution}</p>
        </div>
      )}

      {member.experience?.companies && member.experience.companies.length > 0 && (
        <ProfileSection icon={Briefcase} title="Experience" {...sectionProps}>
          <StaffExperienceTimeline companies={member.experience.companies} />
        </ProfileSection>
      )}

      {member.experience?.current && !member.experience.companies?.length && (
        <div
          className={cn(
            plainOnMobile
              ? 'pb-6 border-b border-gray-100 pl-10 space-y-3'
              : 'rounded-xl border border-gray-100 bg-white p-4 shadow-sm lg:rounded-2xl lg:max-w-xl lg:shadow-none lg:bg-gradient-to-br lg:from-gray-50 lg:to-white lg:p-5 space-y-3'
          )}
        >
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-orange-500 shrink-0" />
            <h4 className="text-sm font-bold text-gray-900">Experience</h4>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{member.experience.current}</p>
          {(member.experience.previous?.length ?? 0) > 0 && (
            <ul className="space-y-1.5 border-t border-gray-100 pt-3">
              {member.experience.previous!.map((role) => (
                <li key={role} className="text-xs text-gray-500 leading-snug">
                  {role}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {member.expertise && member.expertise.length > 0 && (
        <ProfileSection icon={Mic2} title="Key Expertise" {...sectionProps}>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((item) => (
              <span
                key={item}
                className="text-xs font-medium text-gray-700 bg-white border border-gray-200/90 px-3 py-1.5 rounded-full shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </ProfileSection>
      )}

      <div className={cn(plainOnMobile ? 'space-y-0' : 'grid lg:grid-cols-2 gap-5 lg:gap-8')}>
        {(member.featuredHighlight || (member.highlights && member.highlights.length > 0)) && (
          <ProfileSection icon={Trophy} title="Highlights" {...sectionProps}>
            <StaffHighlightsList
              featuredHighlight={member.featuredHighlight}
              highlights={member.highlights}
            />
          </ProfileSection>
        )}

        {member.approach && member.approach.length > 0 && (
          <ProfileSection icon={Sparkles} title="Training Approach" {...sectionProps}>
            <ul className="space-y-2.5">
              {member.approach.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-gray-600 leading-snug">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-orange-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ProfileSection>
        )}
      </div>
    </div>
  );
}

function StaffProfileModal({
  member,
  onClose
}: {
  member: StaffMember;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex lg:items-center lg:justify-center lg:p-6 xl:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <button
        type="button"
        aria-label="Close profile"
        className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm lg:bg-gray-900/45 lg:backdrop-blur-[6px]"
        onClick={onClose}
      />

      {/* Mobile: full-screen slide-in */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="staff-profile-title"
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        className="relative z-10 flex h-[100dvh] w-full flex-col bg-white lg:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-full flex-col">
          <header className="shrink-0 flex items-center gap-3 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 border-b border-gray-100 bg-white">
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 active:bg-gray-200 shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="min-w-0 flex-1">
              <p id="staff-profile-title" className="font-semibold text-gray-900 truncate text-[15px]">
                {member.name}
              </p>
              <p className="text-xs text-orange-600 truncate">{member.role}</p>
            </div>
          </header>

          <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain modal-scroll bg-[#fafafa]">
            <div className="bg-white px-4 pt-6 pb-5 text-center border-b border-gray-100">
              <div className="mx-auto w-[120px] aspect-square rounded-2xl overflow-hidden ring-2 ring-gray-100 shadow-md mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-sm text-orange-600 font-medium leading-snug px-2">{member.role}</p>
              {member.linkedin && (
                <div className="mt-4 max-w-xs mx-auto">
                  <StaffLinkedInLink url={member.linkedin} variant="modal" />
                </div>
              )}
            </div>

            <div className="px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <StaffProfileContent member={member} plainOnMobile />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Desktop: centered popup (original) */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="staff-profile-title-desktop"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.4, ease }}
        className={cn(
          'relative z-10 hidden lg:flex w-full flex-col min-h-0 max-h-[90dvh] rounded-[1.75rem] bg-white',
          'shadow-[0_32px_80px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/[0.06] overflow-hidden',
          member.sections?.length ? 'max-w-6xl' : 'max-w-5xl'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-gray-100/90 bg-white px-6 py-4">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-orange-500 mb-1">
              Faculty Profile
            </p>
            <p id="staff-profile-title-desktop" className="font-serif text-xl text-gray-900 truncate">
              {member.name}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-gray-500 ring-1 ring-gray-200/80 hover:bg-gray-900 hover:text-white hover:ring-gray-900 transition-all duration-300 shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain modal-scroll">
          <div className="grid grid-cols-[minmax(240px,280px)_1fr] items-start">
            <aside className="sticky top-0 border-r border-gray-100 bg-[#fafafa] p-8">
              <StaffPhoto
                member={member}
                variant="modal"
                className="aspect-[4/5] w-full"
              />
              <div className="mt-5 space-y-2">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 leading-snug">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-orange-600 leading-relaxed">{member.role}</p>
                {member.linkedin && (
                  <div className="mt-4">
                    <StaffLinkedInLink url={member.linkedin} variant="modal" />
                  </div>
                )}
              </div>
            </aside>
            <div className="p-8">
              <StaffProfileContent member={member} classic />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function StaffPreviewCard({
  member,
  index,
  onViewProfile
}: {
  member: StaffMember;
  index: number;
  onViewProfile: () => void;
}) {
  const previewText = member.summary ?? member.bio;
  const showProfileButton = hasFullProfile(member);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.55, ease }}
      className="group flex h-full flex-col"
    >
      {/* Mobile */}
      <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm md:hidden">
        <StaffPhoto
          member={member}
          variant="preview"
          className="aspect-[5/4] w-full rounded-none border-0 shadow-none"
        />
        <div className="flex flex-1 flex-col p-4">
          <div className="space-y-1.5 mb-3">
            <h3 className="text-lg font-bold text-gray-900 leading-tight">{member.name}</h3>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-500 leading-snug">
              {member.role}
            </p>
          </div>
          <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-3 mb-4">{previewText}</p>
          <StaffCardActions
            linkedin={member.linkedin}
            showViewProfile={showProfileButton}
            onViewProfile={onViewProfile}
            compact
          />
        </div>
      </div>

      {/* Desktop — original layout */}
      <div className="hidden md:flex md:flex-col md:gap-6 h-full">
        <StaffPhoto
          member={member}
          variant="preview"
          className="aspect-square w-full rounded-[3rem] border border-gray-100 shadow-sm"
        />
        <div className="flex flex-1 flex-col gap-4 min-h-0">
          <div className="space-y-2">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-snug">{member.name}</h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 leading-snug">
              {member.role}
            </p>
            <p className="text-gray-500 leading-relaxed text-sm line-clamp-4">{previewText}</p>
          </div>
          <StaffCardActions
            linkedin={member.linkedin}
            showViewProfile={showProfileButton}
            onViewProfile={onViewProfile}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function Staff() {
  const [activeProfile, setActiveProfile] = useState<StaffMember | null>(null);

  return (
    <section id="team" className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 relative">
        <div className="absolute top-0 right-0 text-[5rem] md:text-[10rem] font-bold text-gray-50 leading-none select-none -translate-y-1/4 translate-x-1/4 pointer-events-none hidden md:block">
          FACULTY
        </div>

        <SectionHeader
          label="Experts"
          title="Meet our Team"
          description="Industry practitioners and mentors guiding you from fundamentals to career-ready confidence."
        />

        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10 relative items-stretch">
          {STAFF.map((member, i) => (
            <StaffPreviewCard
              key={member.id}
              member={member}
              index={i}
              onViewProfile={() => setActiveProfile(member)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProfile && hasFullProfile(activeProfile) && (
          <StaffProfileModal
            key={activeProfile.id}
            member={activeProfile}
            onClose={() => setActiveProfile(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
