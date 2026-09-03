'use client';

import { ChevronDown, Mail } from 'lucide-react';
import { dataPolicySections } from '@/content/dataPolicy';
import { termsSections } from '@/content/termsPolicy';
import type { PolicySection } from '@/content/dataPolicy';
import styles from './LegalPageContent.module.css';

interface LegalPageContentProps {
  type: 'privacy' | 'terms';
  locale: string;
}

export function LegalPageContent({ type, locale }: LegalPageContentProps) {
  const loc = locale === 'en' ? 'en' : 'es';
  const isPrivacy = type === 'privacy';
  const sections: PolicySection[] = isPrivacy ? dataPolicySections : termsSections;

  const title = isPrivacy
    ? (loc === 'es' ? 'Política de Tratamiento de Datos Personales' : 'Personal Data Processing Policy')
    : (loc === 'es' ? 'Términos y Condiciones' : 'Terms & Conditions');

  const lastUpdated = loc === 'es' ? 'Última actualización: septiembre de 2026' : 'Last updated: September 2026';

  const intro = isPrivacy
    ? (loc === 'es'
        ? 'En Vertex protegemos la información personal de quienes interactúan con nosotros, de acuerdo con la Ley 1581 de 2012 de Colombia. A continuación encontrarás cómo recolectamos, usamos y protegemos tus datos, y cómo ejercer tus derechos.'
        : 'At Vertex, we protect the personal information of everyone who interacts with us, in accordance with Colombian Law 1581 of 2012. Below you will find how we collect, use, and protect your data, and how to exercise your rights.')
    : (loc === 'es'
        ? 'Bienvenido al sitio web corporativo de Vertex. Al acceder y navegar en este sitio, aceptas cumplir con los siguientes términos y condiciones de uso.'
        : 'Welcome to the Vertex corporate website. By accessing and browsing this site, you agree to comply with the following terms and conditions of use.');

  const tocLabel = loc === 'es' ? 'Contenido' : 'Contents';
  const showToc = sections.length > 2;

  return (
    <div className={`${styles.page} pt-[var(--vx-header-height)]`}>
      <section className="vx-section vx-bg-wallpaper-2 relative overflow-hidden">
        <div className="vx-container">
          <div className="max-w-3xl">
            <h1 className="text-vertex-ink text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-vertex-facetTeal text-base mb-5">{lastUpdated}</p>
            <p className="text-vertex-facetTeal text-lg leading-relaxed">{intro}</p>
          </div>
        </div>
      </section>

      <section className="vx-section">
        <div className="vx-container">
          <div className={showToc ? styles.layout : styles.layoutNoToc}>
            {showToc && (
              <aside className={styles.sidebar}>
                <nav className={styles.tocDesktop} aria-label={tocLabel}>
                  <span className={styles.tocLabel}>{tocLabel}</span>
                  <ul>
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`}>
                          <span className={styles.tocNumber}>{section.number}</span>
                          {section.title[loc]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {isPrivacy && (
                  <div className={styles.rightsCallout}>
                    <h3>{loc === 'es' ? '¿Cómo ejercer tus derechos?' : 'How to exercise your rights'}</h3>
                    <p>
                      {loc === 'es'
                        ? 'Escríbenos para conocer, actualizar, rectificar o suprimir tus datos personales.'
                        : 'Write to us to know, update, correct, or delete your personal data.'}
                    </p>
                    <a href="mailto:gerenciavertexsas@gmail.com" className={styles.rightsCalloutLink}>
                      <Mail aria-hidden="true" />
                      gerenciavertexsas@gmail.com
                    </a>
                  </div>
                )}

                <details className={styles.tocMobile}>
                  <summary>
                    {tocLabel}
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <ul>
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`}>
                          <span className={styles.tocNumber}>{section.number}</span>
                          {section.title[loc]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </aside>
            )}

            <div className={styles.content}>
              {sections.map((section) => (
                <section key={section.id} id={section.id} className={styles.section}>
                  <header className={styles.sectionHeader}>
                    {section.number && <span className={styles.sectionNumber}>{section.number}</span>}
                    <h2>{section.title[loc]}</h2>
                  </header>

                  {section.paragraphs?.map((p, i) => (
                    <p key={i}>{p[loc]}</p>
                  ))}

                  {section.list && (
                    <ul className={styles.list}>
                      {section.list.map((item, i) => (
                        <li key={i}>{item[loc]}</li>
                      ))}
                    </ul>
                  )}

                  {section.definitions && (
                    <dl className={styles.definitions}>
                      {section.definitions.map((d, i) => (
                        <div key={i}>
                          <dt>{d.term[loc]}</dt>
                          <dd>{d.definition[loc]}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </section>
              ))}

              {isPrivacy && (
                <div className={styles.mobileRightsCallout}>
                  <h3>{loc === 'es' ? '¿Cómo ejercer tus derechos?' : 'How to exercise your rights'}</h3>
                  <p>
                    {loc === 'es'
                      ? 'Escríbenos para conocer, actualizar, rectificar o suprimir tus datos personales.'
                      : 'Write to us to know, update, correct, or delete your personal data.'}
                  </p>
                  <a href="mailto:gerenciavertexsas@gmail.com" className={styles.rightsCalloutLink}>
                    <Mail aria-hidden="true" />
                    gerenciavertexsas@gmail.com
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
