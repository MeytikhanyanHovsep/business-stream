import { PortableText, PortableTextComponents } from "next-sanity";
import Link from "next/link";

const customComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className=" text-[clamp(18px,2.5vw,22px)] font-medium leading-tight text-white mt-10 mb-[14px]">
        {children}
      </h2>
    ),
    normal: ({ children }) => <p>{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-[1.4em] space-y-[6px]">{children}</ul>
    ),
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
  },
  types: {
    processingTable: ({ value }) => (
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr className="bg-[rgba(255,255,255,0.05)]">
              <th className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.55)] font-medium text-[12px] uppercase tracking-[0.07em] text-left">
                Цель обработки
              </th>
              <th className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.55)] font-medium text-[12px] uppercase tracking-[0.07em] text-left">
                Персональные данные
              </th>
              <th className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.55)] font-medium text-[12px] uppercase tracking-[0.07em] text-left">
                Правовые основания
              </th>
              <th className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.55)] font-medium text-[12px] uppercase tracking-[0.07em] text-left">
                Виды обработки
              </th>
            </tr>
          </thead>
          <tbody>
            {value.rows?.map((row: any, index: number) => (
              <tr key={index}>
                <td className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] align-top">
                  {row.purpose}
                </td>
                <td className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] align-top">
                  {row.personalData}
                </td>
                <td className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] align-top">
                  {row.legalBasis}
                </td>
                <td className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] align-top">
                  {row.actions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
};

type Props = { data: any };

