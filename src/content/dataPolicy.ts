/* ============================================
   POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES
   Basada en la Ley 1581 de 2012 y el Decreto 1377 de 2013 (Colombia).
   Fuente: documento legal interno "Política de Tratamiento de Datos
   Personales" de Vertex S.A.S. Adaptado para el sitio web: se corrigió
   la caracterización como "asociación sin ánimo de lucro" (el documento
   original parece basado en una plantilla de asociación) para reflejar
   que Vertex es una empresa privada, y se sustituyó "asociados/miembros"
   por los términos que sí aplican al sitio (clientes, candidatos,
   colaboradores y visitantes). El NIT y la dirección exacta de domicilio
   no se incluyen porque no fueron suministrados — pendiente de agregar
   cuando la empresa los confirme.
   ============================================ */

export interface PolicySection {
  id: string;
  number: string;
  title: { es: string; en: string };
  paragraphs?: { es: string; en: string }[];
  list?: { es: string; en: string }[];
  definitions?: { term: { es: string; en: string }; definition: { es: string; en: string } }[];
}

export const dataPolicySections: PolicySection[] = [
  {
    id: 'objetivo',
    number: '1',
    title: { es: 'Objetivo y responsable del tratamiento', en: 'Purpose and data controller' },
    paragraphs: [
      {
        es: 'El presente documento formaliza la política de tratamiento de datos personales de los clientes, candidatos, colaboradores, proveedores y demás terceros que interactúan con VERTEX S.A.S. ("Vertex"), ya sea a través de nuestro sitio web, formularios de contacto, procesos de selección o cualquier otro canal.',
        en: 'This document formalizes the personal data processing policy for clients, job candidates, collaborators, suppliers, and other third parties who interact with VERTEX S.A.S. ("Vertex"), whether through our website, contact forms, recruitment processes, or any other channel.',
      },
      {
        es: 'VERTEX S.A.S. es una empresa privada legalmente constituida en Colombia, con presencia en Bogotá y Cartagena, correo electrónico de contacto gerenciavertexsas@gmail.com y líneas de atención +57 300 865 8910 y +57 312 491 6281.',
        en: 'VERTEX S.A.S. is a private company legally established in Colombia, with offices in Bogotá and Cartagena, contact email gerenciavertexsas@gmail.com, and phone lines +57 300 865 8910 and +57 312 491 6281.',
      },
    ],
  },
  {
    id: 'alcance',
    number: '2',
    title: { es: 'Alcance', en: 'Scope' },
    paragraphs: [
      {
        es: 'Esta política aplica a todas las bases de datos de Vertex —incluyendo el formulario de contacto, el formulario de postulación a vacantes y la navegación general por el sitio web— y a los datos personales contenidos en ellas, respecto de cuyo tratamiento VERTEX S.A.S. resulte responsable, en el marco de la Ley 1581 de 2012 y las normas que la modifiquen, adicionen o reglamenten.',
        en: 'This policy applies to all of Vertex\'s databases — including the contact form, the job application form, and general website browsing — and to the personal data contained in them for which VERTEX S.A.S. is responsible, within the framework of Law 1581 of 2012 and the regulations that amend, add to, or implement it.',
      },
    ],
  },
  {
    id: 'definiciones',
    number: '3',
    title: { es: 'Definiciones', en: 'Definitions' },
    paragraphs: [
      {
        es: 'Para efectos de esta política, los siguientes términos —tomados de la Ley 1581 de 2012 y el Decreto 1377 de 2013— tienen los significados que se indican a continuación:',
        en: 'For the purposes of this policy, the following terms — taken from Law 1581 of 2012 and Decree 1377 of 2013 — have the meanings indicated below:',
      },
    ],
    definitions: [
      {
        term: { es: 'Autorización', en: 'Authorization' },
        definition: {
          es: 'Consentimiento previo, expreso e informado del titular para llevar a cabo el tratamiento de datos personales.',
          en: 'The data subject\'s prior, express, and informed consent to carry out the processing of personal data.',
        },
      },
      {
        term: { es: 'Base de datos', en: 'Database' },
        definition: {
          es: 'Conjunto organizado de datos personales que es objeto de tratamiento.',
          en: 'An organized set of personal data that is subject to processing.',
        },
      },
      {
        term: { es: 'Dato personal', en: 'Personal data' },
        definition: {
          es: 'Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.',
          en: 'Any information linked to, or that can be associated with, one or more identified or identifiable natural persons.',
        },
      },
      {
        term: { es: 'Dato sensible', en: 'Sensitive data' },
        definition: {
          es: 'Aquel que afecta la intimidad del titular o cuyo uso indebido puede generar discriminación, como el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, la pertenencia a sindicatos u organizaciones sociales, y los datos de salud, vida sexual o biométricos.',
          en: 'Data that affects the data subject\'s privacy or whose misuse may lead to discrimination, such as racial or ethnic origin, political affiliation, religious or philosophical beliefs, membership in unions or social organizations, and health, sex life, or biometric data.',
        },
      },
      {
        term: { es: 'Encargado del tratamiento', en: 'Data processor' },
        definition: {
          es: 'Persona natural o jurídica que, por sí misma o en asocio con otros, realiza el tratamiento de datos personales por cuenta del responsable del tratamiento.',
          en: 'A natural or legal person who, alone or jointly with others, processes personal data on behalf of the data controller.',
        },
      },
      {
        term: { es: 'Responsable del tratamiento', en: 'Data controller' },
        definition: {
          es: 'Persona natural o jurídica que, por sí misma o en asocio con otros, decide sobre la base de datos y/o el tratamiento de los datos. En esta política, VERTEX S.A.S.',
          en: 'A natural or legal person who, alone or jointly with others, decides on the database and/or the processing of the data. In this policy, VERTEX S.A.S.',
        },
      },
      {
        term: { es: 'Titular', en: 'Data subject' },
        definition: {
          es: 'Persona natural cuyos datos personales son objeto de tratamiento.',
          en: 'The natural person whose personal data is being processed.',
        },
      },
      {
        term: { es: 'Tratamiento', en: 'Processing' },
        definition: {
          es: 'Cualquier operación o conjunto de operaciones sobre datos personales, como la recolección, almacenamiento, uso, circulación o supresión.',
          en: 'Any operation or set of operations performed on personal data, such as collection, storage, use, circulation, or deletion.',
        },
      },
      {
        term: { es: 'Transferencia y transmisión', en: 'Transfer and transmission' },
        definition: {
          es: 'La transferencia ocurre cuando el responsable envía los datos a otro responsable dentro o fuera del país. La transmisión ocurre cuando el tratamiento lo realiza un encargado por cuenta del responsable, dentro o fuera de Colombia.',
          en: 'A transfer occurs when the controller sends the data to another controller inside or outside the country. A transmission occurs when the processing is carried out by a processor on behalf of the controller, inside or outside Colombia.',
        },
      },
    ],
  },
  {
    id: 'tratamiento-informacion',
    number: '4',
    title: { es: 'Tratamiento de la información personal', en: 'Processing of personal information' },
    paragraphs: [
      {
        es: 'Los datos personales que Vertex recolecta, almacena y trata se utilizan de acuerdo con la Constitución, la Ley 1581 de 2012 y esta política, ya sea que el titular los entregue directamente por medio verbal, físico o en línea, o que Vertex los recaude a través de medios lícitos como bases de datos públicas.',
        en: 'The personal data that Vertex collects, stores, and processes is used in accordance with the Constitution, Law 1581 of 2012, and this policy, whether the data subject provides it directly by verbal, physical, or online means, or Vertex collects it through lawful means such as public databases.',
      },
      {
        es: 'Datos sensibles y de menores de edad: en el desarrollo normal de sus operaciones, Vertex no trata datos de niños, niñas o adolescentes. En caso de que resulte imprescindible hacerlo, contará con la autorización de sus representantes legales.',
        en: 'Sensitive data and data of minors: in the normal course of its operations, Vertex does not process the data of children or adolescents. If doing so is ever unavoidable, it will have the authorization of their legal representatives.',
      },
      {
        es: 'Información recibida de terceros: cuando Vertex recibe información personal de terceros, su uso se enmarca dentro de las finalidades autorizadas por los titulares y la actividad propia de Vertex como responsable del tratamiento. Con estos terceros, Vertex mantiene acuerdos que establecen sus obligaciones en materia de protección de datos.',
        en: 'Information received from third parties: when Vertex receives personal information from third parties, its use is limited to the purposes authorized by the data subjects and Vertex\'s own activity as data controller. Vertex maintains agreements with these third parties establishing their data-protection obligations.',
      },
    ],
  },
  {
    id: 'finalidades',
    number: '5',
    title: { es: 'Finalidades del tratamiento', en: 'Purposes of processing' },
    paragraphs: [
      {
        es: 'En cada recolección de datos, Vertex informará al titular la finalidad específica antes de solicitar su autorización. En general, las finalidades del tratamiento incluyen:',
        en: 'For each data collection, Vertex will inform the data subject of the specific purpose before requesting their authorization. In general, the purposes of processing include:',
      },
    ],
    list: [
      {
        es: 'Gestionar solicitudes comerciales o institucionales, elaborar propuestas y responder a la persona o entidad interesada.',
        en: 'Managing commercial or institutional inquiries, preparing proposals, and responding to the interested person or entity.',
      },
      {
        es: 'Invitar a eventos propios o de terceros que Vertex considere de interés para sus contactos.',
        en: 'Inviting contacts to Vertex\'s own events or third-party events considered of interest to them.',
      },
      {
        es: 'Atender peticiones, quejas y reclamos formulados por clientes, candidatos y demás terceros.',
        en: 'Handling requests, complaints, and claims submitted by clients, candidates, and other third parties.',
      },
      {
        es: 'Atender requerimientos de autoridades en ejercicio de sus funciones.',
        en: 'Responding to requirements from authorities in the exercise of their functions.',
      },
      {
        es: 'Evaluar la idoneidad de un candidato para una vacante específica, gestionar el proceso de selección y comunicar su resultado. Los datos de un proceso no se reutilizan para futuras vacantes sin nueva autorización, salvo que el titular autorice expresamente conformar un banco de hojas de vida.',
        en: 'Evaluating a candidate\'s fit for a specific role, managing the selection process, and communicating its outcome. Data from one process is not reused for future openings without new authorization, unless the data subject expressly authorizes inclusion in a talent pool.',
      },
      {
        es: 'Compartir información con terceros contratados que prestan servicios a Vertex para el desarrollo eficiente de sus labores.',
        en: 'Sharing information with contracted third parties who provide services to Vertex to support the efficient development of its work.',
      },
      {
        es: 'Transferir información a terceros que hayan sido autorizados expresamente por el titular.',
        en: 'Transferring information to third parties expressly authorized by the data subject.',
      },
      {
        es: 'Realizar análisis estadísticos e históricos con base en los datos tratados; en tal caso, los resultados podrán compartirse con terceros sin incluir información personal identificable, salvo autorización del titular.',
        en: 'Conducting statistical and historical analysis based on the data processed; in such cases, results may be shared with third parties without identifiable personal information, unless authorized by the data subject.',
      },
      {
        es: 'Contactar a los titulares por correo electrónico, redes sociales, correo físico, mensajería instantánea o teléfono para las finalidades previstas en esta política.',
        en: 'Contacting data subjects by email, social media, physical mail, instant messaging, or phone for the purposes set out in this policy.',
      },
    ],
  },
  {
    id: 'obligaciones',
    number: '6',
    title: { es: 'Obligaciones del responsable del tratamiento', en: 'Obligations of the data controller' },
    paragraphs: [
      {
        es: 'Sin perjuicio de las demás disposiciones de la Ley 1581 de 2012, Vertex cumple con las siguientes obligaciones:',
        en: 'Without prejudice to the other provisions of Law 1581 of 2012, Vertex complies with the following obligations:',
      },
    ],
    list: [
      { es: 'Garantizar en todo momento el pleno ejercicio del derecho de hábeas data del titular.', en: 'Guaranteeing, at all times, the data subject\'s full exercise of the right of habeas data.' },
      { es: 'Solicitar y conservar, cuando resulte necesario, copia de la autorización otorgada por el titular.', en: 'Requesting and retaining, when necessary, a copy of the authorization granted by the data subject.' },
      { es: 'Informar debidamente al titular sobre la finalidad de la recolección y los derechos que le asisten.', en: 'Duly informing the data subject about the purpose of the collection and the rights available to them.' },
      { es: 'Conservar la información bajo condiciones de seguridad que impidan su adulteración, pérdida o acceso no autorizado.', en: 'Keeping the information under security conditions that prevent its alteration, loss, or unauthorized access.' },
      { es: 'Garantizar que la información sea veraz, completa, exacta, actualizada, comprobable y comprensible.', en: 'Ensuring that the information is truthful, complete, accurate, up to date, verifiable, and understandable.' },
      { es: 'Rectificar la información cuando sea incorrecta.', en: 'Correcting the information when it is inaccurate.' },
      { es: 'Tramitar las consultas y reclamos formulados por los titulares en los términos señalados por la ley.', en: 'Processing inquiries and claims submitted by data subjects within the timeframes set by law.' },
      { es: 'Adoptar procedimientos internos para garantizar el cumplimiento de la ley, en especial la atención de consultas y reclamos.', en: 'Adopting internal procedures to ensure compliance with the law, particularly in handling inquiries and claims.' },
      { es: 'Informar a la autoridad de protección de datos ante violaciones a los códigos de seguridad que pongan en riesgo la información de los titulares.', en: 'Notifying the data protection authority of security breaches that put data subjects\' information at risk.' },
      { es: 'Cumplir las instrucciones y requerimientos de la Superintendencia de Industria y Comercio.', en: 'Complying with the instructions and requirements of the Superintendence of Industry and Commerce (SIC).' },
    ],
  },
  {
    id: 'derechos',
    number: '7',
    title: { es: 'Derechos del titular', en: 'Rights of the data subject' },
    paragraphs: [
      {
        es: 'Todo titular de datos personales tratados por Vertex tiene derecho a:',
        en: 'Every data subject whose personal data is processed by Vertex has the right to:',
      },
    ],
    list: [
      { es: 'Conocer, actualizar y rectificar sus datos personales frente a Vertex, incluyendo datos parciales, inexactos, incompletos o cuyo tratamiento no haya sido autorizado.', en: 'Know, update, and correct their personal data held by Vertex, including partial, inaccurate, incomplete, or unauthorized data.' },
      { es: 'Solicitar prueba de la autorización otorgada a Vertex, salvo que la ley exceptúe este requisito.', en: 'Request proof of the authorization granted to Vertex, except where the law exempts this requirement.' },
      { es: 'Ser informado, previa solicitud, sobre el uso que Vertex ha dado a sus datos personales.', en: 'Be informed, upon request, about how Vertex has used their personal data.' },
      { es: 'Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la normativa de protección de datos.', en: 'File complaints with the Superintendence of Industry and Commerce for violations of data protection regulations.' },
      { es: 'Revocar la autorización y/o solicitar la supresión del dato cuando no se respeten los principios, derechos y garantías legales y constitucionales.', en: 'Revoke authorization and/or request deletion of data when legal and constitutional principles, rights, and guarantees are not respected.' },
      { es: 'Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento.', en: 'Access, free of charge, their personal data that has been processed.' },
    ],
  },
  {
    id: 'autorizacion',
    number: '8',
    title: { es: 'Autorización y consentimiento', en: 'Authorization and consent' },
    paragraphs: [
      {
        es: 'Cuando resulte obligatorio, la recolección, almacenamiento, uso, circulación o supresión de datos personales por parte de Vertex se realiza con el consentimiento previo, libre, expreso e informado del titular.',
        en: 'When required, the collection, storage, use, circulation, or deletion of personal data by Vertex is carried out with the data subject\'s prior, free, express, and informed consent.',
      },
      {
        es: 'Medios para otorgar la autorización: la autorización puede constar en un documento físico o electrónico, un mensaje de datos, una grabación de voz, o cualquier mecanismo técnico o tecnológico idóneo que permita verificar el consentimiento del titular — incluyendo las casillas de aceptación de nuestros formularios en el sitio web.',
        en: 'Ways to grant authorization: authorization may be given through a physical or electronic document, a data message, a voice recording, or any suitable technical or technological mechanism that allows the data subject\'s consent to be verified — including the consent checkboxes on our website forms.',
      },
      {
        es: 'Prueba de la autorización: Vertex conserva registros o mecanismos técnicos idóneos para acreditar la autorización otorgada por los titulares de datos personales.',
        en: 'Proof of authorization: Vertex keeps records or suitable technical mechanisms to demonstrate the authorization granted by data subjects.',
      },
    ],
  },
  {
    id: 'fotos-videos',
    number: '9',
    title: { es: 'Fotos, videos y publicaciones', en: 'Photos, videos, and publications' },
    paragraphs: [
      {
        es: 'En el desarrollo de sus actividades, Vertex podrá capturar imágenes fotográficas y grabaciones de audio y video, directamente o mediante proveedores contratados para tal fin.',
        en: 'In the course of its activities, Vertex may capture photographic images and audio or video recordings, either directly or through contracted providers.',
      },
      {
        es: 'Este material se utiliza para (i) dejar constancia de las actividades desarrolladas, (ii) publicarlo en campañas informativas en distintos medios, y (iii) incluirlo en material audiovisual impreso, digital o electrónico, así como en el sitio web y redes sociales de Vertex. Vertex revisa cuidadosamente el material antes de publicarlo, para no atentar contra la dignidad, intimidad o buen nombre de las personas que aparezcan en él.',
        en: 'This material is used to (i) document the activities carried out, (ii) publish it in informational campaigns across different media, and (iii) include it in printed, digital, or electronic audiovisual material, as well as on Vertex\'s website and social media. Vertex carefully reviews this material before publishing it, to avoid infringing on the dignity, privacy, or reputation of the people who appear in it.',
      },
      {
        es: 'Quienes autoricen el uso de su imagen o voz reconocen que no tienen derecho a compensación económica, comercial o de otro tipo, y que dicho uso no transmite derechos de propiedad intelectual sobre el material.',
        en: 'Those who authorize the use of their image or voice acknowledge that they are not entitled to financial, commercial, or other compensation, and that such use does not transfer any intellectual property rights over the material.',
      },
    ],
  },
  {
    id: 'peticiones',
    number: '10',
    title: { es: 'Atención de peticiones, consultas y reclamos', en: 'Handling requests, inquiries, and claims' },
    paragraphs: [
      {
        es: 'Área responsable: la gerencia de Vertex atiende todas las peticiones, consultas, quejas y reclamos de los titulares relacionados con sus derechos de conocer, actualizar, rectificar y suprimir sus datos personales.',
        en: 'Responsible area: Vertex\'s management team handles all requests, inquiries, complaints, and claims from data subjects related to their rights to know, update, correct, and delete their personal data.',
      },
      {
        es: 'Consultas: se atienden en un plazo máximo de diez (10) días hábiles desde su recepción. Si no es posible cumplir este plazo, se informará al interesado el motivo de la demora y la nueva fecha de respuesta, la cual no podrá superar cinco (5) días hábiles adicionales.',
        en: 'Inquiries: handled within a maximum of ten (10) business days from receipt. If this deadline cannot be met, the requester will be informed of the reason for the delay and the new response date, which may not exceed an additional five (5) business days.',
      },
      {
        es: 'Reclamos: cuando el titular considere que su información debe corregirse, actualizarse o suprimirse, o advierta un posible incumplimiento de la ley, podrá presentar un reclamo identificándose, describiendo los hechos y adjuntando los documentos que quiera hacer valer. Si el reclamo está incompleto, se solicitará al interesado subsanarlo dentro de los cinco (5) días siguientes; transcurridos dos (2) meses sin respuesta, se entenderá desistido.',
        en: 'Claims: when a data subject believes their information should be corrected, updated, or deleted, or suspects a possible breach of the law, they may file a claim identifying themselves, describing the facts, and attaching any supporting documents. If the claim is incomplete, the requester will be asked to correct it within five (5) days; if two (2) months pass without a response, the claim will be considered withdrawn.',
      },
      {
        es: 'Una vez recibido un reclamo completo, se incluirá en la base de datos la leyenda "reclamo en trámite" dentro de los dos (2) días hábiles siguientes, la cual se mantendrá hasta su resolución. El plazo máximo para resolver un reclamo es de quince (15) días hábiles, prorrogables hasta ocho (8) días hábiles adicionales si se informa oportunamente al interesado.',
        en: 'Once a complete claim is received, the database will be flagged "claim in process" within the following two (2) business days, and this flag will remain until the claim is resolved. The maximum time to resolve a claim is fifteen (15) business days, extendable by up to eight (8) additional business days if the requester is informed in a timely manner.',
      },
      {
        es: 'Canal para ejercer estos derechos: los titulares pueden enviar sus peticiones, consultas o reclamos al correo electrónico gerenciavertexsas@gmail.com.',
        en: 'Channel to exercise these rights: data subjects may send their requests, inquiries, or claims to gerenciavertexsas@gmail.com.',
      },
    ],
  },
  {
    id: 'seguridad',
    number: '11',
    title: { es: 'Medidas de seguridad', en: 'Security measures' },
    paragraphs: [
      {
        es: 'Vertex implementa medidas técnicas, humanas y administrativas razonables para proteger los datos personales frente al acceso no autorizado, la pérdida, la alteración o el uso indebido, de acuerdo con la sensibilidad de la información tratada.',
        en: 'Vertex implements reasonable technical, human, and administrative measures to protect personal data against unauthorized access, loss, alteration, or misuse, in accordance with the sensitivity of the information processed.',
      },
    ],
  },
  {
    id: 'normatividad',
    number: '12',
    title: { es: 'Normatividad vigente', en: 'Applicable law' },
    paragraphs: [
      {
        es: 'Esta política se rige por la Ley 1581 de 2012, el Decreto 1377 de 2013 y las demás normas que los modifiquen, adicionen o reglamenten.',
        en: 'This policy is governed by Law 1581 of 2012, Decree 1377 of 2013, and any other regulations that amend, add to, or implement them.',
      },
    ],
  },
  {
    id: 'vigencia',
    number: '13',
    title: { es: 'Vigencia', en: 'Effective date' },
    paragraphs: [
      {
        es: 'Esta política entra en vigencia en septiembre de 2026. Los datos personales tratados por Vertex permanecerán en sus bases de datos hasta que se cumpla la finalidad para la cual fueron recolectados. Vertex se reserva la facultad de revisar o modificar esta política en cualquier momento y publicará en este sitio web cualquier cambio; los cambios sustanciales se comunicarán a los titulares indicando la fecha desde la cual rige la nueva versión.',
        en: 'This policy takes effect in September 2026. Personal data processed by Vertex will remain in its databases until the purpose for which it was collected has been fulfilled. Vertex reserves the right to review or modify this policy at any time and will publish any changes on this website; substantial changes will be communicated to data subjects, indicating the date from which the new version takes effect.',
      },
    ],
  },
];
