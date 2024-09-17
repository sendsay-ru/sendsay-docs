---
sidebar_position: 2
sidebar_label: 'Как перейти в Sendsay'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Details from '@theme/Details';
import exportContactsSendpulse from '/img/getting-started/how-to-migrate-to-sendsay/export-contacts-from-sendpulse.png';
import exportContactsUnisender from '/img/getting-started/how-to-migrate-to-sendsay/export-contacts-from-unisender.png';
import exportContactsMailchimp from '/img/getting-started/how-to-migrate-to-sendsay/export-contacts-from-mailchimp.png';
import exportContactsGetresponse1 from '/img/getting-started/how-to-migrate-to-sendsay/export-contacts-from-getrespones1.png';
import exportContactsGetresponse2 from '/img/getting-started/how-to-migrate-to-sendsay/export-contacts-from-getrespones2.png';
import exportContactsGetresponse3 from '/img/getting-started/how-to-migrate-to-sendsay/export-contacts-from-getrespones3.png';
import exportContactsDashamail from '/img/getting-started/how-to-migrate-to-sendsay/export-contacts-from-dashamail.png';
import exportTemplateSendpulse from '/img/getting-started/how-to-migrate-to-sendsay/export-template-from-Sendpulse.png';
import exportTemplateUnisender1 from '/img/getting-started/how-to-migrate-to-sendsay/export-template-from-unisender1.png';
import exportTemplateUnisender2 from '/img/getting-started/how-to-migrate-to-sendsay/export-template-from-unisender2.png';
import exportTemplateMailchimp from '/img/getting-started/how-to-migrate-to-sendsay/export-template-from-mailchimp.png';
import exportTemplateGetresponse from '/img/getting-started/how-to-migrate-to-sendsay/export-template-from-getresponse.png';
import SupportLink from '@site/src/components/SupportLink';

# Как перейти в Sendsay из другого сервиса рассылок

Миграция из другого сервиса рассылок проще, чем кажется. Чтобы перейти в&nbsp;Sendsay&nbsp;&mdash; полностью российское решение для автоматизации маркетинга,&nbsp;&mdash; необходимо:

- перенести и&nbsp;настроить базу контактов;
- перенести шаблоны писем;
- добавить и&nbsp;подтвердить отправителей писем;
- настроить email-аутентификацию;
- при необходимости отключить API-интеграцию со&nbsp;старым сервисом рассылок и&nbsp;настроить интеграцию с&nbsp;Sendsay.

Теперь пошагово, как всё это сделать:

## Перенос и&nbsp;настройка базы

### 1. Настройте добавление новых подписчиков в&nbsp;Sendsay

Начните переезд в&nbsp;Sendsay с&nbsp;проверки&nbsp;&mdash; откуда к&nbsp;вам приходят подписчики. Подписчиков можно добавлять двумя способами:

- Через форму на&nbsp;сайте. Чтобы подписчики могли оставить свои контакты и&nbsp;подписаться на&nbsp;вашу рассылку, создайте форму и&nbsp;установите её&nbsp;на&nbsp;нужные страницы сайта. Если вы&nbsp;создавали формы подписки в&nbsp;других сервисах рассылок, их&nbsp;надо будет пересобрать в&nbsp;Sendsay.

  [Как создать форму сбора подписчиков](https://docs.sendsay.ru/forms/signup-forms)

- Через интеграцию с&nbsp;другими системами. После настройки новые подписчики при поступлении в&nbsp;CRM-систему будут добавляться и&nbsp;в&nbsp;Sendsay. Интеграцию с&nbsp;CRM-системой нужно настраивать самостоятельно&nbsp;&mdash; если у&nbsp;вас возникнут вопросы, <SupportLink>напишите в чат поддержки</SupportLink>.

  [Как настроить интеграцию — описание в API](https://sendsay.ru/api/api.html#%D0%98%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F)

Важно сделать этот шаг до&nbsp;переноса базы, иначе новые подписчики будут по-прежнему приходить в&nbsp;старый сервис рассылок, пока вы&nbsp;не&nbsp;перенаправите их&nbsp;в&nbsp;Sendsay.

### 2. Экспортируйте базу контактов

Экспорт базы зависит от&nbsp;сервиса, в&nbsp;котором вы&nbsp;работали раньше. Как это сделать в&nbsp;популярных сервисах рассылок:

<Tabs>
<TabItem value="key1" label="В SendPulse">

Зайдите в&nbsp;свой аккаунт SendPulse и&nbsp;выберите в&nbsp;левом меню **Адресные книги**. Затем выберите нужный список контактов, нажмите на&nbsp;три точки справа и&nbsp;выберите пункт **Экспортировать в&nbsp;CSV**.

<p align="center">
  <img src={exportContactsSendpulse} alt="Export contacts from Sendpulse" />
</p>

Если у&nbsp;вас несколько адресных книг, нужно экспортировать каждую отдельно.

:::tip Важно
Экспортировать контакты из&nbsp;SendPulse можно только на&nbsp;тарифе Standart и&nbsp;выше.
:::

</TabItem>
<TabItem value="key2" label="В Unisender">

Зайдите в&nbsp;свой аккаунт Unisender и&nbsp;выберите в&nbsp;левом меню **Контакты**. Во&nbsp;вкладке **Все контакты** выделите все необходимые контакты, затем нажмите &laquo;Действия&raquo; и&nbsp;выберите **Экспортировать**.

<p align="center">
  <img src={exportContactsUnisender} alt="Export contacts from Unisender" />
</p>

После этого сервис предложит выбрать формат экспорта&nbsp;&mdash; нам нужен CSV.

</TabItem>
<TabItem value="key3" label="В Mailchimp">

Зайдите в&nbsp;свой аккаунт Mailchimp и&nbsp;выберите в&nbsp;левом меню **Audience**, затем во&nbsp;вкладке **All contacts** нажмите **Export Audience**.

<p align="center">
  <img src={exportContactsMailchimp} alt="Export contacts from Mailchimp" />
</p>

После этого начнется загрузка CSV-файла.

</TabItem>
<TabItem value="key4" label="В GetResponse">

Зайдите в&nbsp;свой аккаунт GetResponse и&nbsp;выберите в&nbsp;верхней панели **Контакты**, затем перейдите во&nbsp;вкладку Поиск и&nbsp;нажмите **Расширенный поиск**:

<p align="center">
  <img src={exportContactsGetresponse1} alt="Export contacts from Getresponse" />
</p>

В&nbsp;первом выпадающем меню отметьте нужные списки и&nbsp;нажмите &laquo;Применить&raquo;. После этого нажмите на&nbsp;значок Действия (три вертикальные точки) рядом с&nbsp;общим количеством контактов и&nbsp;выберите **Экспорт**.

<p align="center">
  <img src={exportContactsGetresponse2} alt="Export contacts from Getresponse" />
</p>

Укажите имя файла и&nbsp;его формат (рекомендуем CSV), затем нажмите &laquo;Экспорт нового файла&raquo;. После создания файл появится в&nbsp;списке загрузок: откройте меню и&nbsp;нажмите &laquo;Скачать&raquo;.

<p align="center">
  <img width="50%" src={exportContactsGetresponse3} alt="Export contacts from Getresponse" />
</p>

</TabItem>
<TabItem value="key5" label="В DashaMail">

Зайдите в&nbsp;свой аккаунт DashaMail и&nbsp;выберите и&nbsp;выберите в&nbsp;верхней панели **Адресные базы**. Затем откройте нужный список контактов, нажмите **Экспорт** и&nbsp;выберите формат файла CSV.

<p align="center">
  <img src={exportContactsDashamail} alt="Export contacts from DashaMail" />
</p>

Если у&nbsp;вас несколько адресных баз, нужно экспортировать каждую отдельно.

</TabItem>
</Tabs>

### 3. Подготовьте файл для импорта

Проверьте формат файла, расположение данных, формат записи дат и&nbsp;телефонных номеров. Подробнее о&nbsp;том, как должен выглядеть файл для импорта&nbsp;&mdash; в&nbsp;статье по&nbsp;ссылке ниже.

[Как подготовить файл для импорта](https://docs.sendsay.ru/subscribers/import-and-export/how-to-prepare-file-for-import)

### 4. Импортируйте подписчиков в&nbsp;Sendsay

:::tip Важно
Количество подписчиков ограничено тарифом&nbsp;&mdash; чтобы узнать лимиты, откройте меню аккаунта и&nbsp;выберите пункт **Оплата**. Если вы&nbsp;хотите импортировать более крупную базу, необходимо сменить тариф.
:::

Импортируйте контакты и&nbsp;данные подписчиков в&nbsp;Sendsay. Также перенесите неподтверждённых подписчиков&nbsp;&mdash; им&nbsp;можно будет отправить письма подтверждения подписки.

[Как импортировать подписчиков](https://docs.sendsay.ru/subscribers/import-and-export/how-to-import-subscribers)

Подтверждения также потребуют ролевые адреса (например, info@, list@, hello@, support@, sales@). Если это список ваших B2B-клиентов, <SupportLink>напишите в чат поддержки</SupportLink> &mdash; вам помогут их&nbsp;активировать.

[Как активировать неподтверждённые адреса](https://docs.sendsay.ru/subscribers/contacts/how-to-activate-inactive-contacts)

Если вы&nbsp;планируете регулярно импортировать подписчиков, можно настроить автоматический импорт из&nbsp;файла, размещённого на&nbsp;вашем сервере. Так сервис будет загружать оттуда новые данные в&nbsp;указанное время.

[Как запустить импорт подписчиков по&nbsp;расписанию](https://docs.sendsay.ru/automations/autoimport/how-to-set-autoimport)

### 5. Перенесите отписавшиеся контакты

Отписавшиеся контакты импортировать в&nbsp;базу необязательно, но&nbsp;чтобы случайно не&nbsp;отправить им&nbsp;рассылки, добавьте их&nbsp;адреса в&nbsp;стоп-лист &laquo;Заблокированы вручную&raquo;&nbsp;&mdash; тогда они будут исключаться из&nbsp;рассылок.

:::tip Важно
Контакты из&nbsp;стоп-листа &laquo;Отписались от&nbsp;всех рассылок&raquo; нельзя удалить вручную или через API. Они станут доступны для рассылок, когда их&nbsp;владельцы переподпишутся на&nbsp;вас.
:::

Как добавить подписчиков в&nbsp;стоп-лист:

1. Зайдите в&nbsp;раздел **Подписчики &rarr; Стоп-листы** и&nbsp;откройте стоп-лист &laquo;Заблокированы вручную&raquo;.
2. Нажмите синюю кнопку &laquo;Добавить в&nbsp;стоп-лист&raquo; и&nbsp;вставьте список контактов в&nbsp;форму.

Также желательно настроить в&nbsp;текущем сервисе интеграцию с&nbsp;Sendsay, чтобы в&nbsp;стоп-лист автоматически передавались все новые отписки&nbsp;&mdash; они могут приходить от&nbsp;старых рассылок ещё пару месяцев.

[Как добавить контакт в&nbsp;стоп-лист через API](https://sendsay.ru/api/api.html#Внести-в-стоп-лист)

Рекомендуем не&nbsp;удалять аккаунт в&nbsp;текущем сервисе ещё пару недель после переезда, чтобы точно ничего не&nbsp;забыть в&nbsp;старой базе.

## Перенос шаблонов писем

Переносить письма из&nbsp;старого сервиса в&nbsp;Sendsay необязательно: вы&nbsp;сможете создать новые письма в&nbsp;нашем блочном редакторе.

[Как создать письмо в&nbsp;блочном редакторе](https://docs.sendsay.ru/email-campaigns/create-your-campaign/drag-and-drop-editor)

Если требуется перенести шаблоны писем, продолжайте следовать инструкции&nbsp;&mdash; далее рассказываем, как экспортировать письма из&nbsp;популярных сервисов рассылок.

### 6. Экспортируйте шаблоны писем из старого сервиса

Как это сделать:

<Tabs>
<TabItem value="key6" label="В SendPulse">

В&nbsp;левом меню перейдите в&nbsp;раздел **Шаблоны &rarr; Личные**. Затем выберите нужный шаблон, откройте список у&nbsp;его названия и&nbsp;выберите **Экспортировать шаблон**.

<p align="center">
  <img src={exportTemplateSendpulse} alt="Export the template from Sendpulse" />
</p>

:::tip Важно
Экспортировать шаблоны писем из&nbsp;SendPulse можно только на&nbsp;тарифе Standart и&nbsp;выше.
:::

Если вы&nbsp;хотите перенести несколько писем, нужно экспортировать каждое отдельно.

</TabItem>
<TabItem value="key7" label="В Unisender">

В Unisender есть две версии интерфейса редактора кампании: старая и новая.

В новой версии для экспорта шаблонов и писем вы можете скопировать HTML-код шаблона и перенести его в Sendsay.

Для этого в левом меню перейдите в раздел **Рассылки** → **Письма**, затем выберите нужное письмо и зайдите в его карточку:

![Export template from unisender new mails](/img/getting-started\how-to-migrate-to-sendsay/export-template-from-unisender-new-mails.png)

Перейдите к шагу **Дизайн письма**:

![Export template from unisender new design](/img/getting-started\how-to-migrate-to-sendsay/export-template-from-unisender-new-design.png)

Нажмите на кнопку **Режим кода** и скопируйте содержимое письма из правой части страницы. Сохраните скопированный текст, например, в Блокноте.

![Export template from unisender new code](/img/getting-started\how-to-migrate-to-sendsay/export-template-from-unisender-new-code.gif)

<Details summary='Экспорт в старом интерфейсе Unisender'>

Если вы хотите экспортировать шаблон из старой версии интерфейса — отправьте архив письма себе на почту.

В&nbsp;левом меню перейдите в&nbsp;раздел **Рассылки &rarr; Письма**, затем выберите нужное письмо и&nbsp;зайдите в&nbsp;его карточку:

<p align="center">
  <img src={exportTemplateUnisender1} alt="Export the template from Unisender" />
</p>

На&nbsp;шаге Отправить рассылку нажмите три точки у&nbsp;предпросмотра письма и&nbsp;выберите **Отправить архив письма на&nbsp;почту**:

<p align="center">
  <img src={exportTemplateUnisender2} alt="Export the template from Unisender" />
</p>

Перейдите в&nbsp;свою почту, откройте письмо от&nbsp;Unisender и&nbsp;скачайте архив по&nbsp;ссылке.

:::tip Важно
Файл с&nbsp;архивом доступен для скачивания 24&nbsp;часа с&nbsp;момента отправки письма.
:::

Если вы&nbsp;хотите перенести несколько писем, нужно экспортировать каждое отдельно.

</Details>

</TabItem>
<TabItem value="key8" label="В Mailchimp">

В&nbsp;аккаунте Mailchimp можно экспортировать разом все кампании и&nbsp;шаблоны. Для этого аерейдите в&nbsp;меню аккаунта, нажав на&nbsp;свой логин в&nbsp;левом нижнем углу, и&nbsp;выберите пункт **Profile &rarr; Settings &rarr; Manage my&nbsp;data**.

Отметьте галочками пункты **Campaigns** и&nbsp;**Templates**, выберите нужный период и&nbsp;нажмите &laquo;Export Data&raquo;:

<p align="center">
  <img src={exportTemplateMailchimp} alt="Export the template from Mailchimp" />
</p>

:::tip Важно
В Mailchimp есть ограничение на один экспорт в течение 24 часов.
:::

</TabItem>
<TabItem value="key9" label="В GetResponse">

В&nbsp;верхнем меню перейдите в&nbsp;раздел **Email-маркетинг &rarr; Мои шаблоны**, выберите нужный шаблон, нажмите три точки и&nbsp;нажмите Скачать HTML.

<p align="center">
  <img src={exportTemplateGetresponse} alt="Export the template from GetResponse" />
</p>

Если вы&nbsp;хотите перенести несколько писем, нужно экспортировать каждое отдельно.

</TabItem>
<TabItem value="key10" label="В DashaMail">

У&nbsp;DashaMail нет возможности экспорта шаблонов и&nbsp;писем, но&nbsp;вы&nbsp;можете скопировать HTML-код шаблона и&nbsp;перенести его в&nbsp;Sendsay. Для этого в&nbsp;верхнем меню перейдите в&nbsp;раздел **Шаблоны**, выберите нужный макет и&nbsp;нажмите «Посмотреть макет».

![Export template from dashamail](/img/getting-started\how-to-migrate-to-sendsay/export-template-from-dashamail.png)

Кликните правой кнопкой мыши в любом месте открывшейся страницы с макетом и откройте исходный код страницы.

![Export template from dashamail code](/img/getting-started\how-to-migrate-to-sendsay/export-template-from-dashamail-code.gif)

Скопируйте содержимое письма во&nbsp;вкладке **HTML-код** и&nbsp;сохраните его, например, в&nbsp;Блокноте.

</TabItem>
</Tabs>

### 7. Перенесите шаблоны писем в&nbsp;Sendsay

Чтобы перенести шаблоны писем в&nbsp;новый сервис рассылок, необходимо загрузить полученный HTML-код. Его можно загрузить как в&nbsp;шаблон, так и&nbsp;в&nbsp;рассылку.

[Как загрузить HTML-шаблон](https://docs.sendsay.ru/email-campaigns/create-your-campaign/how-to-upload-html-template)

После переноса шаблонов проверьте данные персонализации, а также ссылки для отписки и веб-версии писем. В этом вам помогут наши материалы:

- [Как персонализировать рассылку](https://docs.sendsay.ru/email-campaigns/personalization/how-to-personalize-campaign)
- [Футер в письме](https://docs.sendsay.ru/email-campaigns/settings/campaign-footer)
- [Веб-версия письма](https://docs.sendsay.ru/email-campaigns/create-your-campaign/web-version)

Когда база контактов и&nbsp;шаблоны писем перенесены в&nbsp;Sendsay, переходите к&nbsp;следующему этапу миграции.

## Подготовка к&nbsp;работе

### 8. Добавьте и&nbsp;подтвердите отправителя писем

Отправитель письма&nbsp;&mdash; это имя и&nbsp;электронный адрес, от&nbsp;которого получателям приходит рассылка. Если вы&nbsp;долго использовали определённое имя отправителя, лучше оставить его без изменений, чтобы не&nbsp;путать подписчиков.

:::tip Важно
В&nbsp;качестве отправителей нельзя использовать бесплатные адреса на&nbsp;Mail.ru, Gmail.com и&nbsp;Yandex.ru, потому что это противоречит DMARC-политикам этих доменов и&nbsp;нашей [антиспам-политике](https://sendsay.ru/about/antispam).
:::

Чтобы добавить отправителя писем:

1. В&nbsp;правом верхнем углу нажмите на&nbsp;свой логин и&nbsp;в&nbsp;меню аккаунта выберите **Настройки системы**. Во&nbsp;вкладке **Отправители** нажмите &laquo;Добавить отправителя&raquo;.
2. Введите имя и&nbsp;адрес.

Теперь нужно подтвердить отправителя: на&nbsp;указанную почту придёт письмо подтверждения&nbsp;&mdash; перейдите по&nbsp;ссылке из&nbsp;него, чтобы активировать адрес.

Также вы&nbsp;можете добавить аватар отправителя.

[Как настроить аватар отправителя](https://docs.sendsay.ru/email-campaigns/settings/sender-avatar)

### 9. Настройте email-аутентификацию (опционально)​

Email-аутентификация защищает рассылки от&nbsp;злоумышленников, которые теоретически могут отправить письмо от&nbsp;вашего имени и&nbsp;адреса, подставив своё содержание (это называется фишинг).

Есть два способа настройки аутентификации:

- вы&nbsp;можете самостоятельно подключить домен к&nbsp;Sendsay, настроив DKIM-подпись,
- либо можно заказать полную настройку email-аутентификации у&nbsp;наших специалистов&nbsp;&mdash; вам настроят DKIM-подпись, SPF-подпись, DMARC-политику и&nbsp;дополнительные параметры домена. Это платная услуга: чтобы узнать стоимость и&nbsp;заказать, <SupportLink>напишите в чат поддержки</SupportLink>.

Также у&nbsp;нас есть большая основная статья про email-аутентификацию, которая подробно объясняет её&nbsp;принцип работы и&nbsp;порядок настройки.

[Как подключить домен и&nbsp;настроить email-аутентификацию](https://docs.sendsay.ru/email-campaigns/settings/how-to-connect-domain)

### 10. Настройте интеграции с внешними системами (опционально)​

Если для рассылок подтягивались данные с&nbsp;сайта, из&nbsp;CRM или других источников, нужно отключить интеграцию с&nbsp;предыдущим сервисом рассылок. Затем&nbsp;&mdash; настроить взаимодействие Sendsay с&nbsp;внешними системами. Это делается самостоятельно — если у вас возникнут вопросы, <SupportLink>напишите в чат поддержки</SupportLink>.

[Интеграции с&nbsp;приложениями](https://docs.sendsay.ru/integrations)

Приятного пользования Sendsay! 🙂