export default function Privacy({ data }: Props) {
  const isContentEmpty =
    !data?.content ||
    (Array.isArray(data.content) &&
      data.content.length === 1 &&
      data.content[0].children?.length === 1 &&
      data.content[0].children[0].text === "");

  return (
    <>
      <div className="bg-[#0a0a0a] text-white text-[16px] leading-[1.65] antialiased min-h-screen">
        <main className="max-w-[800px] mx-auto pt-[100px] px-6 pb-[80px]">
          <span className="block text-[rgba(255,255,255,0.38)] text-[13px] font-normal uppercase tracking-[0.08em] mb-5">
            {data?.badge || "Актуальная редакция"}
          </span>

          <h1 className=" text-[clamp(28px,4vw,44px)] font-medium leading-[1.1] tracking-[-0.02em] text-white mb-3">
            {data?.title ||
              "Политика в отношении обработки персональных данных"}
          </h1>

          <p className="text-[rgba(255,255,255,0.5)] text-[15px] mb-[48px] pb-8 border-b border-[rgba(255,255,255,0.08)]">
            {data?.preambleStart ||
              "Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению их безопасности, предпринимаемые "}
            <strong className="font-medium text-white">
              {data?.operatorName || "Алюшина Ангелина Олеговна"}
            </strong>
            {data?.preambleEnd || " (далее — Оператор)."}
          </p>

          <div className="space-y-[14px] text-[rgba(255,255,255,0.72)]">
            {!isContentEmpty ? (
              <PortableText
                value={data.content}
                components={customComponents}
              />
            ) : (
              <>
                <h2 className=" text-[clamp(18px,2.5vw,22px)] font-medium leading-[1.25] text-white mt-10 mb-[14px]">
                  1. Общие положения
                </h2>
                <p>
                  1.1. Оператор ставит своей важнейшей целью и условием
                  осуществления своей деятельности соблюдение прав и свобод
                  человека и гражданина при обработке его персональных данных, в
                  том числе защиты прав на неприкосновенность частной жизни,
                  личную и семейную тайну.
                </p>
                <p>
                  1.2. Настоящая политика Оператора в отношении обработки
                  персональных данных (далее — Политика) применяется ко всей
                  информации, которую Оператор может получить о посетителях
                  веб-сайта{" "}
                  <strong className="text-white">
                    http://bzstream-podcast.ru
                  </strong>
                  .
                </p>

                <h2 className="text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
                  2. Основные понятия, используемые в Политике
                </h2>
                <p>
                  2.1.{" "}
                  <strong>
                    Автоматизированная обработка персональных данных
                  </strong>{" "}
                  — обработка персональных данных с помощью средств
                  вычислительной техники.
                </p>
                <p>
                  2.2. <strong>Блокирование персональных данных</strong> —
                  временное прекращение обработки персональных данных (за
                  исключением случаев, если обработка необходима для уточнения
                  персональных данных).
                </p>
                <p>
                  2.3. <strong>Веб-сайт</strong> — совокупность графических и
                  информационных материалов, а также программ для ЭВМ и баз
                  данных, обеспечивающих их доступность в сети интернет по
                  сетевому адресу http://bzstream-podcast.ru.
                </p>
                <p>
                  2.4.{" "}
                  <strong>Информационная система персональных данных</strong> —
                  совокупность содержащихся в базах данных персональных данных и
                  обеспечивающих их обработку информационных технологий и
                  технических средств.
                </p>
                <p>
                  2.5. <strong>Обезличивание персональных данных</strong> —
                  действия, в результате которых невозможно определить без
                  использования дополнительной информации принадлежность
                  персональных данных конкретному Пользователю.
                </p>
                <p>
                  2.6. <strong>Обработка персональных данных</strong> — любое
                  действие (операция) или совокупность действий (операций),
                  совершаемых с использованием средств автоматизации или без
                  использования таких средств с персональными данными, включая
                  сбор, запись, систематизацию, накопление, хранение, уточнение
                  (обновление, изменение), извлечение, использование, передачу
                  (распространение, предоставление, доступ), обезличивание,
                  блокирование, удаление, уничтожение персональных данных.
                </p>
                <p>
                  2.7. <strong>Оператор</strong> — государственный орган,
                  муниципальный орган, юридическое или физическое лицо,
                  самостоятельно или совместно с другими лицами организующие
                  и/или осуществляющие обработка персональных данных.
                </p>
                <p>
                  2.8. <strong>Персональные данные</strong> — любая информация,
                  относящаяся прямо или косвенно к определенному или
                  определяемому Пользователю веб-сайта
                  http://bzstream-podcast.ru.
                </p>
                <p>
                  2.9.{" "}
                  <strong>
                    Персональные данные, разрешённые субъектом для
                    распространения
                  </strong>{" "}
                  — персональные данные, доступ неограниченного круга лиц к
                  которым предоставлен субъектом путём дачи согласия.
                </p>
                <p>
                  2.10. <strong>Пользователь</strong> — любой посетитель
                  веб-сайта http://bzstream-podcast.ru.
                </p>
                <p>
                  2.11. <strong>Предоставление персональных данных</strong> —
                  действия, направленные на раскрытие персональных данных
                  определённому лицу или определённому кругу лиц.
                </p>
                <p>
                  2.12. <strong>Распространение персональных данных</strong> —
                  любые действия, направленные на раскрытие персональных данных
                  неопределённому кругу лиц.
                </p>
                <p>
                  2.13.{" "}
                  <strong>Трансграничная передача персональных данных</strong> —
                  передача персональных данных на территорию иностранного
                  государства.
                </p>
                <p>
                  2.14. <strong>Уничтожение персональных данных</strong> —
                  действия, в результате которых персональные данные
                  уничтожаются безвозвратно.
                </p>

                <h2 className="text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
                  3. Основные права и обязанности Оператора
                </h2>
                <p>3.1. Оператор имеет право:</p>
                <ul className="list-disc pl-[1.4em] space-y-[6px]">
                  <li>
                    получать от субъекта персональных данных достоверную
                    информацию и/или документы;
                  </li>
                  <li>
                    в случае отзыва согласия продолжить обработку при наличии
                    оснований, указанных в Законе о персональных данных;
                  </li>
                  <li>
                    самостоятельно определять состав и перечень мер, необходимых
                    для выполнения обязанностей.
                  </li>
                </ul>
                <p>3.2. Оператор обязан:</p>
                <ul className="list-disc pl-[1.4em] space-y-[6px]">
                  <li>
                    предоставлять субъекту по его просьбе информацию об
                    обработке;
                  </li>
                  <li>
                    организовывать обработку в порядке, установленном
                    законодательством РФ;
                  </li>
                  <li>
                    отвечать на обращения и запросы субъектов в установленные
                    сроки;
                  </li>
                  <li>
                    сообщать в уполномоченный орган необходимую информацию в
                    течение 10 дней;
                  </li>
                  <li>
                    публиковать или обеспечивать неограниченный доступ к
                    настоящей Политике;
                  </li>
                  <li>
                    принимать правовые, организационные и технические меры для
                    защиты данных;
                  </li>
                  <li>
                    прекратить передачу и уничтожить данные в случаях,
                    предусмотренных законом.
                  </li>
                </ul>

                <h2 className=" text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
                  4. Основные права и обязанности субъектов персональных данных
                </h2>
                <p>4.1. Субъекты персональных данных имеют право:</p>
                <ul className="list-disc pl-[1.4em] space-y-[6px]">
                  <li>
                    получать информацию, касающуюся обработки его персональных
                    данных;
                  </li>
                  <li>
                    требовать уточнения, блокирования или уничтожения данных,
                    если они являются неполными или неточными;
                  </li>
                  <li>
                    выдвигать условие предварительного согласия при обработке в
                    целях продвижения товаров;
                  </li>
                  <li>на отзыв согласия на обработку персональных данных;</li>
                  <li>
                    обжаловать действия Оператора в уполномоченный орган или в
                    судебном порядке.
                  </li>
                </ul>
                <p>4.2. Субъекты персональных данных обязаны:</p>
                <ul className="list-disc pl-[1.4em] space-y-[6px]">
                  <li>предоставлять Оператору достоверные данные о себе;</li>
                  <li>
                    сообщать Оператору об уточнении своих персональных данных.
                  </li>
                </ul>

                <h2 className=" text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
                  5. Принципы обработки персональных данных
                </h2>
                <p>
                  5.1. Обработка осуществляется на законной и справедливой
                  основе.
                </p>
                <p>
                  5.2. Обработка ограничивается достижением конкретных, заранее
                  определённых целей.
                </p>
                <p>
                  5.3. Не допускается объединение баз данных, созданных для
                  несовместимых целей.
                </p>
                <p>5.4. Обработке подлежат только данные, отвечающие целям.</p>
                <p>
                  5.5. Содержание и объём данных соответствуют заявленным целям.
                </p>
                <p>
                  5.6. Обеспечивается точность, достаточность и актуальность
                  данных.
                </p>
                <p>
                  5.7. Хранение осуществляется не дольше, чем этого требуют цели
                  обработки.
                </p>

                <h2 className=" text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
                  6. Цели обработки персональных данных
                </h2>
                <div className="overflow-x-auto my-4">
                  <table className="w-full border-collapse text-[14px]">
                    <thead>
                      <tr className="bg-[rgba(255,255,255,0.05)]">
                        <th className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.55)] font-medium text-[12px] uppercase tracking-[0.07em] text-left">
                          Цель обработки
                        </th>
                        <th className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.55)] font-medium text-[12px] uppercase tracking-[0.07em] text-left">
                          Персональные данные
                        </th>
                        <th className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.55)] font-medium text-[12px] uppercase tracking-[0.07em] text-left">
                          Правовые основания
                        </th>
                        <th className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.55)] font-medium text-[12px] uppercase tracking-[0.07em] text-left">
                          Виды обработки
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] align-top">
                          Информирование Пользователя; коммуникация для оказания
                          услуг
                        </td>
                        <td className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] align-top">
                          ФИО, электронный адрес, номера телефонов
                        </td>
                        <td className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] align-top">
                          ФЗ № 149-ФЗ
                        </td>
                        <td className="p-[10px_14px] border border-[rgba(255,255,255,0.1)] align-top">
                          Сбор, запись, хранение, уничтожение
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className=" text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
                  7. Условия обработки персональных данных
                </h2>
                <p>7.1. Обработка осуществляется с согласия субъекта.</p>
                <p>
                  7.2. Обработка необходима для достижения целей,
                  предусмотренных законом.
                </p>
                <p>
                  7.3. Обработка необходима для правосудия и исполнения судебных
                  актов.
                </p>
                <p>7.4. Обработка необходима для исполнения договора.</p>
                <p>
                  7.5. Обработка необходима для осуществления прав Оператора.
                </p>

                <h2 className=" text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
                  8. Порядок сбора, хранения, передачи данных
                </h2>
                <p>
                  8.1. Оператор обеспечивает сохранность данных и исключает
                  доступ неуполномоченных лиц.
                </p>
                <p>
                  8.2. Данные никогда не будут переданы третьим лицам без
                  согласия, кроме случаев исполнения закона.
                </p>
                <p>
                  8.3. Для актуализации данных Пользователь может написать на{" "}
                  <strong>info@bzstream-studio.ru</strong>.
                </p>
                <p>
                  8.4. Пользователь может в любой момент отозвать согласие через
                  электронную почту.
                </p>
                <p>
                  8.5. Оператор не несёт ответственности за действия сторонних
                  сервисов (платежные системы и т.д.).
                </p>

                <h2 className=" text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
                  9. Перечень действий с персональными данными
                </h2>
                <p>
                  9.1. Сбор, запись, систематизация, накопление, хранение,
                  уточнение, использование, передача, обезличивание,
                  блокирование, удаление.
                </p>
                <p>
                  9.2. Автоматизированная обработка по
                  информационно-телекоммуникационным сетям.
                </p>

                <h2 className=" text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
                  10. Трансграничная передача персональных данных
                </h2>
                <p>
                  10.1. Оператор обязан уведомить уполномоченный орган до начала
                  трансграничной передачи.
                </p>
                <p>
                  10.2. Оператор обязан получить необходимые сведения от
                  иностранных органов власти до подачи уведомления.
                </p>

                <h2 className=" text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
                  11. Конфиденциальность персональных данных
                </h2>
                <p>
                  Оператор и иные лица обязаны не раскрывать данные третьим
                  лицам без согласия субъекта.
                </p>

                <h2 className=" text-[clamp(18px,2.5vw,22px)] font-medium text-white mt-10 mb-[14px]">
                  12. Заключительные положения
                </h2>
                <p>
                  12.1. Разъяснения можно получить по почте{" "}
                  <strong>info@bzstream-studio.ru</strong>.
                </p>
                <p>
                  12.2. Политика действует бессрочно до замены её новой версией.
                </p>
                <p>
                  12.3. Актуальная версия расположена по адресу:{" "}
                  <strong>http://bzstream-podcast.ru/privacy</strong>.
                </p>
              </>
            )}

            <div className="bg-[rgba(251,65,20,0.07)] border-l-[3px] border-[rgba(251,65,20,0.5)] rounded-r-[6px] p-[14px_18px] my-10 text-[rgba(255,255,255,0.72)] text-[14px] leading-[1.6]">
              {data?.calloutText || "Также ознакомьтесь с документом"}{" "}
              <Link
                href={data?.calloutLinkUrl || "/consent"}
                target="_blank"
                className="text-[rgba(255,255,255,0.65)] underline underline-offset-[3px] hover:text-white transition-colors"
              >
                {data?.calloutLinkText ||
                  "«Согласие на обработку персональных данных»"}
              </Link>
              , которое вы предоставляете при отправке контактной формы.
            </div>
          </div>
        </main>

        <footer className="border-t border-[rgba(255,255,255,0.07)] p-6 text-center text-[rgba(255,255,255,0.3)] text-[13px]">
          <p>
            © Business Stream. Все права защищены. &nbsp;|&nbsp;{" "}
            <Link
              href="/index2"
              className="text-[rgba(255,255,255,0.45)] no-underline hover:text-white transition-colors"
            >
              Главная
            </Link>{" "}
            &nbsp;|&nbsp;{" "}
            <Link
              href="/consent"
              target="_blank"
              className="text-[rgba(255,255,255,0.45)] no-underline hover:text-white transition-colors"
            >
              Согласие на обработку ПД
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
